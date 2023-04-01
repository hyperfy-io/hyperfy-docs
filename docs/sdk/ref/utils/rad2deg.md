# `RAD2DEG`

A utility for converting radians to degrees.

```jsx
import { DEG2RAD, RAD2DEG } from "hyperfy";

const rotation = new Euler(0, 90 * DEG2RAD, 0, "YXZ");
const yDegrees = rotation.y * RAD2DEG; // 90
```
