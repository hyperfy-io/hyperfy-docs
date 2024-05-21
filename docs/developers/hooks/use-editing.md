# `useEditing()`

A React hook that returns true if the editor is open.

Useful for displaying objects for positioning, especially when an app would otherwise be invisible to everyone else.

```jsx
import React from 'react'
  //highlight-next-line
import { useEditing } from "hyperfy";

export default function App() {
  //highlight-next-line
  const editing = useEditing();

  return <app>{editing && <text color="#ffffff" value="Editor is open!" />}</app>;
}
```
