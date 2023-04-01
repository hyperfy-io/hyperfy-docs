# `<audio>`

Plays audio in the world, either spatial or ambient.

## Props

| Prop     | Type    | Description                                                                                       | Default     |
| -------- | ------- | ------------------------------------------------------------------------------------------------- | ----------- |
| src      | String  | URL or path to audio file in assets folder. Must be MP3.                                          |
| volume   | Number  | Volume of the audio.                                                                              | `1`         |
| loop     | Boolean | Whether audio should loop when it gets to the end.                                                | `false`     |
| autoplay | Boolean | Whether this audio should automatically start playing.                                            | `false`     |
| spatial  | Boolean | Whether to project this audio spatially.                                                          | `true`      |
| position | Array   | Used when `spatial` is enabled. The position of this spatial audio.                               | `[0,0,0]`   |
| distance | Number  | The distance to which falloff begins.                                                             | `10`        |
| rolloff  | Number  | Used when `spatial` is enabled. The factor to which falloff happens when further than `distance`. | `3`         |
| cone     | Array   | Used When `spatial` is enabled. innerAngle, outerAngle, outerGain.                                | `[360,0,0]` |

## Ref

| Field               | Description                                         |
| ------------------- | --------------------------------------------------- |
| `getPosition(vec3)` | Get position                                        |
| `setPosition(vec3)` | Update position                                     |
| `getPosition(eul)`  | Get rotation                                        |
| `setRotation(eul)`  | Update rotation                                     |
| `ready(fn)`         | Callback for when audio methods below are available |
| `duration()`        | Returns the duration of audio                       |
| `offset(value)`     | Gets or sets the offset of audio                    |
| `isPlaying()`       | Return if audio is playing                          |
| `play()`            | Start audio                                         |
| `pause()`           | Pause audio                                         |
| `stop()`            | Stop audio                                          |
