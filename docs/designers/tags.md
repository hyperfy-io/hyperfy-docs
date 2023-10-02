---
sidebar_position: 20
---

# Tags

You can append tags to the name of each mesh in your 3D model to control things like collision and camera bumpers.

## Collision

Collision prevents people from falling through your 3D models or walking through walls.

While our editor has an option to automatically make everything in your model have collision, tags allow you to add collision to only some meshes, or create hidden colliders.

1. `_tcollider`: The mesh will have trimesh collision
1. `_xtcollider`: The mesh will have trimesh collision and be invisible
1. `_collider`: The mesh will have convex collision\*
1. `_xcollider`: The mesh will have convex collision and be invisible\*

\*Most of the time you'll only need to use trimesh colliders, but convex colliders are a great way to get more performance in exchange for effort.

:::info

When using a model with tags, use the `Inherit` collision option in the editor.

:::

When using invisible colliders it's worth going to `Object Properties -> Viewport Display` and setting `Display As` to `Wire` so that they don't get in the way in blender. You could also add all your invisible colliders to a Collection to easily show/hide them all at once.

## Cosmetic

In third person the camera follows you from behind your avatar. By default the camera will "bump" into everything.

In some cases you might find that you don't want the camera to do this because it causes jitter. One example of this for lighting cones, but you may also want to disable camera bumping on thin objects like lamp posts, trees or shrubs.

To disable camera bumping, simply add he `_cosmetic` tag to the meshes name.

## Hitbox

When interacting with an object in your world, you might want to increase the size of the hitbox so that people don't have to be so precise. This is especially useful if the object is small or thin, or otherwise hard to click.

To do this, you can add an extra mesh like a cube and give it a `_hitbox` tag. This mesh will not be rendered but will still be registered to handle click events.

**IMPORTANT:** Apply your transforms! If your collision seems to be in the wrong place or incorrectly sized, try applying your scale transform. Click `Object -> Apply -> Scale` on each collision mesh.
