# `useWorld()`

A React hook that provides access to the underlying engine.

```jsx
import React from 'react'
//highlight-next-line
import { useWorld } from "hyperfy";

export default function Box() {
//highlight-start
  const world = useWorld();
  world.chat("Hello world!");
//highlight-end

  return  <app></app>;
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

### .getSlug()

Returns the slug of the current world.

Example: when in https://hyperfy.io/meadow `world.getSlug()` will return `meadow`

### .getShard()

Returns the shard (instance) ID of the current world server

Example: when in https://hyperfy.io/meadow/~k0h1 `world.getShard()` will return `~k0h1`

### .getTime()

Returns the current time of the server in milliseconds. This time is also synchronized across and available to all clients.

```jsx
import React from 'react'
//highlight-next-line
import { useWorld } from "hyperfy";

export default function Box() {
//highlight-next-line
  const world = useWorld();

//highlight-start
  if (world.isServer) {
    console.log(`I'm running on the server!`);
  }
  if (world.isClient) {
    console.log(`I'm running on a client!`);
  }
//highlight-end

  return (
    <app>
//highlight-start
      <text color="white" value={`
        isServer: ${world.isServer}
        isClient: ${world.isClient}
        isDesktop: ${world.isDesktop}
        isMobile: ${world.isMobile}
        isVR: ${world.isVR}
        worldSlug: ${world.getSlug()}
        worldShard: ${world.getShard()}
        worldTime: ${world.getTime()}
      `} />
//highlight-end
    </app>
  );
}
```

### .getAvatar(avatarUid)

Returns an `Avatar` reference. If no avatarUid is provided it returns the local avatar.

### .getAvatars()

Returns an array of `Avatar` references

### .chat(text, localOnly)

Posts an event into the chat. If `localOnly` is `true` only the current client will see it. Has no effect on the server.

```jsx
import React, { useEffect } from 'react'
//highlight-next-line
import { useWorld } from "hyperfy";

export default function App() {
//highlight-next-line
  const world = useWorld();

  function getAvatars() {
//highlight-next-line
    const localAvatar = world.getAvatar();
//highlight-next-line
    world.chat(`Your avatar name: ${localAvatar.name}`, true); //local chat only

//highlight-next-line
    world.getAvatars().forEach((avatar) => {
      if (avatar.uid !== localAvatar.uid) {
//highlight-next-line
        world.chat(`Remote avatar name: ${avatar.name}`);
      }
    });
  }

  return (
    <app>
      <box onPointerDown={getAvatars}/>
    </app>
  );
}
```

### .open(url, newTab=false)

Opens a URL or Hyperfy world.

### .http(options)

Performs an HTTP request similar to fetch()

```jsx
import React, { useEffect } from 'react'
//highlight-next-line
import { useWorld } from "hyperfy";

export default function App() {
//highlight-next-line
  const world = useWorld();

  function switchWorld() {
//highlight-next-line
    world.open("/world");
  }

  function openWorld() {
//highlight-next-line
    world.open("/world", true);
  }

  function openLink() {
//highlight-next-line
    world.open("https://google.com", true); 
  }

   async function getHttp() {
//highlight-start
    const response = await world.http({
      method: "GET",
      url: "https://cat-fact.herokuapp.com/facts",
      //data: { foo: "bar" },
    });
//highlight-end
    console.log(response)
  }

  return (
    <app>
      <text color="white" position={[0, 0, 0]} value="switch world" onPointerDown={switchWorld}/>
      <text color="white" position={[2, 0, 0]} value="open world" onPointerDown={openWorld}/>
      <text color="white" position={[4, 0, 0]} value="open link" onPointerDown={openLink}/>
      <text color="white" position={[6, 0, 0]} value="http request" onPointerDown={getHttp}/>
    </app>
  );
}
```

### .getAudioAnalyser(sourceId)

Returns an AudioAnalyser that targets a sourceId from `<video audioSourceId>` or `<audio sourceId>`.

If the source doesn't exist, it will be connected when it becomes available.

AudioAnalyser currently has a single method `.getByteFrequencyData()` which returns a `Uint8Array` of values sampled from the audio source.

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
