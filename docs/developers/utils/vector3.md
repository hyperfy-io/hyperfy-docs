# `Vector3`

A utility identical to THREE.Vector3 so you don't have to BYO.

See [three.js docs](https://threejs.org/docs/#api/en/math/Vector3) for more info.

```jsx
import React from "react";
//highlight-next-line
import { Vector3 } from "hyperfy";

export default function App() {
//highlight-next-line
  const vec3 = new Vector3().fromArray([0, 100, 0]);
  console.log(vec3);

  return <app />;
}
```
