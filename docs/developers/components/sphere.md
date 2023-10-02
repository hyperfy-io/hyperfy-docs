# `<sphere>`

Renders a sphere. When placed inside of a `<rigidbody>` it gains physical properties.

## Props

| Prop              | Type          | Description                                                                                     | Default    |
| ----------------- | ------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| radius            | Number        | Radius of the sphere.                                                                           | `0.5`      |
| widthSegments     | Number        | Number of width segments.                                                                       | `32`       |
| heightSegments    | Number        | Number of height segments.                                                                      | `16`       |
| color             | String        | Color of the sphere.                                                                            | `0xededed` |
| opacity           | Number        | Opacity of the sphere.                                                                          | `1`        |
| position          | Array         | Position of the sphere.                                                                         | `[0,0,0]`  |
| rotation          | Array         | Rotation of the sphere.                                                                         | `[0,0,0]`  |
| scale             | Number\|Array | Scale of the sphere. A single value will be scaled scalar.                                      | `1`        |
| onHoverEnter      | Function      | Called when an avatar hovers over the sphere. Provides an `Event`                               |            |
| onHoverLeave      | Function      | Called when an avatar hovers out of the sphere. Provides an `Event`                             |            |
| onPointerDown     | Function      | Called when avatar presses the pointer down over this object.                                   |            |
| onPointerDownHint | String        | Text displayed when hovering over this object when onPointerDown is defined.                    |            |
| onPointerUp       | Function      | Called when avatar releases the pointer over this object.                                       |            |
| onPointerUpHint   | String        | Text displayed when hovering over this object with the pointer down and onPointerUp is defined. |            |
| hitDistance       | Number        | Maximum distance to interact with this node.                                                    | `3`        |
| hidden            | Boolean       | Whether to hide this box. Use this for invisible physics.                                       | `false`    |
| climbable         | Boolean       | Whether avatars can climb the sphere when placed inside a `<rigidbody>`                         |            |

## Ref

| Field               | Description     |
| ------------------- | --------------- |
| `setPosition(vec3)` | Update position |
| `setRotation(eul)`  | Update rotation |

## Notes

None.
