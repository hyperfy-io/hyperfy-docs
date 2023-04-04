# `<camera>`

An camera that users can switch between upon various triggers.

## Props

| Prop     | Type   | Description            | Default   |
| -------- | ------ | ---------------------- | --------- |
| id       | String | ID of the camera.      |           |
| position | Array  | Position of the image. | `[0,0,0]` |
| rotation | Array  | Rotation of the image. | `[0,0,0]` |
| number   | Number | Number of the camera.  | `0`       |

## References

| Field                     | Description                             |
| ------------------------- | --------------------------------------- |
| `activate()`              | Activates the camera.                   |
| `deactivate()`            | Deactivates the camera.                 |
| `isActive`                | Whether the camera is active.           |
| `getPosition(vec3)`       | Gets the position of the camera.        |
| `setPosition(vec3)`       | Sets the position of the camera.        |
| `setPositionX(x)`         | Sets the x position of the camera.      |
| `setPositionY(y)`         | Sets the y position of the camera.      |
| `setPositionZ(z)`         | Sets the z position of the camera.      |
| `getRotation(eul)`        | Gets the rotation of the camera.        |
| `setRotationX(x)`         | Sets the x rotation of the camera.      |
| `setRotationY(y)`         | Sets the y rotation of the camera.      |
| `setRotationZ(z)`         | Sets the z rotation of the camera.      |
| `getWorldPosition(vec3)`  | Gets the world position of the camera.  |
| `getWorldRotation(eul)`   | Gets the world rotation of the camera.  |
| `getWorldDirection(vec3)` | Gets the world direction of the camera. |

## Notes

- `shift + number` will trigger the camera.
