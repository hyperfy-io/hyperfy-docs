---
sidebar_label: 2.0 Migration Guide
---

# 2.0 Migration Guide

If you deployed code using the SDK before v2.0 you will need to make some small changes to your code before you can upload again.

Previously you could only deploy a single package of code to your world. With 2.0 all code you upload becomes an "App" and you can have as many apps in your world as you want, including re-using them across different worlds you own.

Additionally apps can interact with each other allowing you to compose different gameplay or interactive experiences with a little extra effort.

Keep in mind that you are also totally free to continue using a single App to house your entire world. This is the beauty of our new system.

## Changes required

To convert your project from v1.x to v2.0 follow the steps below:

### 1. Update package.json

Edit your package.json to use the latest version number of [hyperfy-tools](https://www.npmjs.com/package/hyperfy-tools) (2.0.3 at time of writing)

Then run `npm install` to get it updated.

### 2. Rename components folder

Your `components` folder should be renamed to `apps`. All of your apps will now live in here.

### 3. Rename component.json

Components now go by the name of "App" so rename each of your `component.json` files to `app.json`

### 4. Update app.json

Your `app.json` file only needs the following fields and you can give your app any ID you want. The ID must not be taken already or you must be the owner of it to upload new versions to it.

```json
{
  "id": "[ANYTHING_YOU_WANT]",
  "name": "Treasure Chest",
  "description": "A treasure chest you can click to open and close",
  "image": "image.png" // in assets folder
}
```

### 5. Remove hyperfy.json

This file was causing people headaches so we just removed it entirely ;)

### 6. Change <environment\> to <app\>

Every app should be wrapped in an `<app>` element. The `<environment>` element is deprecated and will be removed in the future.

### 7. Replace useEngine() with useWorld()

This is a stylistic change and we thought now would be a good time to change it.

```jsx
import { useWorld } from "hyperfy";

function MyThing() {
  const world = useWorld();
}
```

### 8. Update package.json again

Back in your package.json the `deploy` command has been replaced by `upload`. Simply rename both instances from deploy -> upload

```json
{
  // ...etc
  "scripts": {
    // ...etc
    "upload": "hyperfy-tools upload"
  }
}
```

### Other notable changes

- All worlds now have a permanent invisible floor at zero. This means you can now delete the Grid your world has if you want, and you won't ended up falling forever.
- We have removed the ability to scale editor apps non-uniformly. Any apps that were previously scaled non-uniform have been locked to that scale internally.
- The red collider object has been removed. These were useful when we didn't have full trimesh collision, but now that we have them its time to move on.

### Check everything works

With the changes above, you should now be able to run `npm run dev` again open `http://localhost:4000` in your browser.

If successful you should see a blank world. Hit `Tab` to open the editor, and then click `Add` to add any of your apps to the world. Any changes made to your code will reload the browser with your updates.

When you're ready to upload to Hyperfy, run `npm run upload <id>`. Once uploaded you can find them on Hyperfy in the `Editor -> Add -> Uploads` tab
