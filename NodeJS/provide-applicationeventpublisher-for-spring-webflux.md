---
title: Provide 'ApplicationEventPublisher' for Spring WebFlux
permalink: /2020/10/provide-applicationeventpublisher-for-spring-webflux.html
date: 2022-11-10T08:35:48+07:00
updated: 2022-11-10T08:35:48+07:00
category: ['Programming', 'TS']
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

```typescript
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
