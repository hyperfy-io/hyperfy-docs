# `RAD2DEG`

A utility for converting radians to degrees.

```jsx
import React from "react";
//highlight-next-line
import { DEG2RAD, RAD2DEG, Euler } from "hyperfy";

export default function App() {
  const rotation = new Euler(0, 90 * DEG2RAD, 0, "YXZ");
  console.log(rotation);

//highlight-next-line
  const yDegrees = rotation.y * RAD2DEG; //90
  console.log(yDegrees);

  return <app />;
}
```
