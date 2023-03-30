---
sidebar_position: 30
---

# Flying

When users double jump they can activate flying mode if it's enabled. When flying, gravity has no effect and you can move around faster than on foot.

By default flying is disabled. It can be toggled on and off (globally or per user) using the `flying` element:

```jsx
export default function() {
  return (
    <environment>
      <flying/>
    </environment>
  )
}
```

If someone is in the middle of flying and flying becomes disabled, they will immediately fall to the ground. This could be used for a game or other mechanic in your space.