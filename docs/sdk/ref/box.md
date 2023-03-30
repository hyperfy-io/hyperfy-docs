---
sidebar_position: 20
---

# `<box>`

Renders a box. When placed inside a `<rigidbody>` it gains physical properties.

## Props

| Prop              | Type          | Description                                                                                     | Default    |
| ----------------- | ------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| size              | Number\|Array | Size of the box. Use an array to control width, height, depth separately.                       | `1`        |
| color             | String        | Color of the box.                                                                               | `0xededed` |
| opacity           | Number        | Opacity of the box.                                                                             | `1`        |
| position          | Array         | Position of the box.                                                                            | `[0,0,0]`  |
| rotation          | Array         | Rotation of the box.                                                                            | `[0,0,0]`  |
| scale             | Number\|Array | Scale of the box. A single value will be used scalar.                                           | `1`        |
| onHoverEnter      | Function      | Called when an avatar hovers over the box. Provides an `Event`                                  |
| onHoverLeave      | Function      | Called when an avatar hovers out of the box. Provides an `Event`                                |
| onPointerDown     | Function      | Called when avatar presses the pointer down over this object.                                   |            |
| onPointerDownHint | String        | Text displayed when hovering over this object when onPointerDown is defined.                    |            |
| onPointerUp       | Function      | Called when avatar releases the pointer over this object.                                       |            |
| onPointerUpHint   | String        | Text displayed when hovering over this object with the pointer down and onPointerUp is defined. |            |
| hitDistance       | Number        | Maximum distance to interact with this node.                                                    | `3`        |
| hidden            | Boolean       | Whether to hide the box. Useful for invisible walls etc.                                        | `false`    |
| climbable         | Boolean       | Whether avatars can climb the box when placed inside a `<rigidbody>`                            |

## Ref

| Field               | Description     |
| ------------------- | --------------- |
| `getPosition(vec3)` | Get position    |
| `setPosition(vec3)` | Update position |
| `getPosition(eul)`  | Get rotation    |
| `setRotation(eul)`  | Update rotation |

## Notes

None.
