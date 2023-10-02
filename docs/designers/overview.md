---
sidebar_position: 10
---

# Overview

If you're looking to build custom 3D assets for Hyperfy this section should help you create some epic content.

## GLTF

All 3D models in Hyperfy use the interoperable GLTF Binary Format (.glb)

You can find a lot of these on websites like Sketchfab, CGTrader etc, but this guide will mainly focus on the creation and optimisation of 3D content.

## Software

Any 3D software that supports exporting to GLTF can be used. Blender is recommended and free and will be used as examples throughout these docs.

## Scene Organisation

You can organise your scene hierarchy however you like, but it's recommended to keep your hierarchy as flat as possible for maximum performance.

## Materials

The GLTF format supports PBR materials (the default in blender) and you can also use unlit materials by connecting your node directly to the Material Output.

See the [Blender GLTF](https://docs.blender.org/manual/en/2.80/addons/io_scene_gltf2.html) docs for a full run down.

## Lighting

Worlds are pre-equipped with an HDRI, sunlight and shadows, and you can swap them out with your own if you need to.

You can add lights directly into your world from the editor, but it's recommended not to use more than a couple and none if you can help it.

We don't currently support lightmaps but plan to add this in the near future.
