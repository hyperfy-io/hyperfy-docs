# `<model>`

Renders a GLTF model into the world.

When authoring models in blender you can tag meshes to give them different properties such as physics colliders.

## Mesh Tags

Meshes in a GLTF that contain any of the following tags in their name will apply special behaviours.

| Tag           | Behaviour                                                                                                                                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_collider`   | Mesh is both rendered and used as a convex collider                                                                                                                                                                                                                                     |
| `_xcollider`  | Mesh is only used as a convex collider                                                                                                                                                                                                                                                  |
| `_tcollider`  | Mesh is both rendered and used as a trimesh collider                                                                                                                                                                                                                                    |
| `_xtcollider` | Mesh is only used as a trimesh collider                                                                                                                                                                                                                                                 |
| `_climb`      | Mesh can be climbed. Must also be a collider.                                                                                                                                                                                                                                           |
| `_noclimb`    | Mesh canot be climbed. Must also be a collider.                                                                                                                                                                                                                                         |
| `_action`     | Declares an actionable mesh to be used with the `onPointerDown` prop. If the model contains no `_action` tags, the whole model is actionable. If the model contains some `_action` tags then only those meshes will be clickable. The `Event` will contain the tag of the clicked mesh. |

## Props

| Prop              | Type          | Description                                                                                                                         | Default   |
| ----------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------- |
| src               | String        | Path to the `.glb` file in your assets folder. Required.                                                                            |
| position          | Array         | Position of the model.                                                                                                              | `[0,0,0]` |
| rotation          | Array         | Rotation of the model.                                                                                                              | `[0,0,0]` |
| scale             | Number\|Array | Scale of the model. Use an array to declare non-scalar scale.                                                                       | `1`       |
| hidden            | Boolean       | Whether to hide this model. Use this for invisible physics.                                                                         | `false`   |
| collision         | String        | How collision should be handled. `trimesh` and `convex` will force all meshes to become colliders. `auto` will honor embedded tags. | `auto`    |
| onHoverEnter      | Function      | Called when an avatar hovers over the model. Provides an `Event`                                                                    |           |
| onHoverLeave      | Function      | Called when an avatar hovers out of the model. Provides an `Event`                                                                  |           |
| onPointerDown     | Function      | Called when avatar presses the pointer down over this object.                                                                       |           |
| onPointerDownHint | String        | Text displayed when hovering over this object when onPointerDown is defined.                                                        |           |
| onPointerUp       | Function      | Called when avatar releases the pointer over this object.                                                                           |           |
| onPointerUpHint   | String        | Text displayed when hovering over this object with the pointer down and onPointerUp is defined.                                     |           |
| hitDistance       | Number        | Maximum distance to interact with this node.                                                                                        | `3`       |

## Ref

| Field               | Description     |
| ------------------- | --------------- |
| `setPosition(vec3)` | Update position |
| `setRotation(eul)`  | Update rotation |

## Notes

- If a mesh tagged as a convex collider is not convex, it will still behave convex using a shrinkwrap-like mechanism.
