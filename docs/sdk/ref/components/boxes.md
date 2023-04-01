# `<boxes>`

Renders a group of instanced boxes in a single draw call.

This is almost identical to `<box>` but allows you to provide multiple transforms. The number of boxes rendered is anchored to the size of the `positions` array. The `rotations` and `scales` arrays are cyclical, so if they all have the same rotation/scale you can just enter a single value in those props.

When placed inside a `<rigidbody>` they gain physical properties.

## Props

| Prop              | Type               | Description                                                                                     | Default     |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------------------- | ----------- |
| size              | Number\|Array      | Size of the box. Use an array to control width, height, depth separately.                       | `1`         |
| color             | String             | Color of the box.                                                                               | `0xededed`  |
| opacity           | Number             | Opacity of the box.                                                                             | `1`         |
| count             | Number             | The maximum number of instances                                                                 | `1000`      |
| positions         | [...Array]         | Positions of each box.                                                                          | `[[0,0,0]]` |
| rotation          | [...Array]         | Rotations of each box. Cyclical.                                                                | `[[0,0,0]]` |
| scale             | [...Number\|Array] | Scales of each box. Use a single numeric value for scalar. Cyclical.                            | `[1]`       |
| onHoverEnter      | Function           | Called when an avatar hovers over a box. Provides an `Event`                                    |
| onHoverLeave      | Function           | Called when an avatar hovers out of a box. Provides an `Event`                                  |
| onPointerDown     | Function           | Called when avatar presses the pointer down over this object.                                   |             |
| onPointerDownHint | String             | Text displayed when hovering over this object when onPointerDown is defined.                    |             |
| onPointerUp       | Function           | Called when avatar releases the pointer over this object.                                       |             |
| onPointerUpHint   | String             | Text displayed when hovering over this object with the pointer down and onPointerUp is defined. |             |
| hitDistance       | Number             | Maximum distance to interact with this node.                                                    | `3`         |
| hidden            | Boolean            | Whether to hide the boxes. Use this for an invisible physics boxes.                             | `false`     |
| climbable         | Boolean            | Whether avatars can climb the boxes when placed inside a `<rigidbody>`                          |

## Ref

| Field                    | Description              |
| ------------------------ | ------------------------ |
| `setPosition(idx, vec3)` | Update position of a box |
| `setRotation(idx, eul)`  | Update rotation of a box |
| `setScale(idx, vec3)`    | Update scale of a box    |

## Notes

None.
