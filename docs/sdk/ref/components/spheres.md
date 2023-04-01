# `<spheres>`

Renders a group of instanced spheres in a single draw call.

This is almost identical to `<sphere>` but allows you to provide multiple transforms. The number of spheres rendered is anchored to the size of the `positions` array. The `rotations` and `scales` arrays are cyclical, so if they all have the same rotation/scale you can just enter a single value in those props.

When placed inside of a `<rigidbody>` they gain physical properties.

## Props

| Prop              | Type               | Description                                                                                     | Default     |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------------------- | ----------- |
| radius            | Number             | Radius of the sphere.                                                                           | `0.5`       |
| widthSegments     | Number             | Number of width segments.                                                                       | `32`        |
| heightSegments    | Number             | Number of height segments.                                                                      | `16`        |
| color             | String             | Color of the sphere.                                                                            | `0xededed`  |
| opacity           | Number             | Opacity of the sphere.                                                                          | `1`         |
| count             | Number             | The maximum number of instances                                                                 | `1000`      |
| positions         | [...Array]         | Positions of each sphere.                                                                       | `[[0,0,0]]` |
| rotation          | [...Array]         | Rotation of each sphere. Cyclical.                                                              | `[[0,0,0]]` |
| scale             | [...Number\|Array] | Scales of each sphere. Use a single numeric value for scalar. Cyclical.                         | `[1]`       |
| onHoverEnter      | Function           | Called when an avatar hovers over a sphere. Provides an `Event`                                 |             |
| onHoverLeave      | Function           | Called when an avatar hovers out of a sphere. Provides an `Event`                               |             |
| onPointerDown     | Function           | Called when avatar presses the pointer down over this object.                                   |             |
| onPointerDownHint | String             | Text displayed when hovering over this object when onPointerDown is defined.                    |             |
| onPointerUp       | Function           | Called when avatar releases the pointer over this object.                                       |             |
| onPointerUpHint   | String             | Text displayed when hovering over this object with the pointer down and onPointerUp is defined. |             |
| hitDistance       | Number             | Maximum distance to interact with this node.                                                    | `3`         |
| hidden            | Boolean            | Whether to hide the spheres. Use this for invisible physics spheres.                            | `false`     |
| climbable         | Boolean            | Whether avatars can climb the spheres when placed inside a `<rigidbody>`                        |             |

## Ref

| Field                    | Description                 |
| ------------------------ | --------------------------- |
| `setPosition(idx, vec3)` | Update position of a sphere |
| `setRotation(idx, eul)`  | Update rotation of a sphere |
| `setScale(idx, vec3)`    | Update scale of a sphere    |

## Notes

None.
