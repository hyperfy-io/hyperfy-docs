# `Quaternion`

A utility identical to THREE.Quaternion so you don't have to BYO.

See [three.js docs](https://threejs.org/docs/#api/en/math/Quaternion) for more info.

```jsx
import React from "react";
//highlight-next-line
import { Quaternion } from "hyperfy";

export default function App() {
//highlight-next-line
  const quaternion = new Quaternion().fromArray([0, 0, 0, 1]);
  console.log(quaternion);

  return <app />;
}
```
