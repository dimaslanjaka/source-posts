---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-11-10T08:35:48+07:00
description: Provide ApplicationEventPublisher for Spring WebFlux
  ApplicationEventPublisher is provided in Spring for publishing events, which
  is useful in some scenarios, f
lang: en
permalink: /2020/10/provide-applicationeventpublisher-for-spring-webflux.html
tags:
  - java
  - springboot
  - webflux
title: Provide ApplicationEventPublisher for Spring WebFlux
type: post
updated: 2023-09-03T04:27:59+07:00
wordcount: 2984
---

ApplicationEventPublisher is provided in Spring for publishing events, which is useful in some scenarios, for example, when I create an item, and another service listens for item creation and creates inventory for it. So it's very practical in Spring MVC, and I often use it for decoupling, but when I switch to WebFlux, it's embarrassing. Because ApplicationEventPublisher is a synchronous operation, it does not support reactive, ie streaming operations.

So, I implement a similar publish-subscribe pattern in WebFlux to replace ApplicationEventPublisher

## Implement the Event service

Our event service is divided into 3 parts

-   Encapsulation of published objects
-   Design a common listening interface
-   Provide an object like ApplicationEventPublisher to publish events

## ObjectEventNotifier

First, encapsulate the published object. This step is unavoidable even if it is ApplicationEventPublisher. Otherwise, you listen to an object, but you don't know whether the object is created or deleted. What should you do?

```java
public class ObjectEventNotifier<T> implements ResolvableTypeProvider {

    private final T object;
    private final Type type;

    private ObjectEventNotifier(T object, Type type) {
        this.object = object;
        this.type = type;
    }

    public static <T> ObjectEventNotifier<T> from(T object, Type type) {
        return new ObjectEventNotifier<>(object, type);
    }

    @Override
    public ResolvableType getResolvableType() {
        return ResolvableType.forClassWithGenerics(getClass(), ResolvableType.forInstance(object));
    }

    public T getObject() {
        return this.object;
    }

    public Type getType() {
        return this.type;
    }

    public enum Type {
        Create, Update, Delete
    }
}
```

The above class, according to the enumeration Type, classifies objects so that they can be handled differently in different situations

## EventListener

Next, design the listening interface. Generally speaking, we choose different consumers according to the type of class. Therefore, the simple listening interface is as follows

```java
public interface EventListener<T> {

    Class<T> target();

    Publisher<Void> consume(ObjectEventNotifier<T> consumer);

}
```

But in this way, there is a problem, when we create a listening service, it will be like the following

```java
@Bean
public EventListener<Goods> listener() {
    return new EventListener<>() {
        @Override
        public Class<Goods> target() {
            return Goods.class;
        }
        @Override
        public Publisher<Void> consume(ObjectEventNotifier<Goods> consumer) {
            // ...
        }
    };
}
```

This code is really hard to describe, so a simplified version of the creation method must be provided for the listening interface

```java
public interface EventListener<T> {
    //...
    static <T> EventListener<T> register(Class<T> target, Function<ObjectEventNotifier<T>, Publisher<Void>> fn) {
        return new EventListener<>() {
            @Override
            public Class<T> target() {
                return target;
            }
            @Override
            public Publisher<Void> consume(ObjectEventNotifier<T> consumer) {
                return fn.apply(consumer);
            }
        };
    }
}

@Bean
public EventListener<Goods> listener() {
    return EventListener.register(Goods.class, notifier -> ...);
}
```

so much better

## EventService

Finally, implement our most important event service, which is divided into two parts

-   Receive listening services and classify based on class type
-   Accept the published object, encapsulate and select the corresponding monitoring service consumption according to the type

In the first part, since we use Spring boot, we can let spring give us the listening service we want. We only need to store the EventListener in different Maps according to the type.

```java
@Service
public class EventService {

    public Map<String, List<Object>> store = new ConcurrentHashMap<>();

    @SuppressWarnings({"unchecked", "rawtypes"})
    public EventService(List<EventListener> listeners) {
        listeners.forEach(listener -> {
            this.register(listener.target(), listener::consume);
        });
    }

    public <T> void register(Class<T> target, Function<ObjectEventNotifier<T>, Publisher<Void>> consumer) {
        String name = target.getName();
        List<Object> consumers = store.getOrDefault(name, null);
        if (consumers == null) {
            consumers = new ArrayList<>();
            store.put(name, consumers);
        }
        consumers.add(consumer);
    }
}
```

