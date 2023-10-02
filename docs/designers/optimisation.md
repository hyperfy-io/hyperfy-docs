---
sidebar_position: 30
---

# Optimisation

Optimisation is the process of making your 3D models more efficient.

This usually means that users spend less time loading into your world but also maintain a good framerate with less lag.

The following are some things to look out for and some tips on how to get the best performance.

## Mesh Complexity

Often we build or find meshes that have a huge amount of triangles/vertices. This can be useful in the design phase but not very great for realtime virtual worlds that run on mobile devices.

A simple trick in blender is to use the "Decimate" modifier. This modifier allows you to downsample your mesh while attempting to preserve its original shape.

TODO: screenshot before and after

## Mesh Compression

Mesh compression allows you to crunch the file size of your models down so that people spend less time waiting for them to load. We recommend you always compress your meshes as they offer huge savings in file size with no downsides.

Hyperfy supports both Draco and Meshopt compression.

The simplest way to compress your models is by using [gltf.report](https://gltf.report) but you can also use CLI tools such as [gltfpack](https://www.npmjs.com/package/gltfpack) and [gltf-transform](https://gltf-transform.dev/).

## Texture Size

Each texture you use in a 3D model gets pushed to the GPU, and GPU's only have so much memory, especially on mobile.

Texture size is the most common reason you might run into issues on mobile devices as they have a very limited amount of memory.

Hyperfy has no limits on texture sizes but we recommend worlds have less than 25 textures at a size of 2048 x 2048.

## Texture Compression

Texture compression not only lowers your file sizes even further, but Basis/KTX2 texture compression uses up less GPU memory.

We have full support for Basis/KTX2 texture compression and most of the time there is no reason to not use it.

Currently, you must use a CLI tool to compress textures. Either [gltfpack](https://www.npmjs.com/package/gltfpack) or [gltf-transform](https://gltf-transform.dev/).

## Draw Calls

The more draw calls you have, the more work your CPU needs to do each frame. Keeping your draw calls low is the best way to maintain a high framerate, especially on mobile devices.

But what exactly is a draw call? In Hyperfy's engine, each individual geometry will be at least one draw call. If that geometry has more than one material on it then it will cost another draw call for each.

It's highly recommended to make sure all meshes only use a single material. If you feel like you need more than one, you can read about texture atlasing below.

## Texture Atlasing

TODO

## GPU Instancing

TODO

## Merging Geometry

TODO (note: frustum culling issues)
