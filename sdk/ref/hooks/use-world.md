# `useWorld()`

A React hook that provides access to the underlying engine.

```jsx
import { useWorld } from "hyperfy";

function Box() {
  const world = useWorld();

  if (world.isServer) {
    console.log(`I'm running on the server!`);
  }

  return <box />;
}
```

### .isServer

Whether the app is currently running on the server

### .isClient

Whether the app is currently running on a client

### .isDesktop

Whether we are running on desktop

### .isMobile

Whether we are running on mobile / touch device

### .isVR

Whether we are running on a VR device

### .getShard()

Returns the shard ID of the current server

### .getTime()

Returns the current time of the server in milliseconds. This time is also synchronized across and available to all clients.

### .getAvatar(avatarUid)

Returns an `Avatar` reference. If no avatarUid is provided it returns the local avatar.

### .getAvatars()

Returns an array of `Avatar` references

### .getAudioAnalyser(sourceId)

Returns an AudioAnalyser that targets a sourceId from `<video audioSourceId>` or `<audio sourceId>`.

If the source doesn't exist, it will be connected when it becomes available.

AudioAnalyser currently has a single method `.getByteFrequencyData()` which returns a `Uint8Array` of values sampled from the audio source.

### .chat(text, localOnly)

Posts an event into the chat. If `localOnly` is `true` only the current client will see it. Has no effect on the server.

```jsx
world.chat("You picked up a key.", true);
```

### .open(url, newTab=false)

Opens a URL. Examples:-

```jsx
world.open("/my-other-world"); // switch world
world.open("/expanse", true); // open world in a new tab
world.open("https://google.com", true); // open link in a new tab
```

### .http(options)

Performs an HTTP request similar to fetch()

```jsx
const response = await world.http({
  method: "POST",
  url: "https://foo.com",
  data: { foo: "bar" },
});
```

### .onUpdate(callback)

Subscribes to frame updates. Returns a function that unsubscribes.

```jsx
import React, { useRef } from "react";
import { useWorld } from "hyperfy";

function Box() {
  const ref = useRef();
  const world = useWorld();

  useEffect(() => {
    return world.onUpdate((delta) => {
      ref.current.setPosition(/* ... */);
    });
  });

  return <box ref={ref} />;
}
```

### .on(eventName, callback)

Subscribes to a world event. Events can be system based such as `join`, `leave` and `chat`, or custom events emitted by another app.

Returns a function that unsubscribes from the event.

```jsx
import React from "react";
import { useWorld } from "hyperfy";

function Box() {
  const world = useWorld();

  useEffect(() => {
    return world.on("join", (avatar) => {
      console.log(`${avatar.name} joined.`);
    });
  }, []);

  return <box />;
}
```

### .off(eventName, callback)

Unsubscribes from a world event.

### .once(eventName, callback)

Subscribes to a world event just once.

### .emit(eventName, ...args)

Emits a world event that other apps might be listening for.

Some system event names are reserved: `join`, `leave` and `chat`

### .notify(eventName, ...args)

Sends an event directly to the server. If the caller is already on the server this acts the same as `.emit()`.

Some system event names are reserved: `join`, `leave` and `chat`

### .broadcast(eventName, ...args)

Sends an event to the server and all other clients.

Some system event names are reserved: `join`, `leave` and `chat`
