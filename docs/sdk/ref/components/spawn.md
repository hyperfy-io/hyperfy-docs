# `<spawn>`

Defines a point at which avatars should join when they enter a world. If multiple spawn points exist one will be chosen randomly.

## Props

| Prop     | Type  | Description                  | Default   |
| -------- | ----- | ---------------------------- | --------- |
| position | Array | Position of the spawn point. | `[0,0,0]` |
| rotation | Array | Rotation of the spawn point. | `[0,0,0]` |

## Notes

- You can add and remove these dynamically to control where people spawn. For example you might have spawn points in a lobby before a game starts, and then move them to the spectator area when the game starts, so that new people joining can observe.
