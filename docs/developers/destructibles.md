---
sidebar_label: "Guide: Destructibles"
sidebar_position: 85
---

In this tutorial we will be showing you how to create a destructible barrel that tosses anyone caught in its effect radius into the air.

We will use many of Hyperfy's most useful features including sync state, custom fields, file uploads, editor-only helpers, component references, communicating with other apps using signals and triggers, effects that resolve over time, NFT ownership checks, and much more.

All of the media files can be found in the sample app in the [Hyperfy-recipes](https://github.com/hyperfy-io/hyperfy-recipes) repository. If you don't have files with the same name/type in your project's `assets` folder you may encounter bugs, please take a moment to download the files and add them to your project.

This advanced tutorial expects you to have an understanding of the Hyperfy SDK and Javascript/React code patterns. We won't explain everything in detail so please see the relevant API documentation pages for more information, and feel free to join our [Discord](https://discord.gg/TGtyTEWB2X) and ask questions!

[Skip to final code](#final-code)

## Design

We are building an app that does the following:

- While active, the app appears as a red barrel
- When the barrel is clicked:
  - The barrel disappears
  - a sound effect plays
  - a light flashes briefly then fades away
  - gifs appear briefly then disappear
  - any user inside a trigger square is shot into the air
    - If the user owns at least 1 nft of a specific contract they are protected from this effet
- When the user is in the editor menu, the following changes will happen until the editor is closed:
  - the light turns on
  - the gif appears and loops
  - a transparent box appears which scales with the blast radius
    - trigger is not visible if the barrel has been exploded, to make it clear it's not active and tweak visuals
- All variables exposed as editor fields
- Barrel state synchronized across players
- Expose triggers to interact with external apps when
- Expose signals so other apps can interact with ours, and the app can be controlled in the editor menu

## Model

We'll adding the barrel model with a kinematic rigid body so it interacts with the physics engine. Put a GLB model in your app's `assets` folder with the name `barrel.glb`.

<details>
<summary>Click to view code</summary>

```jsx
import React from "react";

export default function Destructible() {
  return (
    <app>
      //highlight-start
      <rigidbody type="kinematic">
        <model src="barrel.glb" collision="trimesh" />
      </rigidbody>
      //highlight-end
    </app>
  );
}
```

</details>

## Sync state

Our app will have two states, active and inactive. By default the app will be in active mode, and when clicked the barrel will be destroyed and will no longer be active.

To synchronize this state across multiplayer we import the useSyncState hook from the hyperfy library. This hook is very similar to useState: you tell it which variable to bind to and it returns the networked variable and a dispatch function to send updates to other players. The dispatch actions are defined in the actions section of a getStore function you export (very similar to redux).

Import `useSyncState` and use it to create the synchronized state store. Outside of our app's default function add the getStore function with a `Destroy(state)` action (NOTE: the capital D is just to differentiate the two, don't mix them up).

To make the app interactive we add an onPointerDown event to the model. This event fires when a user is in range of the model and clicks. We pass it a callback function `destroy()`, which just calls the `dispatch()` function sending the `Destroy` action across the network. When any client receives the `Destroy` action the corresponding `Destroy` function is executed, setting the state variable `active` to false. We will use this `active` variable later on.

<details>
<summary>Click to view code</summary>

```jsx
import React from "react";
//highlight-next-line
import { useSyncState } from "hyperfy";

export default function Destructible() {
  //highlight-next-line
  const [active, dispatch] = useSyncState((state) => state.active);

  //highlight-start
  function destroy() {
    dispatch("destroy");
  }
  //highlight-end

  return (
    <app>
      <rigidbody type="kinematic">
        <model
          src="barrel.glb"
          collision="trimesh"
          //highlight-next-line
          onPointerDown={destroy}
        />
      </rigidbody>
    </app>
  );
}

//highlight-start
export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      destroy(state) {
        state.active = false;
      },
    },
  };
}
//highlight-end
```

</details>

## Editor fields

The barrel currently has no text hint when you hover over it. We can easily add some hard-coded text to this component, but it's usually a good idea to expose these variables to the editor (at least during development). This lets you tweak the variables in your code from within the hyperfy editor, giving consumers of your app a more customizable experience.

First we import `useFields` from the hyperfy library and call it inside our app function. We use object destructuring syntax on the result to get our `label` variable, which will be tied to a field in the editor UI. We add the `onPointerDownHint` prop to our model and give it the `label` value.

A new `fields` property must be added to the object returned from the `getStore` function which contains an array of all the editor fields we want to expose to the user. When destructuring the `useFields` result, the variable names must match a key in the fields array. Now you can change the hover label of the model through the editor!

<details>
<summary>Click to view code</summary>

```jsx
import React from "react";
import {
  useSyncState,
  //highlight-next-line
  useFields,
} from "hyperfy";

export default function Destructible() {
  const [active, dispatch] = useSyncState((state) => state.active);
  //highlight-next-line
  const { label } = useFields();

  function destroy() {
    dispatch("Destroy");
  }

  return (
    <app>
      <rigidbody type="kinematic">
        <model
          src="barrel.glb"
          collision="trimesh"
          onPointerDown={destroy}
          //highlight-next-line
          onPointerDownHint={label}
        />
      </rigidbody>
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
    },
    //highlight-start
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },
    ],
    //highlight-end
  };
}
```

</details>

## Handle user file uploads

We can make our barrel model customizable with an editor field as well but we need a new hook to handle the file uploads. The `useFile` hook takes a file uploaded from an editor field and returns a cloud URl of the asset.

Import `useFile` from hyperfy, add the `model` property to the `useFields` destructure, add a `file` field to the fields array (and a `category` for files as well), pass the `model` to the `useFile` hook, and swap out the src prop in the model component. the `??` syntax will default to our barrel model (this would throw an error without it).

<details>
<summary>Click to view code</summary>

```jsx
import React from "react";
import {
  useSyncState,
  useFields,
  //highlight-next-line
  useFile,
} from "hyperfy";

export default function Destructible() {
  const [active, dispatch] = useSyncState((state) => state.active);
  const {
    label,
    //highlight-next-line
    model,
  } = useFields();
  //highlight-next-line
  const modelUrl = useFile(model);

  function destroy() {
    dispatch("Destroy");
  }

  return (
    <app>
      <rigidbody type="kinematic">
        <model
          //highlight-next-line
          src={modelUrl ?? "barrel.glb"}
          collision="trimesh"
          onPointerDown={destroy}
          onPointerDownHint={label}
        />
      </rigidbody>
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },
      //highlight-start
      {
        type: "section",
        label: "Files",
      },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      //highlight-end
    ],
  };
}
```

</details>

## Signals

If we want other apps to be able to set the state of our custom app we need to add signals. This also allows us to control the app's state from within the editor UI.

Import useSignal from hyperfy, then call it by passing in the name of our signal `Destroy` as well as a callback function, which in our case is `destroy`. When the `Destroy` signal is received, our app will execute the same exact code as it would if you had clicked on the model.

While we're in there let's add a `Reset` signal, a corresponding `reset` function, and a sync state action that sets `active` to true.

The basic state is setup now so let's add some conditional rendering. Check the `active` variable before rendering the `rigidbody` component. The model will now only appear when the state is active. Try clicking on the model as well as playing with the Destroy and Reset buttons in the editor to see the model appear and disappear.

We'll also quickly add some triggers for Destroy and Reset, which other apps can listen for and react. Import `useWorld` from hyperfy and call it to get a reference to the world object. We add the trigger editor fields and call them using `world.trigger()`;

<details>
<summary>Click to view code</summary>

```jsx
import React from "react";
import {
  useSyncState,
  //highlight-next-line
  useWorld,
  useFields,
  useFile,
  //highlight-next-line
  useSignal,
} from "hyperfy";

export default function Destructible() {
  const [active, dispatch] = useSyncState((state) => state.active);
  const { label, model } = useFields();
  const modelUrl = useFile(model);
  //highlight-next-line
  const world = useWorld();
  //highlight-start
  useSignal("Reset", reset);
  useSignal("Destroy", destroy);
  //highlight-end

  //highlight-start
  function reset() {
    dispatch("Reset");
  }
  //highlight-end

  function destroy() {
    dispatch("Destroy");
  }

  return (
    <app>
      //highlight-start
      {active && (
        <>
          //highlight-end
          <rigidbody type="kinematic">
            <model
              src={modelUrl ?? "barrel.glb"}
              collision="trimesh"
              onPointerDown={destroy}
              onPointerDownHint={label}
            />
          </rigidbody>
          //highlight-start
        </>
      )}
      //highlight-end
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
      //highlight-start
      Reset(state) {
        state.active = true;
      },
      //highlight-end
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },
      {
        type: "section",
        label: "Files",
      },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      //highlight-start
      {
        type: "section",
        label: "Triggers",
      },
      {
        type: "trigger",
        name: "Destroy",
      },
      {
        type: "trigger",
        name: "Reset",
      },
      //highlight-end
    ],
  };
}
```

</details>

## Light

This is where it gets a bit more complex. We are going to add a light component and have it react to the sync state variable. When the state of `active` changes, if the state is `false` we will briefly flash the light and have it fade out over a specified duration. If the state is `true` we will reset things.

We added a `arealight` component with a ton of editor fields to control the properties of the light including position, sound, and color. The component is conditionally rendered based on an enablelight editor field, which allows the user to disable the dynamic light. We also added a `giflifetime` editor field which will be used to time the light cleanup.

To adjust the intensity of our light we need to import `useState` from react and create an `intensity` state variable which we can set using `setIntensity`. We also need a reference to our `audio` component, so we import `useRef` from react and create a `lightRef` which we pass into the `ref` prop of our sound.

Because we are dealing with side-effects we need to use useEffect from react. We will have the `active` variable as our effect's dependency.

In order to avoid glitches on the server, we need to check if the code is running on the client or the server. In our effect, we first check if the code is running on the client by checking `!world.isServer`.

if the app state is NOT active, use `setIntensity` to set it to the lightintensity variable, which will turn the light on (if it's enabled in the editor field).

Next, we create a `world.onUpdate` function, which will be fired every frame and give us a `delta` variable representing the amount of time in seconds since the last frame. We assign this to a variable `cleanup` which will be called later, to unsubscribe from the event.

Inside the `onUpdate` function we add up the delta time to our total time elapsed, and if the elapsed time is greater than our light lifetime we set the intensity of the light to 0 and prevent further loops. If not enough time has elapsed, we do a linear fade between our maximum intensity and 0, and set the intensity to that value.

The onUpdate function would run forever like this unless we unsubscribe to it. This is why we use setTimeout to cleanup this function. After a specified duration, the cleanup function is called and the opacity is set to 0. The duration is called `giflifetime` because we will also be cleaning up the gif effect in here later.

If our state is active, we reset the light intensity back to 0.

<details>
<summary>Click to view code</summary>

```jsx
import React, {
  //highlight-next-line
  seState,
  //highlight-next-line
  useEffect,
  //highlight-next-line
  useRef,
} from "react";
import { useSyncState, useWorld, useFields, useFile, useSignal } from "hyperfy";

export default function Destructible() {
  //highlight-next-line
  const [intensity, setIntensity] = useState(0);
  const [active, dispatch] = useSyncState((state) => state.active);
  const {
    label,
    //highlight-next-line
    lightcolor,
    //highlight-next-line
    lightintensity,
    //highlight-next-line
    lightscale,
    //highlight-next-line
    lightposition,
    //highlight-next-line
    lightlifetime,
    //highlight-next-line
    enablelight,
    //highlight-next-line
    giflifetime,
    model,
  } = useFields();
  const modelUrl = useFile(model);
  //highlight-next-line
  const lightRef = useRef();
  const world = useWorld();
  useSignal("Reset", reset);
  useSignal("Destroy", destroy);

  function reset() {
    dispatch("Reset");
  }

  function destroy() {
    dispatch("Destroy");
  }

  //highlight-start
  useEffect(() => {
    if (!world.isServer) {
      if (!active) {
        world.trigger("Destroy");
        setIntensity(lightintensity);

        let timeElapsed = 0;
        let fading = true;
        const cleanup = world.onUpdate((delta) => {
          if (fading) {
            timeElapsed += delta * 1000;
            if (timeElapsed >= lightlifetime) {
              setIntensity(0);
              fading = false;
            } else {
              const intensity =
                (1 - timeElapsed / lightlifetime) * lightintensity;
              setIntensity(intensity);
            }
          }
        });

        setTimeout(() => {
          cleanup();
          setIntensity(0);
        }, giflifetime);
      } else {
        world.trigger("Reset");
        setIntensity(0);
      }
    }
  }, [active]);
  //highlight-end

  return (
    <app>
      {active && (
        <>
          <rigidbody type="kinematic">
            <model
              src={modelUrl ?? "barrel.glb"}
              collision="trimesh"
              onPointerDown={destroy}
              onPointerDownHint={label}
            />
          </rigidbody>
        </>
      )}
      //highlight-start
      {enablelight && (
        <arealight
          ref={lightRef}
          color={lightcolor}
          position={[0, lightposition, 0]}
          intensity={intensity}
          depth={lightscale}
          width={lightscale}
        />
      )}
      //highlight-end
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
      Reset(state) {
        state.active = true;
      },
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },

      //highlight-start
      {
        type: "section",
        label: "Light",
      },
      {
        type: "switch",
        key: "enablelight",
        label: "Enable Light",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "lightcolor",
        label: "Light Color",
        initial: "orange",
      },
      {
        type: "float",
        key: "lightintensity",
        label: "Light Intensity",
        initial: 1000,
      },
      {
        type: "float",
        key: "lightscale",
        label: "Light Scale",
        initial: 10,
      },
      {
        type: "float",
        key: "lightposition",
        label: "Light Position",
        initial: 10,
      },
      {
        type: "float",
        key: "lightlifetime",
        label: "Light Lifetime",
        initial: 1000,
      },
      {
        type: "section",
        label: "GIFs",
      },
      {
        type: "float",
        key: "giflifetime",
        label: "Gif Lifetime",
        initial: 4000,
      },
      //highlight-end
      {
        type: "section",
        label: "Files",
      },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      {
        type: "section",
        label: "Triggers",
      },
      {
        type: "trigger",
        name: "Destroy",
      },
      {
        type: "trigger",
        name: "Reset",
      },
    ],
  };
}
```

</details>

## GIFs

Next to add some more visuals to the effect. When the barrel is destroyed, we will briefly show an animated gif and have it play for a few seconds before disappearing. Hyperfy ignores loop count otherwise you could simply use a single loop gif but this gives us more opportunity to learn.

We use the `useState` hook to create `opacity` and `setOpacity`, add4 new editor fields to upload the gifs and control position/scale, set up a file hooks for the uploads, and add the new image components. One image will be inside a `billboard` component, which will always face towards the canera but locked to the vertical axis. The other will be flat on the ground with a fixed rotation. To set the angle of the gif on the ground we import `DEG2RAD` from hyperfy and multiply it by our degrees to get our rotation in radians.

Inside our useEffect callback we set opacity to 1 when `active` is false, and set it back to 0 at the end of the `giflifetime` and if `active` is true.

Finally make sure you have the .gif files in your `assets` folder named `explosion-ground.gif` and `explosion.gif`.

<details>
<summary>Click to view code</summary>

```jsx
import React, { useState, useEffect, useRef } from "react";
import {
  useSyncState,
  useWorld,
  useFields,
  useFile,
  //highlight-next-line
  DEG2RAD,
  useSignal,
} from "hyperfy";

export default function Destructible() {
  //highlight-next-line
  const [opacity, setOpacity] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [active, dispatch] = useSyncState((state) => state.active);
  const {
    label,
    lightcolor,
    lightintensity,
    lightscale,
    lightposition,
    lightlifetime,
    enablelight,
    //highlight-next-line
    giflifetime,
    //highlight-next-line
    gifscale,
    model,
    //highlight-next-line
    gif,
    //highlight-next-line
    floorgif,
    //highlight-next-line
    gifposition,
  } = useFields();
  const modelUrl = useFile(model);
  //highlight-next-line
  const gifUrl = useFile(gif);
  //highlight-next-line
  const floorgifUrl = useFile(floorgif);
  const lightRef = useRef();
  const world = useWorld();
  useSignal("Reset", reset);
  useSignal("Destroy", destroy);

  function reset() {
    dispatch("Reset");
  }

  function destroy() {
    dispatch("Destroy");
  }

  useEffect(() => {
    if (!world.isServer) {
      if (!active) {
        world.trigger("Destroy");
        //highlight-next-line
        setOpacity(1);
        setIntensity(lightintensity);

        let timeElapsed = 0;
        let fading = true;
        const cleanup = world.onUpdate((delta) => {
          if (fading) {
            timeElapsed += delta * 1000;
            if (timeElapsed >= lightlifetime) {
              setIntensity(0);
              fading = false;
            } else {
              const intensity =
                (1 - timeElapsed / lightlifetime) * lightintensity;
              setIntensity(intensity);
            }
          }
        });

        setTimeout(() => {
          cleanup();
          setIntensity(0);
          //highlight-next-line
          setOpacity(0);
        }, giflifetime);
      } else {
        world.trigger("Reset");
        setIntensity(0);
        //highlight-next-line
        setOpacity(0);
      }
    }
  }, [active]);

  return (
    <app>
      {active && (
        <>
          <rigidbody type="kinematic">
            <model
              src={modelUrl ?? "barrel.glb"}
              collision="trimesh"
              onPointerDown={destroy}
              onPointerDownHint={label}
            />
          </rigidbody>
        </>
      )}
      //highlight-start
      <billboard axis="y">
        <image
          src={gifUrl ?? "explosion.gif"}
          scale={gifscale}
          position={[0, gifposition, 0]}
          opacity={opacity}
        />
      </billboard>
      <image
        src={floorgifUrl ?? "explosion-ground.gif"}
        position={[0, 0.05, 0]}
        rotation={[-90 * DEG2RAD, 0, 0]}
        scale={gifscale}
        opacity={opacity}
      />
      //highlight-end
      {enablelight && (
        <arealight
          ref={lightRef}
          color={lightcolor}
          position={[0, lightposition, 0]}
          intensity={intensity}
          depth={lightscale}
          width={lightscale}
        />
      )}
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
      Reset(state) {
        state.active = true;
      },
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },

      {
        type: "section",
        label: "Light",
      },
      {
        type: "switch",
        key: "enablelight",
        label: "Enable Light",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "lightcolor",
        label: "Light Color",
        initial: "orange",
      },
      {
        type: "float",
        key: "lightintensity",
        label: "Light Intensity",
        initial: 1000,
      },
      {
        type: "float",
        key: "lightscale",
        label: "Light Scale",
        initial: 10,
      },
      {
        type: "float",
        key: "lightposition",
        label: "Light Position",
        initial: 10,
      },
      {
        type: "float",
        key: "lightlifetime",
        label: "Light Lifetime",
        initial: 1000,
      },
      {
        type: "section",
        label: "GIFs",
      },
      {
        type: "float",
        key: "giflifetime",
        label: "Gif Lifetime",
        initial: 4000,
      },
      //highlight-start
      { type: "float", key: "gifscale", label: "Gif Scale", initial: 4 },
      {
        type: "float",
        key: "gifposition",
        label: "Gif Y Position",
        initial: 2,
      },
      //highlight-end
      {
        type: "section",
        label: "Files",
      },
      //highlight-start
      { type: "file", key: "gif", label: "Air Gif", accept: ".gif" },
      { type: "file", key: "floorgif", label: "Floor Gif", accept: ".gif" },
      //highlight-end
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      {
        type: "section",
        label: "Triggers",
      },
      {
        type: "trigger",
        name: "Destroy",
      },
      {
        type: "trigger",
        name: "Reset",
      },
    ],
  };
}
```

</details>

## Sound

Adding the sound effect is pretty straightfoward now. Add the file editor field, useFile, useRef, and add the audio component and set the ref. Inside our useEffect function we can get the `ref.current` and use that to play the audio with `play()`. We don't have to worry about cleaning this up because we set the audio component to not loop. Make sure you have the .mp3 file in your `assets` folder named `explosion.mp3`.

<details>
<summary>Click to view code</summary>

```jsx
import React, { useState, useEffect, useRef } from "react";
import {
  useSyncState,
  useWorld,
  useFields,
  useFile,
  DEG2RAD,
  useSignal,
} from "hyperfy";

export default function Destructible() {
  const [opacity, setOpacity] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [active, dispatch] = useSyncState((state) => state.active);
  const {
    label,
    lightcolor,
    lightintensity,
    lightscale,
    lightposition,
    lightlifetime,
    enablelight,
    giflifetime,
    gifscale,
    model,
    //highlight-next-line
    sound,
    gif,
    floorgif,
    gifposition,
  } = useFields();
  const modelUrl = useFile(model);
  //highlight-next-line
  const soundUrl = useFile(sound);
  const gifUrl = useFile(gif);
  const floorgifUrl = useFile(floorgif);
  //highlight-next-line
  const audioRef = useRef();
  const lightRef = useRef();
  const world = useWorld();
  useSignal("Reset", reset);
  useSignal("Destroy", destroy);

  function reset() {
    dispatch("Reset");
  }

  function destroy() {
    dispatch("Destroy");
  }

  useEffect(() => {
    if (!world.isServer) {
      if (!active) {
        world.trigger("Destroy");
        //highlight-next-line
        audioRef.current.play();
        setOpacity(1);
        setIntensity(lightintensity);

        let timeElapsed = 0;
        let fading = true;
        const cleanup = world.onUpdate((delta) => {
          if (fading) {
            timeElapsed += delta * 1000;
            if (timeElapsed >= lightlifetime) {
              setIntensity(0);
              fading = false;
            } else {
              const intensity =
                (1 - timeElapsed / lightlifetime) * lightintensity;
              setIntensity(intensity);
            }
          }
        });

        setTimeout(() => {
          cleanup();
          setIntensity(0);
          setOpacity(0);
        }, giflifetime);
      } else {
        world.trigger("Reset");
        setIntensity(0);
        setOpacity(0);
      }
    }
  }, [active]);

  return (
    <app>
      {active && (
        <>
          <rigidbody type="kinematic">
            <model
              src={modelUrl ?? "barrel.glb"}
              collision="trimesh"
              onPointerDown={destroy}
              onPointerDownHint={label}
            />
          </rigidbody>
        </>
      )}
      <billboard axis="y">
        <image
          src={gifUrl ?? "explosion.gif"}
          scale={gifscale}
          position={[0, gifposition, 0]}
          opacity={opacity}
        />
      </billboard>
      <image
        src={floorgifUrl ?? "explosion-ground.gif"}
        position={[0, 0.05, 0]}
        rotation={[-90 * DEG2RAD, 0, 0]}
        scale={gifscale}
        opacity={opacity}
      />
      //highlight-next-line
      <audio src={soundUrl ?? "explosion.mp3"} loop={false} ref={audioRef} />
      {enablelight && (
        <arealight
          ref={lightRef}
          color={lightcolor}
          position={[0, lightposition, 0]}
          intensity={intensity}
          depth={lightscale}
          width={lightscale}
        />
      )}
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
      Reset(state) {
        state.active = true;
      },
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },

      {
        type: "section",
        label: "Light",
      },
      {
        type: "switch",
        key: "enablelight",
        label: "Enable Light",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "lightcolor",
        label: "Light Color",
        initial: "orange",
      },
      {
        type: "float",
        key: "lightintensity",
        label: "Light Intensity",
        initial: 1000,
      },
      {
        type: "float",
        key: "lightscale",
        label: "Light Scale",
        initial: 10,
      },
      {
        type: "float",
        key: "lightposition",
        label: "Light Position",
        initial: 10,
      },
      {
        type: "float",
        key: "lightlifetime",
        label: "Light Lifetime",
        initial: 1000,
      },
      {
        type: "section",
        label: "GIFs",
      },
      {
        type: "float",
        key: "giflifetime",
        label: "Gif Lifetime",
        initial: 4000,
      },
      { type: "float", key: "gifscale", label: "Gif Scale", initial: 4 },
      {
        type: "float",
        key: "gifposition",
        label: "Gif Y Position",
        initial: 2,
      },
      {
        type: "section",
        label: "Files",
      },

      { type: "file", key: "gif", label: "Air Gif", accept: ".gif" },
      { type: "file", key: "floorgif", label: "Floor Gif", accept: ".gif" },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      //highlight-next-line
      { type: "file", key: "sound", label: "Sound", accept: ".mp3" },
      {
        type: "section",
        label: "Triggers",
      },
      {
        type: "trigger",
        name: "Destroy",
      },
      {
        type: "trigger",
        name: "Reset",
      },
    ],
  };
}
```

</details>

## Physics

When the barrel is destroyed, we should have some kind of impact on the user. Let's throw them into the air!

A trigger component can be used to keep track of who is inside the blast radius of the barrel. We will import `useEditing` and call it to create the `editing` variable. This tells us if the user has the editor open which we will use to show the user a square which represents the blast radius.

Create a new state variable called inRange, which we use to keep track if the local player is in range of the trigger box. We need to add two new editor fields, blastradius which will determine the size of the trigger box, and upwardforce which will be the force applied to any user inside the trigger upon destruction.

Create two callback functions, one for a user entering the trigger box and one for when a user exits the trigger box. When other users enter the box we want to ignore them, so check if the user that entered/exited the box has the same user ID as the local client, and if so set the `inRange` state accordingly. Now in the useEffect, we can check if the user is inRange, and if so we use `world.applyUpwareForce()` to send them flying into the sky.

We conditionally render a sem-transparent red box with the same size as the `blastradius` editor variable, which acts as a scale guide for the trigger. Boxes and triggers have the same scale so a box is a useful stand-in to visualize the position and scale of a trigger. This box only shows up when the app state is active and the editor is open. Add the trigger component and hook it up to the callback functions we defined earlier.

Finally, we can add some extra utility to the editor window by conditionally setting props of the light and images when the editor is open. This lets us tweak the light and image properties without having to reset the app constantly.

<details>
<summary>Click to view code</summary>

```jsx
import React, { useState, useEffect, useRef } from "react";
import {
  useSyncState,
  useWorld,
  useFields,
  useFile,
  //highlight-next-line
  useEditing,
  DEG2RAD,
  useSignal,
} from "hyperfy";

export default function Destructible() {
  const [opacity, setOpacity] = useState(0);
  const [inRange, setInRange] = useState(false);
  const [intensity, setIntensity] = useState(0);
  const [active, dispatch] = useSyncState((state) => state.active);
  const {
    label,
    lightcolor,
    lightintensity,
    lightscale,
    lightposition,
    lightlifetime,
    enablelight,
    //highlight-next-line
    blastradius,
    //highlight-next-line
    upwardforce,
    giflifetime,
    gifscale,
    model,
    sound,
    gif,
    floorgif,
    gifposition,
  } = useFields();
  const modelUrl = useFile(model);
  const soundUrl = useFile(sound);
  const gifUrl = useFile(gif);
  const floorgifUrl = useFile(floorgif);
  const audioRef = useRef();
  const lightRef = useRef();
  const world = useWorld();
  //highlight-next-line
  const editing = useEditing();
  useSignal("Reset", reset);
  useSignal("Destroy", destroy);

  function reset() {
    dispatch("Reset");
  }

  function destroy() {
    dispatch("Destroy");
  }

  //highlight-start
  function enterRange(e) {
    const localUid = world.getAvatar();
    if (localUid.uid == e) {
      setInRange(true);
    }
  }
  //highlight-end

  //highlight-start
  function leaveRange(e) {
    const localUid = world.getAvatar();
    if (localUid.uid == e) {
      setInRange(false);
    }
  }
  //highlight-end

  useEffect(() => {
    if (!world.isServer) {
      if (!active) {
        world.trigger("Destroy");
        audioRef.current.play();
        setOpacity(1);
        setIntensity(lightintensity);

        //highlight-next-line
        if (inRange) {
          //highlight-next-line
          world.applyUpwardForce(upwardforce);
          //highlight-next-line
        }

        let timeElapsed = 0;
        let fading = true;
        const cleanup = world.onUpdate((delta) => {
          if (fading) {
            timeElapsed += delta * 1000;
            if (timeElapsed >= lightlifetime) {
              setIntensity(0);
              fading = false;
            } else {
              const intensity =
                (1 - timeElapsed / lightlifetime) * lightintensity;
              setIntensity(intensity);
            }
          }
        });

        setTimeout(() => {
          cleanup();
          setIntensity(0);
          setOpacity(0);
        }, giflifetime);
      } else {
        world.trigger("Reset");
        setIntensity(0);
        setOpacity(0);
      }
    }
  }, [active]);

  return (
    <app>
      {active && (
        <>
          //highlight-next-line
          {editing && <box size={blastradius} opacity={0.15} color="red" />}
          <rigidbody type="kinematic">
            <model
              src={modelUrl ?? "barrel.glb"}
              collision="trimesh"
              onPointerDown={destroy}
              onPointerDownHint={label}
            />
          </rigidbody>
        </>
      )}
      //highlight-next-line
      <trigger size={blastradius} onEnter={enterRange} onLeave={leaveRange} />
      <billboard axis="y">
        <image
          src={gifUrl ?? "explosion.gif"}
          scale={gifscale}
          position={[0, gifposition, 0]}
          //highlight-next-line
          opacity={editing ? 1 : opacity}
        />
      </billboard>
      <image
        src={floorgifUrl ?? "explosion-ground.gif"}
        position={[0, 0.05, 0]}
        rotation={[-90 * DEG2RAD, 0, 0]}
        scale={gifscale}
        //highlight-next-line
        opacity={editing ? 1 : opacity}
      />
      <audio src={soundUrl ?? "explosion.mp3"} loop={false} ref={audioRef} />
      {enablelight && (
        <arealight
          ref={lightRef}
          color={lightcolor}
          position={[0, lightposition, 0]}
          //highlight-next-line
          intensity={editing ? lightintensity : intensity}
          depth={lightscale}
          width={lightscale}
        />
      )}
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
      Reset(state) {
        state.active = true;
      },
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },
      {
        type: "section",
        label: "Light",
      },
      {
        type: "switch",
        key: "enablelight",
        label: "Enable Light",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "lightcolor",
        label: "Light Color",
        initial: "orange",
      },
      {
        type: "float",
        key: "lightintensity",
        label: "Light Intensity",
        initial: 1000,
      },
      {
        type: "float",
        key: "lightscale",
        label: "Light Scale",
        initial: 10,
      },
      {
        type: "float",
        key: "lightposition",
        label: "Light Position",
        initial: 10,
      },
      {
        type: "float",
        key: "lightlifetime",
        label: "Light Lifetime",
        initial: 1000,
      },
      {
        type: "section",
        label: "Explosion",
      },
      //highlight-next-line
      { type: "float", key: "blastradius", label: "Blast Radius", initial: 3 },
      //highlight-next-line
      { type: "float", key: "upwardforce", label: "Upward Force", initial: 20 },
      {
        type: "section",
        label: "GIFs",
      },
      {
        type: "float",
        key: "giflifetime",
        label: "Gif Lifetime",
        initial: 4000,
      },
      { type: "float", key: "gifscale", label: "Gif Scale", initial: 4 },
      {
        type: "float",
        key: "gifposition",
        label: "Gif Y Position",
        initial: 2,
      },
      {
        type: "section",
        label: "Files",
      },
      { type: "file", key: "gif", label: "Air Gif", accept: ".gif" },
      { type: "file", key: "floorgif", label: "Floor Gif", accept: ".gif" },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      { type: "file", key: "sound", label: "Sound", accept: ".mp3" },
      {
        type: "section",
        label: "Triggers",
      },
      {
        type: "trigger",
        name: "Destroy",
      },
      {
        type: "trigger",
        name: "Reset",
      },
    ],
  };
}
```

</details>

## Blockchain

The last thing we'll add is NFT armor! This will protect anyone holding a balance of at least 1 of a specified NFT contract. Holders will not be knocked up in the air by the explosion (with an option to disable armor).

We import the `useEth` hook from hyperfy, create a new state variable `balance` to hold a user's balance, hook up a couple new editor fields for the contract and the toggle to disable armor, and call `useEth()` to get an instance of `eth`. By passing in no chain into `useEth()` we get an Ethereum instance.

We cannot call an async function inside useEffect, but we can define an async function inside the effect and call that. We create a `getBalance()` async function inside our effect, which we call whenever the component is initialized or reset. Now we can use the `balance` and conditionally apply the upward force based on it (or ignore balance if the option is set)

<details>
<summary>Click to view code</summary>

```jsx
import React, { useState, useEffect, useRef } from "react";
import {
  useSyncState,
  useWorld,
  useFields,
  useFile,
  useEditing,
  DEG2RAD,
  useSignal,
  //highlight-next-line
  useEth,
} from "hyperfy";

export default function Destructible() {
  const [opacity, setOpacity] = useState(0);
  const [inRange, setInRange] = useState(false);
  //highlight-next-line
  const [balance, setBalance] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [active, dispatch] = useSyncState((state) => state.active);
  const {
    label,
    lightcolor,
    lightintensity,
    lightscale,
    lightposition,
    lightlifetime,
    enablelight,
    //highlight-next-line
    nftarmor,
    //highlight-next-line
    nftarmorcontract,
    blastradius,
    upwardforce,
    giflifetime,
    gifscale,
    model,
    sound,
    gif,
    floorgif,
    gifposition,
  } = useFields();
  const modelUrl = useFile(model);
  const soundUrl = useFile(sound);
  const gifUrl = useFile(gif);
  const floorgifUrl = useFile(floorgif);
  const audioRef = useRef();
  const lightRef = useRef();
  const world = useWorld();
  const editing = useEditing();
  //highlight-next-line
  const eth = useEth();
  useSignal("Reset", reset);
  useSignal("Destroy", destroy);

  function reset() {
    dispatch("Reset");
  }

  function destroy() {
    dispatch("Destroy");
  }

  function enterRange(e) {
    const localUid = world.getAvatar();
    if (localUid.uid == e) {
      setInRange(true);
    }
  }

  function leaveRange(e) {
    const localUid = world.getAvatar();
    if (localUid.uid == e) {
      setInRange(false);
    }
  }

  useEffect(() => {
    //highlight-start
    const getBalance = async () => {
      const chain = await eth.getChain();
      const address = world.getAvatar()?.address;
      if (chain && address) {
        const contract = eth.contract(nftarmorcontract);
        const worlds = await contract.read("balanceOf", address);
        setBalance(worlds);
      } else {
        setBalance(0);
      }
    };
    //highlight-end

    if (!world.isServer) {
      if (!active) {
        world.trigger("Destroy");
        audioRef.current.play();
        setOpacity(1);
        setIntensity(lightintensity);

        //highlight-next-line
        if (inRange && (balance < 1 || !nftarmor)) {
          world.applyUpwardForce(upwardforce);
        }

        let timeElapsed = 0;
        let fading = true;
        const cleanup = world.onUpdate((delta) => {
          if (fading) {
            timeElapsed += delta * 1000;
            if (timeElapsed >= lightlifetime) {
              setIntensity(0);
              fading = false;
            } else {
              const intensity =
                (1 - timeElapsed / lightlifetime) * lightintensity;
              setIntensity(intensity);
            }
          }
        });

        setTimeout(() => {
          cleanup();
          setIntensity(0);
          setOpacity(0);
        }, giflifetime);
      } else {
        //highlight-next-line
        getBalance();
        world.trigger("Reset");
        setIntensity(0);
        setOpacity(0);
      }
    }
  }, [active]);

  return (
    <app>
      {active && (
        <>
          {editing && <box size={blastradius} opacity={0.15} color="red" />}
          <rigidbody type="kinematic">
            <model
              src={modelUrl ?? "barrel.glb"}
              collision="trimesh"
              onPointerDown={destroy}
              onPointerDownHint={label}
            />
          </rigidbody>
        </>
      )}
      <trigger size={blastradius} onEnter={enterRange} onLeave={leaveRange} />
      <billboard axis="y">
        <image
          src={gifUrl ?? "explosion.gif"}
          scale={gifscale}
          position={[0, gifposition, 0]}
          opacity={editing ? 1 : opacity}
        />
      </billboard>
      <image
        src={floorgifUrl ?? "explosion-ground.gif"}
        position={[0, 0.05, 0]}
        rotation={[-90 * DEG2RAD, 0, 0]}
        scale={gifscale}
        opacity={editing ? 1 : opacity}
      />
      <audio src={soundUrl ?? "explosion.mp3"} loop={false} ref={audioRef} />
      {enablelight && (
        <arealight
          ref={lightRef}
          color={lightcolor}
          position={[0, lightposition, 0]}
          intensity={editing ? lightintensity : intensity}
          depth={lightscale}
          width={lightscale}
        />
      )}
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
      Reset(state) {
        state.active = true;
      },
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },
      {
        type: "section",
        label: "Light",
      },
      {
        type: "switch",
        key: "enablelight",
        label: "Enable Light",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "lightcolor",
        label: "Light Color",
        initial: "orange",
      },
      {
        type: "float",
        key: "lightintensity",
        label: "Light Intensity",
        initial: 1000,
      },
      {
        type: "float",
        key: "lightscale",
        label: "Light Scale",
        initial: 10,
      },
      {
        type: "float",
        key: "lightposition",
        label: "Light Position",
        initial: 10,
      },
      {
        type: "float",
        key: "lightlifetime",
        label: "Light Lifetime",
        initial: 1000,
      },
      {
        type: "section",
        label: "Explosion",
      },
      //highlight-start
      {
        type: "switch",
        key: "nftarmor",
        label: "NFT Armor",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "nftarmorcontract",
        label: "NFT Armor Contract",
        initial: "0xf53b18570db14c1e7dbc7dc74538c48d042f1332",
      },
      //highlight-end
      { type: "float", key: "blastradius", label: "Blast Radius", initial: 3 },
      { type: "float", key: "upwardforce", label: "Upward Force", initial: 20 },
      {
        type: "section",
        label: "GIFs",
      },
      {
        type: "float",
        key: "giflifetime",
        label: "Gif Lifetime",
        initial: 4000,
      },
      { type: "float", key: "gifscale", label: "Gif Scale", initial: 4 },
      {
        type: "float",
        key: "gifposition",
        label: "Gif Y Position",
        initial: 2,
      },
      {
        type: "section",
        label: "Files",
      },
      { type: "file", key: "gif", label: "Air Gif", accept: ".gif" },
      { type: "file", key: "floorgif", label: "Floor Gif", accept: ".gif" },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      { type: "file", key: "sound", label: "Sound", accept: ".mp3" },
      {
        type: "section",
        label: "Triggers",
      },
      {
        type: "trigger",
        name: "Destroy",
      },
      {
        type: "trigger",
        name: "Reset",
      },
    ],
  };
}
```

</details>

## Final code

```jsx
import React, { useState, useEffect, useRef } from "react";
import {
  useSyncState,
  useWorld,
  useFields,
  useFile,
  useEditing,
  DEG2RAD,
  useSignal,
  useEth,
} from "hyperfy";

export default function Destructible() {
  const [opacity, setOpacity] = useState(0);
  const [inRange, setInRange] = useState(false);
  const [balance, setBalance] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [active, dispatch] = useSyncState((state) => state.active);
  const {
    label,
    lightcolor,
    lightintensity,
    lightscale,
    lightposition,
    lightlifetime,
    enablelight,
    nftarmor,
    nftarmorcontract,
    blastradius,
    upwardforce,
    giflifetime,
    gifscale,
    model,
    sound,
    gif,
    floorgif,
    gifposition,
  } = useFields();
  const modelUrl = useFile(model);
  const soundUrl = useFile(sound);
  const gifUrl = useFile(gif);
  const floorgifUrl = useFile(floorgif);
  const audioRef = useRef();
  const lightRef = useRef();
  const world = useWorld();
  const editing = useEditing();
  const eth = useEth();
  useSignal("Reset", reset);
  useSignal("Destroy", destroy);

  function reset() {
    dispatch("Reset");
  }

  function destroy() {
    dispatch("Destroy");
  }

  function enterRange(e) {
    const localUid = world.getAvatar();
    if (localUid.uid == e) {
      setInRange(true);
    }
  }

  function leaveRange(e) {
    const localUid = world.getAvatar();
    if (localUid.uid == e) {
      setInRange(false);
    }
  }

  useEffect(() => {
    const getBalance = async () => {
      const chain = await eth.getChain();
      const address = world.getAvatar()?.address;
      if (chain && address) {
        const contract = eth.contract(nftarmorcontract);
        const worlds = await contract.read("balanceOf", address);
        setBalance(worlds);
      } else {
        setBalance(0);
      }
    };

    if (!world.isServer) {
      if (!active) {
        world.trigger("Destroy");
        audioRef.current.play();
        setOpacity(1);
        setIntensity(lightintensity);

        if (inRange && (balance < 1 || !nftarmor)) {
          world.applyUpwardForce(upwardforce);
        }

        let timeElapsed = 0;
        let fading = true;
        const cleanup = world.onUpdate((delta) => {
          if (fading) {
            timeElapsed += delta * 1000;
            if (timeElapsed >= lightlifetime) {
              setIntensity(0);
              fading = false;
            } else {
              const intensity =
                (1 - timeElapsed / lightlifetime) * lightintensity;
              setIntensity(intensity);
            }
          }
        });

        setTimeout(() => {
          cleanup();
          setIntensity(0);
          setOpacity(0);
        }, giflifetime);
      } else {
        getBalance();
        world.trigger("Reset");
        setIntensity(0);
        setOpacity(0);
      }
    }
  }, [active]);

  return (
    <app>
      {active && (
        <>
          {editing && <box size={blastradius} opacity={0.15} color="red" />}
          <rigidbody type="kinematic">
            <model
              src={modelUrl ?? "barrel.glb"}
              collision="trimesh"
              onPointerDown={destroy}
              onPointerDownHint={label}
            />
          </rigidbody>
        </>
      )}
      <trigger size={blastradius} onEnter={enterRange} onLeave={leaveRange} />
      <billboard axis="y">
        <image
          src={gifUrl ?? "explosion.gif"}
          scale={gifscale}
          position={[0, gifposition, 0]}
          opacity={editing ? 1 : opacity}
        />
      </billboard>
      <image
        src={floorgifUrl ?? "explosion-ground.gif"}
        position={[0, 0.05, 0]}
        rotation={[-90 * DEG2RAD, 0, 0]}
        scale={gifscale}
        opacity={editing ? 1 : opacity}
      />
      <audio src={soundUrl ?? "explosion.mp3"} loop={false} ref={audioRef} />
      {enablelight && (
        <arealight
          ref={lightRef}
          color={lightcolor}
          position={[0, lightposition, 0]}
          intensity={editing ? lightintensity : intensity}
          depth={lightscale}
          width={lightscale}
        />
      )}
    </app>
  );
}

export function getStore(state = { active: true }) {
  return {
    state,
    actions: {
      Destroy(state) {
        state.active = false;
      },
      Reset(state) {
        state.active = true;
      },
    },
    fields: [
      { type: "text", key: "label", label: "Hover label", initial: "Explode" },
      {
        type: "section",
        label: "Light",
      },
      {
        type: "switch",
        key: "enablelight",
        label: "Enable Light",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "lightcolor",
        label: "Light Color",
        initial: "orange",
      },
      {
        type: "float",
        key: "lightintensity",
        label: "Light Intensity",
        initial: 1000,
      },
      {
        type: "float",
        key: "lightscale",
        label: "Light Scale",
        initial: 10,
      },
      {
        type: "float",
        key: "lightposition",
        label: "Light Position",
        initial: 10,
      },
      {
        type: "float",
        key: "lightlifetime",
        label: "Light Lifetime",
        initial: 1000,
      },
      {
        type: "section",
        label: "Explosion",
      },
      {
        type: "switch",
        key: "nftarmor",
        label: "NFT Armor",
        options: [
          { label: "true", value: true },
          { label: "false", value: false },
        ],
        initial: true,
      },
      {
        type: "text",
        key: "nftarmorcontract",
        label: "NFT Armor Contract",
        initial: "0xf53b18570db14c1e7dbc7dc74538c48d042f1332",
      },
      { type: "float", key: "blastradius", label: "Blast Radius", initial: 3 },
      { type: "float", key: "upwardforce", label: "Upward Force", initial: 20 },
      {
        type: "section",
        label: "GIFs",
      },
      {
        type: "float",
        key: "giflifetime",
        label: "Gif Lifetime",
        initial: 4000,
      },
      { type: "float", key: "gifscale", label: "Gif Scale", initial: 4 },
      {
        type: "float",
        key: "gifposition",
        label: "Gif Y Position",
        initial: 2,
      },
      {
        type: "section",
        label: "Files",
      },
      { type: "file", key: "gif", label: "Air Gif", accept: ".gif" },
      { type: "file", key: "floorgif", label: "Floor Gif", accept: ".gif" },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      { type: "file", key: "sound", label: "Sound", accept: ".mp3" },
      {
        type: "section",
        label: "Triggers",
      },
      {
        type: "trigger",
        name: "Destroy",
      },
      {
        type: "trigger",
        name: "Reset",
      },
    ],
  };
}
```
