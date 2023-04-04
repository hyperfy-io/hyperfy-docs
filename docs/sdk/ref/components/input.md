# `<input>`

Enables user text input.

## Props

| Prop          | Type     | Description                                                         | Default    |
| ------------- | -------- | ------------------------------------------------------------------- | ---------- |
| width         | Number   | Width of the image. See notes for more info. Optional.              |
| color         | String   | Color of the canvas while image is loading.                         | `white`    |
| position      | Array    | Position of the image.                                              | `[0,0,0]`  |
| rotation      | Array    | Rotation of the image.                                              | `[0,0,0]`  |
| onPointerDown | Function | Called when avatar presses the pointer down over this object.       |
| hitDistance   | Number   | Maximum distance to interact with this node.                        | `infinity` |
| bgColor       | String   | Background color of the input.                                      | `0xffffff` |
| bgRadius      | Number   | Border radius of the input.                                         | `0.05`     |
| padding       | Number   | Padding of the input.                                               | `0.1`      |
| fontSize      | Number   | Font size of the input.                                             | `0.2`      |
| placeholder   | String   | Placeholder text to display when the input is empty.                |
| value         | String   | Value of the input.                                                 |
| onChange      | Function | Called when the input value changes. Provides the new value.        |
| onEnter       | Function | Called when the user presses the enter key. Provides the new value. |

## Notes

- There is currently no keyboard support for on VR devices.

## Example

```jsx
export default function App() {
  const [value, setValue] = useState(null);

  return (
    <app>
      <input
        placeholder="Enter code"
        bgColor="black"
        color="white"
        width={1.5}
        value={value}
        onChange={setValue}
        onEnter={() => console.log("this is the value", value)}
      />
    </app>
  );
}
```
