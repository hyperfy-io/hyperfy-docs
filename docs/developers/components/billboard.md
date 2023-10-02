# `<billboard>`

All rendered children of this element will face the camera.

## Props

| Prop              | Type     | Description                                                                                     | Default   |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------- | --------- |
| position          | Array    | Position of the billboard.                                                                      | `[0,0,0]` |
| rotation          | Array    | Rotation of the billboard.                                                                      | `[0,0,0]` |
| axis              | String   | The axis to lock rotation to: `x`, `y` or `z`                                                   | `null`    |
| onHoverEnter      | Function | Called when an avatar hovers over the billboard. Provides an `Event`                            |           |
| onHoverLeave      | Function | Called when an avatar hovers out of the billboard. Provides an `Event`                          |           |
| onPointerDown     | Function | Called when avatar presses the pointer down over this object.                                   |           |
| onPointerDownHint | String   | Text displayed when hovering over this object when onPointerDown is defined.                    |           |
| onPointerUp       | Function | Called when avatar releases the pointer over this object.                                       |           |
| onPointerUpHint   | String   | Text displayed when hovering over this object with the pointer down and onPointerUp is defined. |           |
| hitDistance       | Number   | Maximum distance to interact with this node.                                                    | `3`       |

## Ref

| Field               | Description          |
| ------------------- | -------------------- |
| `getPosition(vec3)` | Get position         |
| `setPosition(vec3)` | Update position      |
| `getPosition(eul)`  | Get rotation         |
| `setRotation(eul)`  | Update rotation      |
| `getAxis()`         | Get the current axis |
| `setAxis(value)`    | Set the axis         |
