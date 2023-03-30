---
sidebar_position: 20
---

# `<hdr>`

Sets the global HDRI for a world.

## Props

| Prop | Type   | Description                                        | Default |
| ---- | ------ | -------------------------------------------------- | ------- |
| src  | String | Path to an HDRI to be used as the environment map. |

## Notes

- For performance and bandwidth reasons we recommend using a lower resolution `hdr` and then a higher resolution `<skysphere>`. The default world uses a `512x256` HDRI that was resized in photoshop, and a `2048x1024` sky sphere.
