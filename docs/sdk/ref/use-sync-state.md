---
sidebar_position: 45
---

# `useSyncState()`

A React hook used to read and write state distributed across all clients.

```jsx
import { useSyncState } from 'hyperfy'

export default function Box() {
  const [blue, dispatch] = useSyncState(state => state.blue)

  return (
    <app>
      <box
        color={blue ? 'blue' : 'red'}
        onPointerDown={() => dispatch('toggle')}
      />
    </app>
  )
}

const initialState = {
  blue: false,
}

export function getStore(state = initialState) {
  return {
    state,
    actions: {
      toggle(state) {
        state.blue = !state.blue
      },
    },
  }
}
```
