# `Avatar`

A reference to an avatar in the world. This object is provided in events and returned from methods like `getAvatar(id)` etc.

```jsx
import React, { useEffect } from "react";
import { useWorld } from "hyperfy";

export default function App() {
  const world = useWorld();

  useEffect(() => {
      //highlight-start
    return world.on("join", (avatar) => {
      console.log(avatar.name);
    });
      //highlight-end
  }, []);

  return <app />;
}
```

## Props

| Prop    | Type    | Description                                     |
| --------| ------- | ----------------------------------------------- |
| uid     |         | The UID of the avatar                           |
| name    |         | The name of the avatar                          |
| address |         | The wallet address of the avatar (if connected) |

## Ref

| Field                           | Description                                                                                                                                      | 
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| teleport(placeLabel)            | Teleports the avatar to a [Place](../components/place) with that label. If multiple places with the same label exist it will pick one at random. |
| getPosition(vec3)               | Gets the world position of the avatar and applies it to the provided [Vector3](../utils/vector3)                                                 |
| getBonePosition(boneName, vec3) | Gets the world position of a specific bone and applies it to the provided [Vector3](../utils/vector3)                                            |
| getBoneRotation(boneName, eul)  | Gets the world rotation of a specific bone and applies it to the provided [Euler](../utils/euler)                                                |
| getRay(hand)                    | Returns a [ray](#ray) for either a specific hand (`leftHand` or `rightHand`) otherwise uses eyes as the origin.                                          |

## ray

| Prop      | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| origin    | Vector3 | The origin position of the ray                          |
| direction | Vector3 | a vector pointing in the direction the ray will be cast |
