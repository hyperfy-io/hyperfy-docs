---
sidebar_label: 🎨 3D Models
---

# 3D Models

To add 3D models to your world you'll need to find, create, or convert your models to the interoperable GLTF Binary format (.glb)

If you're not familiar with 3D modelling you can find ready-to-use models from various places online such as [Sketchfab](https://sketchfab.com) and [Poly Pizza](https://poly.pizza)

### Software

Any 3D software that supports exporting to GLTF can be used. Blender is recommended and free and will be used as examples throughout these docs.

### Scene Organisation

We try not to force you to work in a certain way, and use a simple suffix labelling system to add additional functionality to your models.

### Materials

The GLTF format supports PBR materials (the default in blender) and you can also create unlit materials by connecting your node directly to the Material Output.

See the [Blender GLTF](https://docs.blender.org/manual/en/2.80/addons/io_scene_gltf2.html) docs for a full run down.

### Lights

Worlds are pre-equipped with an HDRI, sunlight and shadows. If you are building an indoor space we recommend using baked lighting.

### Neon Glow / Bloom

We support HDR bloom which allow materials to "glow".
To make something glow, give your PBR material an emissive color/texture and then increase the emissive strength value to something greater than one.

You can preview bloom in Blender by enabling it in the Render Properties tab. Keep in mind bloom displays slightly different in Hyperfy, but this will give you a good idea of what to expect.

Note: Older versions of Blender GLTF Exporter were not exporting emissive strength values. Use Blender >= 3.4

### Limitations

There are no limitations but we do highly recommend the following to ensure your worlds load fast and run smooth across all devices we support:

- Textures: <= 2048 x 2048
- Polys: <= 600,000 for the entire space
- Size: <= 60MB

### Compression

We support both Draco and Meshopt compression, and have support for Basis/KTX2 textures. We recommend you use these to significantly cut down your file sizes.

The [gltfpack](https://www.npmjs.com/package/gltfpack) tool is a CLI that can convert textures to ktx2 and compress your gltf with meshopt. If you run into issues with collision not working as expected then try disabling the quantization option (-noq).

Additionally, [gltf.report](https://gltf.report) is an excellent tool to test your models instantly in the browser, and provides tools to resize textures and export with basic compression modes.

### Collision

By default your meshes will not have collision and avatars will walk (or fall) straight through them.

To add collision, simply add one of the following suffixes to your mesh:

1. `_collider`: The mesh will have convex collision
1. `_xcollider`: The mesh will have convex collision and be invisible
1. `_tcollider`: The mesh will have trimesh collision
1. `_xtcollider`: The mesh will have trimesh collision and be invisible

We highly recommend that you use convex colliders for performance and accurately solid objects, but we recongize trimesh collision as an alternative that is much simpler but has trade-offs.

When using invisible colliders it's worth going to `Object Properties -> Viewport Display` and setting `Display As` to `Wire` so that they don't get in the way in blender. You could also add all your invisible colliders to a Collection to easily show/hide them all at once.

**IMPORTANT:** Apply your transforms! If your collision seems to be in the wrong place or incorrectly sized, try applying your scale transform. Click `Object -> Apply -> Scale` on each collision mesh.
