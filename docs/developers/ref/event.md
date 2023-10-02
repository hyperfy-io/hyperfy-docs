# `Event`

Provided to event callbacks such as `onHoverEnter`, `onHoverLeave`, `onPointerDown` and `onPointerUp` with information about the event.

```jsx
function Box() {
  return (
    <box onPointerDown={e => console.log(e.avatar)}>
  )
}
```

## Props

| Prop           | Type    | Description                                                  |
| -------------- | ------- | ------------------------------------------------------------ |
| type           | String  | `hover-enter`, `hover-leave`, `pointer-down` or `pointer-up` |
| avatarUid      | String  | UID of the avatar that produced the event                    |
| avatar         | Avatar  | The avatar that produced the event                           |
| hand           | String  | The hand that produced the event. `null` when not in VR      |
| origin         | Vector3 | The origin of the raycast in world space                     |
| direction      | Vector3 | The direction of the raycast in world space                  |
| hit            | Object  | The entity that was hit (if any)                             |
| hit.entityUid  | String  | The UID of the entity                                        |
| hit.point      | Vector3 | The position of the hit in world space                       |
| hit.normal     | Vector3 | The The normal of the hit, in world space                    |
| hit.distance   | Number  | The distance from origin to the hit point                    |
| hit.meshName   | String  | The name of the mesh, if any                                 |
| hit.nodeId     | String  | The ID prop of the node/element                              |
| hit.instanceId | Number  | The index of an individual `<boxes/>` or `<spheres/>` item   |
| hit.isAvatar   | Boolean | Whether the entity hit is an avatar                          |

## Notes

None
