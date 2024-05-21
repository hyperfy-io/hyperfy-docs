# `randomInt()`

Apps all run in a secure environment so don't have access to `Math.random()`.

This is a utility to give you similar functionality.

```jsx
import { randomInt } from "hyperfy";

const num = randomInt(0, 100);
```
