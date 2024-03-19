# `Matrix4`

A utility identical to THREE.Matrix4 so you don't have to BYO.

See [three.js](https://threejs.org/docs/#api/en/math/Matrix4) docs for more info.

```jsx
import React from "react";
//highlight-next-line
import { Matrix4 } from "hyperfy";

export default function App() {
//highlight-next-line
  const matrix = new Matrix4();
  matrix.set( 11, 12, 13, 14, 
	   21, 22, 23, 24,
	   31, 32, 33, 34, 
	   41, 42, 43, 44 );

  return <app />;
}
```
