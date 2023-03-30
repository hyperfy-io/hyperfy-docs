---
sidebar_position: 33
sidebar_label: 🛠 Editor
---

# Editor

If you own a world you have the ability to edit the objects, metadata, privacy and collaborators using the editor.

## Toggling the editor

While inside your world, hit `Tab` to toggle the editor panel and enter edit mode.

---

## World Tab

The world tab shows you all the apps in your world. Each distinct object in your world is called an "app".

- All changes made are temporary until you hit the "Save" button.
- Use `Ctrl+Z` to Undo and `Ctrl+Shift+Z` to Redo object changes.
- Use `Ctrl+C` and `Ctrl+V` to copy and paste objects.

Clicking the "Add" button will allow you to add different kinds of objects to your world:

### Store

The store provides you with a collection of apps to help you build your world. These include basic building blocks including models and images, all the way up to more complex interactive objects

### NFTs

Adding an NFT will list the NFTs in your wallet for you to place in the world.

We currently support the following kinds of NFTs but will continue to add support:

- Images (JPG,JPEG,PNG,GIF)
- 3D Models (GLB)
- Videos (MP4)

If you have NFTs that don't show up or work as expected please let us know in the Discord as we want to support them all!

### Custom Media

You can also add custom media to the world without needing to mint anything first:

- Images (JPG,JPEG,PNG,GIF)
- 3D Models (GLB)
- Videos (MP4)
- Text

You might also find it faster to simply drag and drop files directly onto the browser window!

### Global effects

You can toggle what effects are available to everyone in the world:

- **Flying:** Allows anyone to toggle flying by double tapping jump.
- **Gliding:** Allows people in VR to glide when falling by spreading their arms out.
- **Climbing:** Allows people in VR to climb colliders in the world.

If you're building an obstacle course or game you might want to turn these off so that people can't cheat.

Those building with the SDK might want to turn these toggles all off, and instead control effects per-user using code. For example people that pick up a jetpack could be granted flying :)

---

## Metadata Tab

The Metadata tab on the editor panel lets you change the metadata of the world.

**NOTE:** Don't forget to save your changes when you're finished.

### Metadata

The photo, title and description are shown in url previews when you share a link to your world.

This will also update the metadata shown on your NFT in marketplaces such as OpenSea, which is ideal if you plan to sell your creation on the open market.

### Token Gate

When enabled you can choose an NFT that guests must own before they can enter your world (Coming soon)

---

## Collaborators Tab

You can give any wallet address the ability to edit your world with you in realtime.

Simply add their address and choose their role:

| Role    | Edit Objects | Save Objects | Change Settings |
| ------- | ------------ | ------------ | --------------- |
| Support | ✅           |              |
| Builder | ✅           | ✅           |
| Admin   | ✅           | ✅           | ✅              |
