---
sidebar_position: 50
---

# Sync State

While you are free to use React's `useState` hooks in order to change things only for the current avatar, it's likely you'll want to have some or all of your state synchronized with all clients connected to the world so that everyone sees the same thing.

To do this, export a `getStore` function and then use the `useSyncState` hook to read and write to the distributed store.

The following example shows a cube that changes color when anyone clicks on it. The color change is observed by **everyone** in the world:

```jsx
import React from "react";
// highlight-next-line
import { useSyncState } from "hyperfy";

export default function ColorCube() {
// highlight-next-line
  const [color, dispatch] = useSyncState((state) => state.color);
  return (
    <app>
// highlight-next-line
      <box color={color} onPointerDown={() => dispatch("toggle")} />
    </app>
  );
}

const initialState = {
  color: "blue",
};

// highlight-start
export function getStore(state = initialState) {
  return {
    state,
    actions: {
      toggle(state) {
        state.color = state.color === "blue" ? "red" : "blue";
      },
    },
  };
}
// highlight-end
```

Synchronized state is inspired by the flux/redux pattern popular on the web, but instead of dispatching events locally they are distributed across all clients and the server.

While it may take a second to get used to we've found that this flow is far more efficient and superior to what most platforms do by syncing the component changes of every entity in the space each time they change. This is the ultimate flex for declarative programming that other 3D engines don't have access to.
