---
sidebar_label: 👩‍🦳 Avatars
---

# Avatars

Hyperfy gives you the ultimate freedom to be who you want to be in the metaverse. Gone are the days where platforms dictate what you look like with a limited set of 3D models and wearables that they provide.

We do this by leaning on and pushing for open and interoperable standards such as VRM. As the first live metaverse platform on the web to support instant avatar switching in a multiplayer environment, we're super excited to see this standard become more widespread so that we can all make our avatars once, and then bring them with us wherever we go.

## Getting An Avatar

There are many ways to find an avatar that's perfect for you:

- Browse premade avatars on [VRoid Hub](https://hub.vroid.com/en).
- Create one easily with [VRoid Studio](https://vroid.com/en/studio).
- Own an Avatar NFT from projects such as [Crypto Avatars](https://opensea.io/collection/cryptoavatars), [VOLTZ](https://opensea.io/collection/voltz-avatars), [VOID](https://opensea.io/collection/visitors-of-imma-degen), [Chain Runners](https://opensea.io/collection/chain-runners-xr) and more.
- Design your own using [Blender](https://www.blender.org/) and the [VRM Addon](https://vrm-addon-for-blender.info/en/).
- Find a community designer to create one for you.

Many avatar projects are now announcing future support for VRM, it's an exciting time to be alive!

## Rank System

People are able to join the metaverse from a variety of devices including mobile phones and standalone VR headsets like the Oculus Quest 2. To keep everything accessible and to make sure people have the best experience possible, we use a ranking and avatar visibility system.

| Rank        | Works well on...                    |
| ----------- | ----------------------------------- |
| Perfect     | All devices                         |
| Great       | Recent phones and standalone VR     |
| Good        | Medium performance desktops/laptops |
| Heavy       | High performance desktops/laptops   |
| Unoptimized | Opt-in only                         |

We automatically choose a visibility option based on your device, but if you want more performance or to see more avatars you can change this in the display settings menu.

If someone in a world you are in does not meet your visibility setting they will be shown as a fallback avatar.

The rank of each avatar is chosen by the lowest rank given across the following attributes:

<!-- | Performance Rank | Excellent          | Good         | Medium       | Poor         |
| ---------------- | ------------------ | ------------ | ------------ | ------------ |
| Triangles        | 7,500              | 10,000       | 15,000       | 25,000       |
| Bounds           | 2.5m x 2.5m x 2.5m | 4m x 4m x 4m | 5m x 6m x 5m | 5m x 6m x 5m |
| Skinned meshes   | 1                  | 1            | 2            | 2            |
| Meshes           | 1                  | 1            | 2            | 2            |
| Texture size\*   | 1024 x 1024        | 2048 x 2048  | 2048 x 2048  | 4096 x 4096  |
| File size        | 5 MB               | 8 MB         | 12 MB        | 16 MB        | -->

| Performance Rank | Heavy        | Good         | Great        | Perfect      |
| ---------------- | ------------ | ------------ | ------------ | ------------ |
| File size        | 25 MB        | 15 MB        | 10 MB        | 5 MB         |
| Triangles        | 64,000       | 32,000       | 16,000       | 4,000        |
| Draw Calls       | 32           | 4            | 2            | 1            |
| Bounds           | 7m x 5m x 4m | 4m x 4m x 4m | 3m x 3m x 3m | 3m x 3m x 3m |

For most people we recommend trying to achieve a `Good` rank or better, as this provides the best experience for everyone on a wide variety of desktop/laptop devices. If you plan to spend time in large events or mobile/VR worlds it's recommended to achieve at least a `Great` rank.

## Large Events

For a party or meetup where lots of people are in a world together at the same time, it's important that everyone sets their avatar visibility to something appropriate for the occasion and wears a well optimized avatar.

- Lowering your avatar visibility setting before joining a world will load you into the world faster and prevent lag during the event.
- Wearing a well optimized avatar will mean everyone sees you as you intended.

> "Party at my house! Set your avatar visibility to Great+ and bring your best avatar!"

By setting the tone for your event, people that follow your recommendation will have a great experience, and those who ignore it and bring heavy avatars along can't ruin the experience for others.

## Creator Features

We support VRM 0.1 and 1.0 which includes MToon, UV Scrolling and Neon Glow for PBR materials.

To add bloom/glow to your PBR materials, set the emissive color to something other than black and then increase emissive strength to a value greater than 1 depending on how much bloom you want.
In order to export a VRM with emissive strength from blender you'll need to use our patched version of the [Blender VRM Addon](https://vrm-addon-for-blender.info/en/) until they accept our [pull request](https://github.com/saturday06/VRM-Addon-for-Blender/pull/190).

Download: [VRM-Addon-for-Blender-Hyperfy.zip](https://data.hyperfy.xyz/VRM-Addon-for-Blender-Hyperfy.zip) for Blender 3.4 (adds support for KHR_materials_emissive_strength)
