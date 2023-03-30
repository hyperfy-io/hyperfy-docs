---
sidebar_position: 25
---

# `DEG2RAD`

A utility for converting degrees to radians.

```jsx
import { DEG2RAD, RAD2DEG } from 'hyperfy'

const rotation = new Euler(0, 90 * DEG2RAD, 0, 'YXZ')
const yDegrees = rotation.y * RAD2DEG // 90
```
