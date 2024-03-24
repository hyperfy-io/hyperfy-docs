---
sidebar_position: 40
---

# Worlds

A world is a place you can visit in Hyperfy. As a creator you have the tools to design your world exactly how you want and can use code to define how people interact with the environment.

Hyperfy provides primitives that you can combine to build almost anything you imagine, using a real javascript environment for absolute freedom of expression, and then wraps it all up with multiplayer, physics, voice chat and infinite scalability without any extra effort.

## Infinite Scalability

By default each world scales to infinity. Although there is a cap in the amount of people that can be in a single instance of your world, when this limit is reached another instance is launched for new people to join.

By default each instance has a capacity of 10 people, but you can change this to a lower or higher number to match your optimisation efforts or unique game mechanics. 

Capacity is controlled by the `capacity` field in [component.json](/ref/component.json).

## Singleton Worlds

There are scenarios in which you may only want a single instance of your world to exist at any time:

- Hosting small events/meetups with a limited number of guests
- Fostering certain game mechanics that require only a single instance
- Creating persistent experiences (discussed below)

To do this, you can configure your world to be singleton by setting the `singleton` field in your [component.json](/ref/component.json) to `true`. Once the capacity of the world is reached, new users joining will be told that the world is full.

## Persistent Worlds

:::info

This feature is currently in private beta while we battle test.

:::

Infinite scalability means that there can be multiple different "versions" of a world running at a time. This makes it virtually impossible to allow people to make changes inside of your world that are permanent. Persistent worlds change this.

As mentioned above, when a world is **singleton** there is only ever a single instance of a world at a time. But when a world becomes singleton our problem of persistence goes away.

When your world is singleton, you now have the ability to call [persist()](/ref/persist) at any time. The current state of your world will be remembered and not reset after everybody leaves.