# `useSyncState()`

A React hook used to read and write state distributed across all clients.

```jsx
import React from 'react'
//highlight-next-line
import { useSyncState } from "hyperfy";

export default function Box() {
//highlight-next-line
  const [blue, dispatch] = useSyncState((state) => state.blue);

  return (
    <app>
      <box
        color={blue ? "blue" : "red"}
//highlight-next-line
        onPointerDown={() => dispatch("toggle")}
      />
    </app>
  );
}

const initialState = {
  blue: false,
};

//highlight-start
export function getStore(state = initialState) {
  return {
    state,
    actions: {
      toggle(state) {
        state.blue = !state.blue;
      },
    },
  };
}
//highlight-end
```
