---
sidebar_position: 20
---

# `<global>`

Any objects placed in here are rendered in world-space coordinates instead of app-space corrdinates.

This is useful if you want something to be in a fixed space in the world and not move when the app is moved. For example when attaching a weapon or item to an avatar.

```jsx
function App() {
  return (
    <app>
      <global>
        <box /> // this box is in world space
      </global>
    </app>
  )
}
```

## Notes

None.
