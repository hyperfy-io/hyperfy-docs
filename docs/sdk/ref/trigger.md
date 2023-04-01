# `<trigger>`

Adds a trigger area to the space that will trigger `onEnter` and `onLeave` callbacks when an avatar enters or leaves the area.

## Props

| Prop     | Type          | Description                                                                   | Default   |
| -------- | ------------- | ----------------------------------------------------------------------------- | --------- |
| size     | Number\|Array | Size of the box. Use an array to control width, height, and depth separately. | `1`       |
| position | Array         | Position of the trigger area.                                                 | `[0,0,0]` |
| rotation | Array         | Rotation of the trigger area.                                                 | `[0,0,0]` |
| onEnter  | Function      | Called when an avatar enters the area. Provides a `TriggerEvent`.             |
| onLeave  | Function      | Called when an avatar leaves the area. Provides a `TriggerEvent`.             |

## Notes

- Trigger areas are great for automatically making something happen without an avatar having to click something. You can use triggers to create teleporters, open doors or start transitions etc.
