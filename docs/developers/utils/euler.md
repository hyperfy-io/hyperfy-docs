# `Euler`

A utility identical to THREE.Euler so you don't have to BYO.

See [three.js docs](https://threejs.org/docs/#api/en/math/Euler) for more info.

```jsx
import React from "react";
//highlight-next-line
import { DEG2RAD, RAD2DEG, Euler } from "hyperfy";

export default function App() {
//highlight-next-line
  const rotation = new Euler().fromArray([0, DEG2RAD * 90, 0]);
  console.log(rotation);

  return <app />;
}
```
