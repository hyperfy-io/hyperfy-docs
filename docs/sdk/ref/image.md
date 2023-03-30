---
sidebar_position: 20
---

# `<image>`

Renders an image asset into the world.

## Props

| Prop              | Type     | Description                                                                                     | Default   |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------- | --------- |
| src               | String   | Path to the image file in your assets folder.                                                   |
| width             | Number   | Width of the image. See notes for more info. Optional.                                          |
| height            | Number   | Height of the image. See notes for more info. Optional.                                         |
| color             | String   | Color of the canvas while image is loading.                                                     | `white`   |
| frameWidth        | Number   | The width of the frame around the image.                                                        | `0`       |
| frameDepth        | Number   | The depth of the frame.                                                                         | `0`       |
| frameColor        | Number   | The color of the frame.                                                                         | `black`   |
| opacity           | Number   | Opacity of the image.                                                                           | `1`       |
| position          | Array    | Position of the image.                                                                          | `[0,0,0]` |
| rotation          | Array    | Rotation of the image.                                                                          | `[0,0,0]` |
| onHoverEnter      | Function | Called when an avatar hovers over the image. Provides an `Event`                                |           |
| onHoverLeave      | Function | Called when an avatar hovers out of the image. Provides an `Event`                              |           |
| onPointerDown     | Function | Called when avatar presses the pointer down over this object.                                   |           |
| onPointerDownHint | String   | Text displayed when hovering over this object when onPointerDown is defined.                    |           |
| onPointerUp       | Function | Called when avatar releases the pointer over this object.                                       |           |
| onPointerUpHint   | String   | Text displayed when hovering over this object with the pointer down and onPointerUp is defined. |           |
| hitDistance       | Number   | Maximum distance to interact with this node.                                                    | `3`       |

## Notes

- If only width is set, height is automatically calculated to maintain aspect ratio
- If only height is set, width is automatically calculated to maintain aspect ratio
- If both width and height are set, the image will cover these dimensions, similar to the `background-size: cover` functionality in CSS.
- If neither height or width is set, the image will be displayed with a height of 1 and width will be automatically calculated to maintain aspect ratio
