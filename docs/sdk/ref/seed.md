# seed()

Hyperfy provides a [Pseudorandom Number Generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) that can be used to generate distributed, deterministic, "random" values at runtime based on a seed.

The following example generates random positions for trees to be placed. Each client will run this code and they will all end up with trees in the same positions, without needing to network all of the data.

```js
import React from "react";
import { seed } from "hyperfy";

const rand = seed(1337);

const trees = [];
for (let i = 0; i < 20; i++) {
  trees.push([rand(-30, 30), rand(-200, 0) / 200, rand(-30, 30)]);
}

function Trees() {
  return trees.map((position, idx) => (
    <rigidbody key={idx} position={position}>
      <model src="tree.glb" />
    </rigidbody>
  ));
}
```

Without PRNG's the server would need to generate the tree positions and then sync all of that data to every client that joins. If you were using larger data sets this number can quickly become impossible to network efficiently.
