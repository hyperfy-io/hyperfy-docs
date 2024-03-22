# Environment

## Sky

### Overview

The video app allows users to bring video content in world by uploading a video file or playing from a URL.

![Omega Canis](https://hackmd.io/_uploads/By9rxKc3T.png)

![aghfaw4erg](https://hackmd.io/_uploads/Hy2r-tq2a.jpg)

_An example of a custom sky background, and the same background applied to a sky with a custom HDR and fog applied to it._

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **BG**: Allows you to select a background image for the sky. `Custom` allows you to upload a custom background `.png` or `.jpg`.
- **HDR**: Allows you to select an HDR image for the sky that impacts unlit materials in the world. `Custom` allows you to upload a custom `.hdr`.
- **Radius**: Adjusts the radius of the sky.
- **Fog**: If the `Fog` app is being used in the world, `Cover` ensures that the fog also covers the sky. `Reveal` removes fog coverage from the sky.
- **Active**: When the video should be active (`Always`, `Flag Set`, `Quest Active` etc.).

## Particles

![agasdg](https://hackmd.io/_uploads/H1B2kcqnp.jpg)

### Overview

The particle app allows you to create a billboard particle system in your world.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: Custom label for particle system.

#### Playback

- **Auto Play**: `Yes` to initiate the particle system automatically, `No` to require user action.
- **Sync**: Syncs the particle animation to the world state of other players.
- **Duration**: The total time in seconds the particle effect runs before stopping or looping.
- **Loop**: `Yes` to loop the particle system, `No` to play it once.
- **Prewarm**: Starts the particle system as if it had already been running for its full duration. This is useful for effects like fire or smoke that need to appear fully developed immediately.
- **Start Delay**: Time delay before the particle system starts emitting after being activated.
- **Time Scale**: Speed multiplier for the playback of the particle system; values greater than 1 make the effect play faster, and values less than 1 make it play slower.
- **Random Seed**: `Yes` to randomize the seed each instance, `No` to maintain the same seed across instances. Randomizing the seed value ensures particle system's appearance variability.

#### Emission

- **Rate**: The number of particles emitted per second.
- **Max Particles**: The number of particles emitted per second.

#### Render

- **Billboard**: Billboard mode used for particles (`Full` rotates particles horizontally and vertically, `Horizontal` rotates particles horizontally only, `Vertical` rotates particles vertically only).
- **Texture**: `.png` file to be used as particle texture.
- **Material**: `Lit` for texture to be affected by world lighting, `Unlit` for texture to be unaffected by world lighting.
- **Blending**: `Additive` for texture to have an additive blend mode (good for use clases like fire), `Normal` for texture to have a normal blend mode.
- **World Space**: `Yes` if particles should be positioned in world coordinates (staying in world space as emitter moves), `No` if particles should be positioned in local coordinates (moving in world space as emitter moves).

#### Shape

- **Type**: The emitter shape that defines how and where particles are emitted. `Cone` emits in a cone shape from the local origin vertically, `Sphere` propogates spherically from the local origin, `Circle` emits in a horizontal circle from the local origin.
- **Radius**: Radius of emitter shape.
- **Thickness** Thickness of emitter shape.
- **Angle**: For cone emitters, this defines the spread angle of the particles.
- **Arc**: The arc over which particles are emitted, with 360 degrees being a full circle.
- **Randomize Direction**: The degree of randomness to particle emission direction.

#### Spawn

- **Start Life**: The lifetime of each particle after being emitted. Select a `Constant` value, create a `Linear Curve` or use a `Random Curve`.
- **Start Speed**: The initial speed of particles upon emission. Select a `Constant` value, create a `Linear Curve` or use a `Random Curve`.
- **Start Size**: The initial size of particles. Select a `Constant` value, create a `Linear Curve` or use a `Random Curve`.
- **Start Rotation**: The initial rotation angle of particles. Select a `Constant` value, create a `Linear Curve` or use a `Random Curve`.
- **Start Color**: The initial color of particles. Select a `Constant` value, create a `Linear Curve` or use a `Random Curve`.

#### Size over lifetime

- **Enabled**: `Yes` if the size of particles changes as they age, `No` if the size of the particles remains constant. Optionally, create a curve for more control over change over lifetime.

#### Rotation over lifetime

- **Enabled**: `Yes` if the rotation of particles changes as they age, `No` if the rotation of the particles remains constant. Optionally, create a curve for more control over change over lifetime.

#### Color over lifetime

- **Enabled**: `Yes` if the color of particles changes as they age, `No` if the color of the particles remains constant. Optionally, create a curve for more control over change over lifetime.

#### Velocity over lifetime

- **Enabled**: `Yes` if the velocity of particles changes as they age, `No` if the velocity of the particles remains constant. Optionally, create a curve for more control over change over lifetime.
- **Linear `X`**: The change in velocity along the horizontal axis over the particle's lifetime.
- **Linear `Y`**: The change in velocity along the depth axis over the particle's lifetime, typically used to simulate upward movement in effects like fire.
- **Linear `Z`**: The change in velocity along the vertical axis over the particle's lifetime.
- **World Space**: `Yes` if the velocity changes are applied in the world coordinate system, `No` if they are applied in the emitter's local coordinate system.
- **Orbital `X`**: The orbital velocity around the X-axis, adding a rotational movement to the particles.
- **Orbital `Y`**: The orbital velocity around the Y-axis, adding a rotational movement to the particles.
- **Orbital `Z`**: The orbital velocity around the Z-axis, adding a rotational movement to the particles.
- **Orbital Offset `X`**: Defines an offset from the center for the orbital movement along the X-axis.
- **Orbital Offset `Y`**: Defines an offset from the center for the orbital movement along the Y-axis.
- **Orbital Offset `Z`**: Defines an offset from the center for the orbital movement along the Z-axis.
- **Orbital Radial**: Controls the radial distance from the orbit's center at which the particles start their orbital movement.

## Terrain Mesh

### Overview

The terrain mesh app allows you to build larger terrains with high quality textures using a technique called "Splatmaps" that are highly performant. To learn more about how to implement this within Hyperfy, visit [here](https://docs.hyperfy.io/designers/terrain).

![hadfjpoa](https://hackmd.io/_uploads/rJas4_02a.jpg)

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **GLB**: The mesh to use for a terrain uploaded as a `.glb` file.

#### Layer 1 (Black)

- **Map**: The texture to be used for the 1st material slot of your splatmap.
- **Scale**: The scale applied to the texture.

#### Layer 2 (Red)

- **Map**: The texture to be used for the 2nd material slot of your splatmap.
- **Scale**: The scale applied to the texture.

#### Layer 3 (Green)

- **Map**: The texture to be used for the 3rd material slot of your splatmap.
- **Scale**: The scale applied to the texture.

#### Layer 4 (Blue)

- **Map**: The texture to be used for the 3rd material slot of your splatmap.

## Light

### Overview

The light app allows you to add static and dynamic light sources to your world.

![Area Light](https://hackmd.io/_uploads/rknqePyR6.jpg)

_An `Area` light with the same `Width` and `Depth` as a video, using `Video` as the `Source` for the light._

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Type**: `Point` for point light, `Area` for area light.
- **Source**: `Color` for static color using hexadecimal value. This parameter has a color selector. `Video ` to use a video source to drive the color dynamically. **Note**: You must have a labeled video app in your world to use this.
- **Intensity**: The light source intensity.

Depending on the `Type` selected, the available options will change:

##### When Type is set to `Point`

- **Distance**: The radius of the area that the light source affects.
- **Decay**: The falloff value for the light source.

##### When Type is set to `Model`

- **Width**: The width of the area light.
- **Depth**: The depth of the area light.

## Water

### Overview

The water app allows you to create a realistic dynamic water texture for your world.

![Water](https://hackmd.io/_uploads/BJK0-vJCa.jpg)

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Width**: The width of the area light.
- **Depth**: The depth of the area light.
- **Distortion**: The level of distortion applied to the water texture. By adjusting the distortion parameter, you can manipulate the appearance of textures by warping or twisting the water pattern to achieve different visual effects and textures.
- **Speed**: The speed at which the water moves.
- **Quality**: The resolution of the water texture.

## Sun

### Overview

The sun app allows you to create a global directional light source for your world.

![Sun](https://hackmd.io/_uploads/SyGYMw1Aa.jpg)

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Time**: This parameter adjusts the angle of the sun based on hour of day (0-24).
- **Direction**: Changes the horizontal angle of the sun.
- **Intensity**: The intensity of the light source.
- **Color**: The color of the sun using hexadecimal value. This parameter has a color selector.
- **Guide**: `Yes` to turn on guide widget. `No` to turn off guide widget.

## Terrain

### Overview

The terrain allows you to use simple terrain presets in your world.

![Terrain](https://hackmd.io/_uploads/HkjJQPkRT.jpg)

### Configuration Parameters

#### General

- `X`: Horizontal position of the terrian.
- `Y`: Depth position of the terrain.
- `Z`: Vertical position of the terrain.
- `X`: Rotation around the horizontal axis.
- `Y`: Rotation around the depth axis.
- `Z`: Rotation around the vertical axis.
- **Type**: Terrain type selector.

## Fog

### Overview

The fog app allows you to implement a fog source into your world.

![Fog](https://hackmd.io/_uploads/HJRrQvyAa.jpg)

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Color**: The color of the sun using hexadecimal value. This parameter has a color selector.
- **Type**: Allows you to choose `Exponential` or `Linear` fog. Linear fog increases linearly with distance, while exponential fog grows denser at an exponential rate, providing different visual effects and atmospheric enhancements in virtual environments.
- **Density**: The density level of the fog. The more dense, the 'thicker' the fog.
