---
sidebar_position: 45
---

# `useEntityUid()`

A React hook used to get the ID of the current entity.

Useful if you need a unique local ID or to emit an event with data describing who emitted it.

```jsx
import { useEntityUid } from 'hyperfy'

export default function App() {
  const entityId = useEntityUid()

  return (
    <app>
      <text value={`This entity is ${entityId}`} />
    </app>
  )
}
```
