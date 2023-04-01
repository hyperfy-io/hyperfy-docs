# `<text>`

Displays text.

## Props

| Prop              | Type          | Description                                                                                                | Default   |
| ----------------- | ------------- | ---------------------------------------------------------------------------------------------------------- | --------- |
| value             | String        | Text to display.                                                                                           |
| color             | String        | Text color.                                                                                                | `black`   |
| font              | String        | URL to woff font, eg from Google Fonts CDN.                                                                | Roboto    |
| fontSize          | Number        | Font size.                                                                                                 | `0.1`     |
| lineHeight        | String        | Text line height.                                                                                          | `1.4`     |
| maxWidth          | Number        | Maximum width of the block before text wraps. Default is none.                                             |
| whiteSpace        | String        | Set to `nowrap` if you don't want text to wrap.                                                            |
| align             | String        | Alignment of text. `left`, `center` or `right`                                                             | `left`    |
| anchorX           | String        | The horizontal anchor origin.                                                                              | `center`  |
| bgColor           | String        | When set, a plane is rendered behind the text.                                                             |
| bgRadius          | Number        | The background plane radius. Similar to CSS `border-radius`.                                               |
| padding           | Number        | The background padding/inset. Can be a single number or array of numbers. works the same as CSS shorthand. |
| position          | Array         | Position of the text.                                                                                      | `[0,0,0]` |
| rotation          | Array         | Rotation of the text.                                                                                      | `[0,0,0]` |
| scale             | Number\|Array | Scale of the text. Use an array for non-scalar scale.                                                      | `1`       |
| onPointerDown     | Function      | Called when avatar presses the pointer down over this object.                                              |           |
| onPointerDownHint | String        | Text displayed when hovering over this object when onPointerDown is defined.                               |           |
| onPointerUp       | Function      | Called when avatar releases the pointer over this object.                                                  |           |
| onPointerUpHint   | String        | Text displayed when hovering over this object with the pointer down and onPointerUp is defined.            |           |
| hitDistance       | Number        | Maximum distance to interact with this node.                                                               | `3`       |

## Notes

None
