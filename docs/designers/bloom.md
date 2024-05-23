---
sidebar_position: 20
---

# Bloom

Bloom is an effect that makes an object glow.

![](/img/designers-bloom.png)

Hyperfy supports "HDR Bloom" which means that any material that emits color into HDR levels will glow.

To make an object glow, give your material an emissive color/texture and then increase the emissive strength value to something greater than one.

You can preview bloom in Blender by enabling it in the Render Properties tab. Keep in mind bloom displays slightly different in Hyperfy, but this will give you a good idea of what to expect.

:::note

Older versions of Blender GLTF Exporter were not exporting emissive strength values. Use Blender >= 3.4

:::
