---
sidebar_position: 40
---

# React

Apps in Hyperfy are built using the declarative power of React – But – instead of rendering to the DOM your app is being rendered into an automatic multiplayer virtual world. Instead of using DOM elements like `<div>` and `<p>` you have access to powerful new elements such as `<model>` and `<rigidbody>`.

Everything else is Just React™, with full access to component based design, hooks, context and the entire React and Javascript ecosystem.

Your apps `index.js` file should export a default React component that will be used as the entry point for your app.

The following is a simple app that displays a large field of grass:

```jsx
import React from "react";

export default function Grass() {
  return (
    <app>
      <rigidbody>
        <box size={[100, 0.1, 100]} color="green" />
      </rigidbody>
    </app>
  );
}
```

## Performance

Thanks to React, Hyperfy is able to take full advantage of a virtual dom and only update things that need updating. On top of this, React can schedule complex tasks to happen later at a more optimal time. This is something no other engine can compete with.

One thing we **must** be careful with, is identifying when to jump into imperative code.

A perfect example of this is when animating objects each frame. Instead of thrashing React with state updates, it's best to do this _outside_ of react state:

```jsx
import React, { useRef, useEffect } from 'react'
import { useWorld, Vector3 } from 'hyperfy'

function MovingBox() {
  const ref = useRef()
  const world = useWorld()

  useEffect(() => {
    const box = ref.current
    const position = new Vector3()
// highlight-start
    return world.onUpdate(delta => {
      position.y += delta
      box.setPosition(position)
    })
// highlight-end
  }, [])

  return (
    <box ref={ref}>
  )
}
```
