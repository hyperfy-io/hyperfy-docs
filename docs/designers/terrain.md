---
sidebar_position: 25
---

# Terrain

Hyperfy has support for building larger terrains with high quality textures using a technique called "Splatmaps" that are super performant.

GLTF doesn't have support for splatmaps, so we've created a workflow to do this on top of GLTF, using the `Terrain Mesh` app in our editor.

Using a Terrain Mesh allows you to paint, blend and shade multiple tiling textures together onto a mesh. You can paint with up to four different textures and use vertex colors to tint or darken areas of the terrain.

## Setup

To quickly get your started we’ve created a blender template with everything you’ll need to get started.

[Download: terrain-mesh.zip](/terrain-mesh.zip)

This blend file includes:

1. A 500x500 terrain ready to sculpt and paint
2. An avatar mesh for scale
3. Splatmap shader
4. Four texture brushes (Grass, Dirt, Rock, Sand)

## Sculpting

The first thing you’ll likely want to do is start sculpting the terrain.

1. Go to the Sculpting tab
2. Use brushes (eg Draw and Smooth) to sculpt out the terrain

Note: sculpting is locked to the Z axis for simplicity but this is not required

## Texture Painting

Once you have your terrain shaped, it’s time to paint it.

1. Go to the Texture Paint tab
2. Switch between brushes, adjust size/strength
3. Paint!

## Vertex Painting

Optionally you can use vertex colors to tint or darken different areas.

1. Go to the Texture Paint tab
2. Switch from Texture Paint to Vertex Paint
3. Choose a color to paint with
4. Paint!

## Editing Brushes

You can swap out the sample brushes with your own:

1. In the Shading tab swap out the textures with your own and adjust their scale to the left of the image node
2. In the Texture Paint tab, select the brush and edit the name and icon in the Tool tab over on the right

## Exporting

When you’re happy with your terrain its time to bring it into Hyperfy:

1. Select just the terrain mesh
2. Ensure the Decimate modifier “Render” is enabled and adjusted to be as low as possible
3. File > Export > GLB
4. Include > Selected Objects ticked!
5. Mesh > Apply Modifiers ticked!
6. Mesh > Vertex Colors ticked!
7. In Hyperfy add a “Terrain Mesh” app
8. Select your terrain GLB and then add each layers texture and enter its scale

:::danger

Decimate must be used for both file size and performance. Hyperfy will not build collisions for extremely large geometry.

:::
