# `randomInt()`

Apps all run in a secure environment so don't have access to `Math.random()`.

This is a utility to give you similar functionality.

```jsx
import React from "react";
//highlight-next-line
import { randomInt } from "hyperfy";

export default function App() {
//highlight-next-line
  const randomNum = randomInt(0, 100);
  console.log(randomNum);

  return <app />;
}
```
