# `<video>`

Displays a video in the world.

## Props

| Prop              | Type     | Description                                                                                         | Default     |
| ----------------- | -------- | --------------------------------------------------------------------------------------------------- | ----------- |
| src               | String   | URL or path to a video file in your assets folder. MP4.                                             |
| width             | Number   | Width of the video. See notes for more info. Optional.                                              |
| height            | Number   | Height of the video. See notes for more info. Optional.                                             |
| color             | String   | Color of the video canvas while it is loading                                                       | `white`     |
| lit               | Boolean  | Whether the video should be affected by environment lighting.                                       | `false`     |
| opacity           | Number   | Opacity of the video                                                                                | `1`         |
| doublesided       | Boolean  | Whether video is doublesided.                                                                       | `false`     |
| loop              | Boolean  | Whether this video should loop when it gets to the end.                                             | `false`     |
| autoplay          | Boolean  | Whether this video should automatically start playing.                                              | `false`     |
| volume            | Number   | Volume for video audio                                                                              | `1`         |
| audioSpatial      | Boolean  | Whether audio should be spatial.                                                                    | `true`      |
| audioDistance     | Number   | The distance that spatial audio begins to rolloff.                                                  | `10`        |
| audioRolloff      | Number   | The audio rolloff factor after audioDistance.                                                       | `3`         |
| audioCone         | Array    | Used When `spatial` is enabled. innerAngle, outerAngle, outerGain.                                  | `[360,0,0]` |
| audioSourceId     | String   | When set, audio analysers in the world (cross app) can analyse this audio if they know the sourceId |             |
| frameWidth        | Number   | The width of the frame around the video.                                                            | `0`         |
| frameDepth        | Number   | The depth of the frame.                                                                             | `0`         |
| frameColor        | Number   | The color of the frame.                                                                             | `black`     |
| position          | Array    | Position of the video                                                                               | `[0,0,0]`   |
| rotation          | Array    | Rotation of the video                                                                               | `[0,0,0]`   |
| onHoverEnter      | Function | Called when an avatar hovers over the video. Provides an `Event`                                    |             |
| onHoverLeave      | Function | Called when an avatar hovers out of the video. Provides an `Event`                                  |             |
| onPointerDown     | Function | Called when avatar presses the pointer down over this object.                                       |             |
| onPointerDownHint | String   | Text displayed when hovering over this object when onPointerDown is defined.                        |             |
| onPointerUp       | Function | Called when avatar releases the pointer over this object.                                           |             |
| onPointerUpHint   | String   | Text displayed when hovering over this object with the pointer down and onPointerUp is defined.     |             |
| hitDistance       | Number   | Maximum distance to interact with this node.                                                        | `3`         |

## Notes

- If only width is set, height is automatically calculated to maintain aspect ratio
- If only height is set, width is automatically calculated to maintain aspect ratio
- If both width and height are set, the video will cover these dimensions, similar to the `background-size: cover` functionality in CSS.
- If neither height or width is set, the video will be displayed with a height of 1 and width will be automatically calculated to maintain aspect ratio
