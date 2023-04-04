# `<arealight>`

Casts directional light rays from within a set boundary.

## Props

| Prop      | Type   | Description                                 | Default   |
| --------- | ------ | ------------------------------------------- | --------- |
| color     | String | Color of the canvas while image is loading. | `white`   |
| position  | Array  | Position of the image.                      | `[0,0,0]` |
| rotation  | Array  | Rotation of the image.                      | `[0,0,0]` |
| width     | Number | Width of the light.                         | `2`       |
| depth     | Number | Depth of the light.                         | `2`       |
| intensity | Number | Intensity of the light.                     | `10`      |

## Notes

- Performance will suffer when adding multiple lights to the world or when many avatars join the world.
