# `<pointlight>`

A source that produces light in all directions.

## Props

| Prop      | Type   | Description                                 | Default   |
| --------- | ------ | ------------------------------------------- | --------- |
| color     | String | Color of the canvas while image is loading. | `white`   |
| position  | Array  | Position of the image.                      | `[0,0,0]` |
| rotation  | Array  | Rotation of the image.                      | `[0,0,0]` |
| intensity | Number | Intensity of the light.                     | `10`      |
| distance  | Number | Maximum distance of the light.              | `0`       |
| decay     | Number | Decay of the light.                         | `2`       |

## Notes

- Performance will suffer when adding multiple lights to the world or when many avatars join the world.
