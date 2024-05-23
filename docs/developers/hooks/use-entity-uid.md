# `useEntityUid()`

A React hook used to get the ID of the current entity.

Useful if you need a unique local ID or to emit an event with data describing who emitted it.

```jsx
import React from 'react'
  //highlight-next-line
import { useEntityUid } from "hyperfy";

export default function App() {
  //highlight-next-line
  const entityId = useEntityUid();

  return (
    <app>
      <text color="#ffffff" value={`This entity is ${entityId}`} />
    </app>
  );
}
```
