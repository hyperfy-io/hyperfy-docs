# `Avatar`

A reference to an avatar in the world. This object is provided in events and returned from methods like `getAvatar(id)` etc.

```jsx
import { useWorld } from "hyperfy";

function Box() {
  const world = useWorld();

  useEffect(() => {
    world.getAvatars().forEach((avatar) => {
      avatar.teleport([0, 100, 0]);
    });
  }, []);

  return <box />;
}
```

### .uid

The UID of the avatar

### .name

The name of the avatar

### .address

The wallet address of the avatar (if connected)

### .teleport(placeLabel)

Teleports the avatar to a [Place](./place) with that label. If multiple places with the same label exist it will pick one at random.

### .getPosition(vec3)

Gets the world position of the avatar and applies it to the provided [Vector3](./vector3)

### .getBonePosition(boneName, vec3)

Gets the world position of a specific bone and applies it to the provided [Vector3](./vector3)

### .getBoneRotation(boneName, eul)

Gets the world rotation of a specific bone and applies it to the provided [Euler](./euler)

### .getRay(hand)

Returns a ray for either a specific hand (`leftHand` or `rightHand`) otherwise uses eyes as the origin.

```jsx
Ray {
  origin: Vector3
  direction: Vector3
}
```