The second part, this is the difficulty in reactive. The reactive is non-blocking, so the consumer also needs to return a non-blocking result. The previous interface returned YES `Publisher<Void>` because this is an unprocessed result.

```java
@Service
public class EventService {

    public Map<String, List<Object>> store = new ConcurrentHashMap<>();

    @SuppressWarnings({"unchecked"})
    public <T> Flux<Void> publish(ObjectEventNotifier.Type type, T target) {
        String name = target.getClass().getName();
        List<Object> consumers = store.getOrDefault(name, null);
        if (consumers == null) {
            return Flux.empty();
        }
        return Flux
            .fromIterable(consumers)
            .flatMap(obj -> {
                Function<ObjectEventNotifier<T>, Publisher<Void>> consumer = (Function<ObjectEventNotifier<T>, Publisher<Void>>) obj;
                Publisher<Void> apply = consumer.apply(ObjectEventNotifier.from(target, type));
                return apply == null ? Mono.empty() : apply;
            });
    }

    public <T> Mono<T> publishCreate(T target) {
        return this.publish(ObjectEventNotifier.Type.Create, target)
            .then(Mono.just(target));
    }

    public <T> Mono<T> publishUpdate(T target) {
        return this.publish(ObjectEventNotifier.Type.Update, target)
            .then(Mono.just(target));
    }

    public <T> Mono<T> publishDelete(T target) {
        return this.publish(ObjectEventNotifier.Type.Delete, target)
            .then(Mono.just(target));
    }

}
```

Mainly the code of the publish part, the following publishCreate, etc., are for quick operation

## Try the written Event service

Create a cargo service

```java
public class GoodsService {

    @Resource
    private EventService eventService;

    public Mono<Goods> createGoods() {
        Goods apple = Goods.of(1, "苹果");
        return Mono.just(apple)
            .flatMap(eventService::publishCreate);
    }

}
```

Create a monitoring service for Goods (create two, after all, this kind of monitoring is generally one-to-many)
```java
@Configuration
public class ServerConfiguration {

    @Bean
    public GoodsService goodsService() {
        return new GoodsService();
    }

    @Bean
    public StockService stockService() {
        return new StockService();
    }

    @Bean
    public EventListener<Goods> listener1(StockService stockService) {
        return EventListener.register(Goods.class, stockService::initStockWithGoods1);
    }

    @Bean
    public EventListener<Goods> listener2(StockService stockService) {
        return EventListener.register(Goods.class, stockService::initStockWithGoods2);
    }

}

@Slf4j
public class StockService {

    public Publisher<Void> initStockWithGoods1(ObjectEventNotifier<Goods> notifier) {
        ObjectEventNotifier.Type type = notifier.getType();
        if (type == ObjectEventNotifier.Type.Create) {
            log.error("Create stock for: " + notifier.getObject().getName());
            return Mono.just(Stock.of(1, 0)).then();
        }
        return Mono.empty();
    }

    public Publisher<Void> initStockWithGoods2(ObjectEventNotifier<Goods> notifier) {
        log.error("Another listener for Goods: " + notifier.getObject().getName());
        return Mono.empty();
    }

}
```

Create a test case that calls create apple

```java
@SpringBootTest
class GoodsServiceTest {

    @Resource
    GoodsService goodsService;

    @Test
    void createGoods() {
        goodsService.createGoods()
            .as(StepVerifier::create)
            .expectNextCount(1)
            .verifyComplete();
    }
}
```

Running, we can see the following results, indicating that when the apple was created, two methods in the inventory were called

## The source code is here

> Source code: [https://github.com/jiangtj-lab/ex-flux-event](https://github.com/jiangtj-lab/ex-flux-event)

> The progress of Spring's support of the reactive technology stack for ApplicationEventPublisher can be seen in this Issue: [https://github.com/spring-projects/spring-framework/issues/21025](https://github.com/spring-projects/spring-framework/issues/21025)
