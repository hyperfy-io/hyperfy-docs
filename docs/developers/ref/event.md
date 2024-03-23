# `Event`

Provided to event callbacks such as `onHoverEnter`, `onHoverLeave`, `onPointerDown` and `onPointerUp` with information about the event.

```jsx
import React from "react";

export default function App() {
  return (
    <app>
      <box 
      //highlight-start
        onPointerDown={(e) => {
          console.log(e.type)
          console.log(e.hit.normal)
        }} 
      //highlight-end
      />
    </app>
  );
}
```

## Props

| Prop      | Type                        | Description                                                  |
| --------- | --------------------------- | ------------------------------------------------------------ |
| type      | String                      | `hover-enter`, `hover-leave`, `pointer-down` or `pointer-up` |
| avatarUid | String                      | UID of the avatar that produced the event                    |
| avatar    | [Avatar](../ref/avatar-ref) | The avatar that produced the event                           |
| hand      | String                      | The hand that produced the event. `null` when not in VR      |
| origin    | Vector3                     | The origin of the raycast in world space                     |
| direction | Vector3                     | The direction of the raycast in world space                  |
| hit       | [Hit](#hit)                 | The entity that was hit (if any)                             |

## Hit

| Prop       | Type    | Description                                                |
| ---------- | ------- | ---------------------------------------------------------- |
| entityUid  | String  | The UID of the entity                                      |
| point      | Vector3 | The position of the hit in world space                     |
| normal     | Vector3 | The The normal of the hit, in world space                  |
| distance   | Number  | The distance from origin to the hit point                  |
| meshName   | String  | The name of the mesh, if any                               |
| nodeId     | String  | The ID prop of the node/element                            |
| instanceId | Number  | The index of an individual `<boxes/>` or `<spheres/>` item |
| isAvatar   | Boolean | Whether the entity hit is an avatar                        |

## Notes

None
