# `<webview>`

Loads a web page into a 3D object via an iframe.

## Props

| Prop          | Type     | Description                                    | Default   |
| ------------- | -------- | ---------------------------------------------- | --------- |
| name          | String   | Name of the webview.                           |           |
| position      | Array    | Position of the webview.                       | `[0,0,0]` |
| rotation      | Array    | Rotation of the webview.                       | `[0,0,0]` |
| width         | Number   | Width of the webview.                          | `1`       |
| height        | Number   | Height of the webview.                         | `1`       |
| src           | String   | URL of the web page to load.                   |           |
| factor        | Number   | Factor to scale the webview by.                | `100`     |
| onPointerDown | Function | Callback function when the webview is clicked. |           |

## Ref

| Field                     | Description                              |
| ------------------------- | ---------------------------------------- |
| `activate()`              | Activates the webview.                   |
| `deactivate()`            | Deactivates the webview.                 |
| `isActive`                | Whether the webview is active.           |
| `getPosition(vec3)`       | Gets the position of the webview.        |
| `setPosition(vec3)`       | Sets the position of the webview.        |
| `setPositionX(x)`         | Sets the x position of the webview.      |
| `setPositionY(y)`         | Sets the y position of the webview.      |
| `setPositionZ(z)`         | Sets the z position of the webview.      |
| `getRotation(eul)`        | Gets the rotation of the webview.        |
| `setRotationX(x)`         | Sets the x rotation of the webview.      |
| `setRotationY(y)`         | Sets the y rotation of the webview.      |
| `setRotationZ(z)`         | Sets the z rotation of the webview.      |
| `getWorldPosition(vec3)`  | Gets the world position of the webview.  |
| `getWorldRotation(eul)`   | Gets the world rotation of the webview.  |
| `getWorldDirection(vec3)` | Gets the world direction of the webview. |

## Notes

- Currently unavailable in VR mode.
- Many websites block iframe. If you fail to load a page, this is likely the cause.
