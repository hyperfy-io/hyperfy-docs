# `useWorld()`

A React hook that provides access to the underlying engine.

```jsx
import React from "react";
//highlight-next-line
import { useWorld } from "hyperfy";

export default function Box() {
  //highlight-start
  const world = useWorld();
  world.chat("Hello world!");
  //highlight-end

  return <app></app>;
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
import React from "react";
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
      <text
        color="white"
        value={`
        isServer: ${world.isServer}
        isClient: ${world.isClient}
        isDesktop: ${world.isDesktop}
        isMobile: ${world.isMobile}
        isVR: ${world.isVR}
        worldSlug: ${world.getSlug()}
        worldShard: ${world.getShard()}
        worldTime: ${world.getTime()}
      `}
      />
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
import React, { useEffect } from "react";
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
      <box onPointerDown={getAvatars} />
    </app>
  );
}
```

### .open(url, newTab=false)

Opens a URL or Hyperfy world.

### .http(options)

Performs an HTTP request similar to fetch()

```jsx
import React, { useEffect } from "react";
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
    console.log(response);
  }

  return (
    <app>
      <text
        color="white"
        position={[0, 0, 0]}
        value="switch world"
        onPointerDown={switchWorld}
      />
      <text
        color="white"
        position={[2, 0, 0]}
        value="open world"
        onPointerDown={openWorld}
      />
      <text
        color="white"
        position={[4, 0, 0]}
        value="open link"
        onPointerDown={openLink}
      />
      <text
        color="white"
        position={[6, 0, 0]}
        value="http request"
        onPointerDown={getHttp}
      />
    </app>
  );
}
```

### .onUpdate(callback)

Subscribes to frame updates. Returns a function that unsubscribes.

```jsx
import React, { useEffect } from "react";
//highlight-next-line
import { useWorld } from "hyperfy";

export default function App() {
  //highlight-next-line
  const world = useWorld();

  useEffect(() => {
    //highlight-start
    return world.onUpdate((delta) => {
      console.log(delta);
    });
    //highlight-end
  }, []);

  return <app></app>;
}
```

### .on(eventName, callback)

Subscribes to a world event. Events can be system based such as `join`, `leave` and `chat`, or custom events emitted by another app.

Returns a function that unsubscribes from the event.

### .off(eventName, callback)

Unsubscribes from a world event.

### .once(eventName, callback)

Subscribes to a world event just once.

```jsx
import React, { useEffect } from "react";
//highlight-next-line
import { useWorld } from "hyperfy";

export default function App() {
  //highlight-next-line
  const world = useWorld();

  useEffect(() => {
    //highlight-next-line
    return world.on("join", onJoin);
  }, []);

  const onJoin = (avatar) => {
    console.log(`${avatar.name} joined.`);
  };

  function off() {
    //highlight-next-line
    world.off("join");
  }

  function once() {
    //highlight-next-line
    world.once("join", onJoin);
  }

  return (
    <app>
      <text
        color="white"
        position={[0, 0, 0]}
        value="unsubscribe from join events"
        onPointerDown={off}
      />
      <text
        color="white"
        position={[2, 0, 0]}
        value="subscribe to a single join event"
        onPointerDown={once}
      />
    </app>
  );
}
```

### .emit(eventName, ...args)

Emits a world event that other apps might be listening for.

Some system event names are reserved: `join`, `leave` and `chat`

### .notify(eventName, ...args)

Sends an event directly to the server. If the caller is already on the server this acts the same as `.emit()`.

Some system event names are reserved: `join`, `leave` and `chat`

### .broadcast(eventName, ...args)

Sends an event to the server and all other clients.

Some system event names are reserved: `join`, `leave` and `chat`

```jsx
import React, { useEffect } from "react";
//highlight-next-line
import { useWorld } from "hyperfy";

export default function App() {
  //highlight-next-line
  const world = useWorld();

  useEffect(() => {
    return world.on("customEvent", (event) => {
      console.log("custom event received");
    });
  }, []);

  function emit() {
    //highlight-next-line
    world.emit("customEvent");
  }

  function notify() {
    //highlight-next-line
    world.notify("customEvent");
  }

  function broadcast() {
    //highlight-next-line
    world.broadcast("customEvent");
  }

  return (
    <app>
      <text
        color="white"
        position={[0, 0, 0]}
        value="emit event to local apps"
        onPointerDown={emit}
      />
      <text
        color="white"
        position={[2, 0, 0]}
        value="notify server apps"
        onPointerDown={notify}
      />
      <text
        color="white"
        position={[4, 0, 0]}
        value="broadcast event to server and all other clients"
        onPointerDown={broadcast}
      />
    </app>
  );
}
```

### .getAudioAnalyser(sourceId)

Returns an AudioAnalyser that targets a sourceId from `<video audioSourceId>` or `<audio sourceId>`.

If the source doesn't exist, it will be connected when it becomes available.

AudioAnalyser currently has a single method `.getByteFrequencyData()` which returns a `Uint8Array` of values sampled from the audio source.

```jsx
import React, { useEffect } from "react";
//highlight-next-line
import { useWorld } from "hyperfy";

export default function App() {
  //highlight-start
  const world = useWorld();
  const analyser = world.getAudioAnalyser("source1");
  //highlight-end

  useEffect(() => {
    return world.onUpdate((_) => {
      //highlight-next-line
      const frequencyData = analyser.getByteFrequencyData();
      console.log(frequencyData);
    });
  }, []);

  return (
    <app>
      <audio
        autoplay
        loop
        sourceId="source1"
        src="https://archive.org/download/kmart-the-lost-tapes-pdgxxn/Donut%20Specialist%20-%20Kmart-%20The%20Lost%20Tapes%20-%2007%20K%20Funk.mp3"
      />
    </app>
  );
}
```
