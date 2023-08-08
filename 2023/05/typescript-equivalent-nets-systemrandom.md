---
author: Dimas Lanjaka
categories:
  - programming
  - typescript
  - net
comments: true
date: 2023-05-20T13:15:14+07:00
description: A TypeScript port of .NETs System.Random
excerpt: A TypeScript port of .NETs System.Random
id: 0de74f67-8545-4888-83f5-d603cbd8ac8d
lang: en
photos: []
subtitle: A TypeScript port of .NETs System.Random
tags:
  - random
  - snippet
  - script
title: TypeScript equivalent .NETs System.Random
type: post
updated: 2023-08-08T14:45:07+07:00
wordcount: 1419
---

```ts
// by design, this returns the same values as .NET's System.Random
export default class Random {
    private static readonly INT_MAX_VALUE: number = 0x7fffffff;
    private static readonly INT_MIN_VALUE: number = 0x80000000;
    private static readonly MSEED = 161803398;

    private inext = 0;
    private inextp = 21;
    private seedArray = new Array(56);

    constructor(seed: number) {
        var subtraction = (seed == Random.INT_MIN_VALUE) ? Random.INT_MAX_VALUE : Math.abs(seed);
        let mj = Random.MSEED - subtraction;
        this.seedArray[55] = mj;
        let mk = 1;
        for (var i = 1; i < 55; i++) {
            const ii = (21 * i) % 55;
            this.seedArray[ii] = mk;
            mk = mj - mk;
            if (mk < 0) {
                mk += Random.INT_MAX_VALUE;
            }

            mj = this.seedArray[ii];
        }

        for (var k = 1; k < 5; k++) {
            for (var i = 1; i < 56; i++) {
                this.seedArray[i] -= this.seedArray[1 + (i + 30) % 55];
                if (this.seedArray[i] < 0) {
                    this.seedArray[i] += Random.INT_MAX_VALUE;
                }
            }
        }
    }

    protected sample = () => this.internalSample() * (1 / Random.INT_MAX_VALUE);

    public nextInteger = () => this.internalSample();
    public nextIntegerBetween = (minValue: number, maxValue: number) => Math.floor(this.nextNumberBetween(minValue, maxValue));
    public nextIntegerLessThan = (maxValue: number) => Math.floor(this.nextNumberLessThan(maxValue));
    public nextNumber = () => this.sample();
    public nextNumberBetween(minValue: number, maxValue: number) {
        if (minValue > maxValue)
            throw new Error("Argument out of range.");

        var range = maxValue - minValue;
        if (range <= Random.INT_MAX_VALUE)
            return this.sample() * range + minValue;

        return this.getSampleForLargeRange() * range + minValue;
    }

    public nextNumberLessThan(maxValue: number) {
        if (maxValue < 0)
            throw new Error("Argument out of range.");

        return this.sample() * maxValue;
    }

    private getSampleForLargeRange() {
        var result = this.internalSample();
        var negative = this.internalSample() % 2 == 0;
        if (negative) {
            result = -result;
        }

        let d = result;
        d += Random.INT_MAX_VALUE - 1;
        d /= 2 * Random.INT_MAX_VALUE - 1;
        return d;
    }

    private internalSample() {
        var locINext = this.inext;
        var locINextp = this.inextp;

        if (++locINext >= 56) {
            locINext = 1;
        }

        if (++locINextp >= 56) {
            locINextp = 1;
        }

        let retVal = this.seedArray[locINext] - this.seedArray[locINextp];
        if (retVal == Random.INT_MAX_VALUE) {
            retVal--;
        }

        if (retVal < 0) {
            retVal += Random.INT_MAX_VALUE;
        }

        this.seedArray[locINext] = retVal;
        this.inext = locINext;
        this.inextp = locINextp;
        return retVal;
    }
}
```

source: https://gist.github.com/smourier/f77617a802f097aea4b4f3778108b5ef
