# Audio

To read more about Hyperfy's audio-reactive toolkit, read [this deep dive](https://hackmd.io/@metamike/hyperfy-audio-reactive-toolkit#The-Audio-Bridge-App).

## Audio Light

### Overview

The Audio Light app allows you to create an area or point light and use the Audio Bridge app to increase the intensity value of the light, allowing the light intensity to react to the audio input in real-time.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Type**: `Point` for point light, `Area` for area light.
- **Color**: The color of the sun using hexadecimal value. This parameter has a color selector.
- **Distance**: The radius of the area that the light source affects.
- **Decay**: The falloff value for the light source.

#### Audio

- **Bridge**: Selector for the audio bridge app you want to associate the light with.
- **Band**: The frequency brand the light should be applied to.
- **Factor**: Acts as a multiplier for the driver of the light intensity value.
- **Active**: When the video should be active (`Always`, `Flag Set`, `Quest Active` etc.).

## Audio Bridge

### Overview

The Audio Bridge App is the central component of Hyperfy's audio-reactive toolkit, responsible for processing the audio input from an audio, video, or stream app. You can set up to 4 frequency bands and a 'threshold ratio' for each. The lower the threshold, the higher the value sent to the Audio Bloom or Audio Light app. Each Audio Bridge instance can be associated with one 'Audio ID' from the source.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: A custom name for the bridge.
- **Source**: Selector for audio source.

#### Frequencies

These parameters set the minimum frequency in Hz for each audio band.

#### Threshold Ratio

These parameters set the threshold ratio for each audio band.

## Audio Bloom

### Overview

The Audio Bloom App allows you to upload a custom model and control the emission value of a particular material using the Audio Bridge app, creating a dynamic and interactive 'bloom' effect based on the input audio.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: A custom name for the light.
- **Model**: Choose a `.glb` file to use as the base of the audio bloom.
- **Scale**: The scale of the model.
- **Material**: The name of the `.glb` model's material that you want to be impacted by the Audio Bridge app.

#### Audio

- **Bridge**: Selector for the audio bridge app you want to associate the light with.
- **Band**: The frequency brand the light should be applied to.
- **Factor**: Acts as a multiplier for the driver of the emission value.
- **Active**: When the video should be active (`Always`, `Flag Set`, `Quest Active` etc.).
