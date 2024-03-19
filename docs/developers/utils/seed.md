---
sidebar_position: 80
---

# seed()

Hyperfy provides a [Pseudorandom Number Generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) that can be used to generate distributed, deterministic, "random" values at runtime based on a seed.

The following example generates random positions for boxes to be placed. Each client will run this code and they will all end up with boxes in the same positions, without needing to network all of the data.

```js
import React from "react";
//highlight-next-line
import { seed } from "hyperfy";

//highlight-next-line
const rand = seed(1337);

const boxes = [];
for (let i = 0; i < 20; i++) {
//highlight-next-line
  boxes.push([rand(-30, 30), rand(-200, 0) / 200, rand(-30, 30)]);
}

export default function App() {
  return (
    <app>
      {
        boxes.map((position, idx) => (
          <box key={idx} position={position} />
        ))
      }
    </app>
  );
}
```

Without PRNG's the server would need to generate the box positions and then sync all of that data to every client that joins. If you were using larger data sets this number can quickly become impossible to network efficiently.
