---
sidebar_position: 30
---

# Gliding

In VR, users can spread their arms while falling to activate gliding. The user will glide and roll with the angle of their hands.

By default gliding is disabled. It can be toggled on and off (globally or per user) using the `gliding` element:

```jsx
export default function() {
  return (
    <environment>
      <gliding/>
    </environment>
  )
}
```

If someone is in the middle of gliding and gliding becomes disabled, they will immediately fall to the ground. This could be used for a game or other mechanic in your space.