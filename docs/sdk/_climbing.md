---
sidebar_position: 30
---

# Climbing

In VR, users can climb objects by grabbing onto them and pulling themselves up. Users can also grab onto objects and fling themselves off in any direction. In the future we hope to also figure out a nice way to give mobile and desktop users the ability to climb as well.

By default climbing is disabled. It can be toggled on and off (globally or per user) using the `climbing` element:

```jsx
export default function() {
  return (
    <environment>
      <climbing/>
    </environment>
  )
}
```

If someone is mid-climb and climbing becomes disabled they will immediately fall. This could be used for a game or other mechanic in your space.

In some cases you may want to control what objects are climbable on a case-by-case basis. This can be achieved in two ways:

1. With climbing enabled globally and then disabled on a per-object basis.
2. With climbing disabled globally and then enabled on a per-object basis.

Colliders are the only objects in a space that can be climbed, and they can be configured as follows:

## Shapes

All shape elements such as `<box>` and `<boxes>` that are a child of a `<rigidbody>` can toggle climbing using the `climbing={true|false}` prop:

```jsx
function Box() {
  return (
    <rigidbody>
      <box climbable={false}/>
    </rigidbody>
  )
}
```

## Models

All meshes tagged as a collider (eg `_collider`) can declare whether they are climbable or not climbable using the `_climb` and `_noclimb` tags respectively.