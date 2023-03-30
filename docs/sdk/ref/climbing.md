---
sidebar_position: 20
---

# `<climbing>`

By default worlds have climbing disabled. Adding this element allows you to toggle climbing on or off dynamically.

## Props

| Prop    | Type    | Description                 | Default |
| ------- | ------- | --------------------------- | ------- |
| enabled | Boolean | Whether climbing is enabled | `true`  |

## Notes

- You can control climbing per-shape with the `climbable={true|false}` prop. You can also control climbing inside of a GLTF model by adding `_noclimb` or `_climb` tags to collider meshes. The kind of world you build should determine which way to around is easiest to work with.
