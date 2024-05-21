---
sidebar_position: 20
---

# Avatars

Hyperfy gives you the power to be who you want to be, using the interoperable [VRM](https://vrm.dev/en/) avatar format. Gone are the days where platforms restrict what you look like!

As the first live metaverse platform on the web to support fully immersive multiplayer VRM avatars, we're super excited to see this standard become more widespread so that we can bring our avatars everywhere we go.

## Getting Started

To get you started quickly, we offer a library of open source avatars for you to choose from.

For now this includes 200+ Crypto Avatars from [Vipe](https://vipe.io) that you can equip right from the account menu:

<img src="/img/cryptoavatars.png" alt="Crypto Avatars in Hyperfy" style={{ maxWidth: '400px' }} />

## Avatar NFT's

All NFT's that you own that have a VRM avatar embedded will be displayed in the account menu for quick access:

<img src="/img/nft-avatars.png" alt="NFT Avatars in Hyperfy" style={{ maxWidth: '400px' }} />

## Uploading An Avatar

If you found a VRM avatar online and want to use it in Hyperfy, you can either drag and drop it directly onto the window or click the upload button in the account menu

## Finding An Avatar

You can find avatars online in many places, with more being added daily:

- NFT marketplaces such as [Vipe](https://vipe.io), [Mona](https://monaverse.com/marketplace?type=Avatar)
- NFT collections suchs as [Crypto Avatars](https://opensea.io/collection/cryptoavatars), [VOLTZ](https://opensea.io/collection/voltz-avatars), [VOID](https://opensea.io/collection/visitors-of-imma-degen), [Chain Runners](https://opensea.io/collection/chain-runners-xr) and more.
- Web2 marketplaces such as [VRoid Hub](https://hub.vroid.com/en)

## Creating an Avatar

You can also create your own avatar:

- Using tools such as [VRoid Studio](https://vroid.com/en/studio)
- With [Blender](https://www.blender.org/) and the [VRM Addon](https://vrm-addon-for-blender.info/en/).
- Hiring a 3D artist (ask in our discord!)

## Ranking System

Hyperfy uses a ranking and visibility system to give people the best experience across any kind of device.

| Rank        | Best for...                         |
| ----------- | ----------------------------------- |
| Perfect     | Any device                          |
| Great       | Modern phones and standalone VR     |
| Good        | Medium performance desktops/laptops |
| Heavy       | High performance desktops/laptops   |
| Unoptimized | Opt-in only                         |

We automatically choose a visibility setting based on your device but you can change this at any time in the settings menu to improve performance or view heavier avatars.

If an avatar doesn't meet your visibility setting they will be shown as a fallback avatar.

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
| Bones            | 160          | 130          | 100          | 70           |
| Bounds           | 7m x 5m x 4m | 4m x 4m x 4m | 3m x 3m x 3m | 3m x 3m x 3m |

For most people we recommend trying to achieve a `Good` rank or better, as this provides the best experience for everyone on a wide variety of desktop/laptop devices. If you plan to spend time in large events or mobile/VR worlds it's recommended to achieve at least a `Great` rank.

## Creator Notes

We support VRM 0.1 and 1.0 which includes MToon, UV Scrolling and Neon Glow for PBR materials.

To add bloom/glow to your PBR materials, set the emissive color to something other than black and then increase emissive strength to a value greater than 1 depending on how much bloom you want.
In order to export a VRM with emissive strength from blender you'll need to use our patched version of the [Blender VRM Addon](https://vrm-addon-for-blender.info/en/) until they accept our [pull request](https://github.com/saturday06/VRM-Addon-for-Blender/pull/190).

Download: [VRM-Addon-for-Blender-Hyperfy.zip](https://data.hyperfy.xyz/VRM-Addon-for-Blender-Hyperfy.zip) for Blender 3.4 (adds support for KHR_materials_emissive_strength)
