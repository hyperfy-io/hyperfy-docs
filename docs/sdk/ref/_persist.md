---
sidebar_position: 40
---

# `persist()`

Persists the current state of a world so that even after everyone leaves, the state will be rehydrated when it starts back up again.

Only available to `singleton` worlds, and can only be called on the server.

Used to select state from the replicated store.

```jsx
import React, { useEffect } from 'react'
import { persist, useServer, useSyncState } from 'hyperfy'

export default function Box() {
  const [color, dispatch] = useSyncState(state => state.color)

  // persist state each color change
  useServer(() => {
    persist()
  }, [color])

  return (
    <box
      color={color}
      onPointerDown={() => {
        dispatch('set', color === 'red' ? 'blue' : 'red')
      }}
    />
  )
}

const DefaultState = {
  color: 'red',
}

export function getStore(state = DefaultState) {
  return {
    state,
    actions: {
      set(state, color) {
        state.color = color
      },
    },
  }
}
```
