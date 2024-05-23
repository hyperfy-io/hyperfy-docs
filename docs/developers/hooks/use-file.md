# `useFile()`

Converts a file uploaded with [useFields](use-fields) into a URL, which can be used as a source.

Accepted file types:

- image: `.png`, `.jpg`, `jpeg`, `.gif`, `.svg`
- model: `.glb`, `.vrm`
- video: `.mp4`,
- audio: `.mp3`

## Example

```jsx
import React from 'react'
//highlight-next-line
import { useFields, useFile } from "hyperfy";

export default function App() {
  const { image } = useFields();
//highlight-next-line
  const fileUrl = useFile(image);

  return (
    <app>
//highlight-next-line
      <image src={fileUrl  ?? "https://hyperfy.io/logo-full.svg"} />
    </app>
  )
}

const initialState = {
  // ...
};

export const getStore = (state = initialState) => {
  return {
    state,
    actions: {},
    fields: [
      {
        type: "file",
        key: "image",
        label: "Image",
        accept: ".png",
        // accept: ".png, .jpg, jpeg, .gif, .svg, .glb, .vrm, .mp4, .mp3",
      },
    ],
  };
};
```
