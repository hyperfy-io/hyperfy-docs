# `<group>`

Used to reference a set of components.

## Props

| Prop              | Type     | Description                                                                                     | Default |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------- | ------- |
| position          | array    | Position of group relative to app                                                               | [0,0,0] |
| rotation          | array    | Rotation of group relative to app                                                               | [0,0,0] |
| scale             | array    | Scale of group                                                                                  | [1,1,1] |
| hitDistance       | number   | Maximum distance to interact with this node                                                     | 0.5     |
| onHoverEnter      | function | Called when an avatar hovers over the image. Provides an `Event`                                | null    |
| onHoverLeave      | function | Called when an avatar hovers over the image. Provides an `Event`                                | null    |
| onPointerDown     | function | Called when avatar presses the pointer down over this object.                                   | null    |
| onPointerDownHint | function | Text displayed when hovering over this object when onPointerDown is defined.                    | null    |
| onPointerUp       | function | Called when avatar releases the pointer over this object.                                       | null    |
| onPointerUpHint   | function | Text displayed when hovering over this object with the pointer down and onPointerUp is defined. | null    |

## Example

:::tip

Similar to a `<div>` but for 3D elements.

:::

```js
const ShapeGroup = () => {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box position={boxOffset} />
      <Sphere position={sphereOffset} />
    </group>
  );
};
```
