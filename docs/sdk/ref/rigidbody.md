---
sidebar_position: 20
---

# `<rigidbody>`

Creates a physics rigid body. The rigid body has no shape but when `<box>` or `<model>` are added as children they will be attached as colliders.

## Props

| Prop     | Type   | Description                                  | Default   |
| -------- | ------ | -------------------------------------------- | --------- |
| type     | String | Type of rigidbody. `static`, or `kinematic`. | `static`  |
| position | Array  | Position of the rigidbody.                   | `[0,0,0]` |
| rotation | Array  | Rotation of the rigidbody.                   | `[0,0,0]` |

## Notes

- If you plan to move a rigidbody or animate it, be sure to use `kinematic` for performance reasons.
- We don't currently support dynamic rigidbodies but hope to in the future
