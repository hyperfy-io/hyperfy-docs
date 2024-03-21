---
sidebar_label: "Guide: Destructibles"
sidebar_position: 85
---

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
    dispatch("reset");
  }

  function destroy() {
    dispatch("destroy");
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
      if (chain) {
        const address = world.getAvatar().address;
        const contract = eth.contract(SECRETS.contract);
        const worlds = await contract.read("balanceOf", address);
        setBalance(worlds);
      } else {
        setBalance(0);
      }
    };

    if (!world.isServer) {
      if (!active) {
        world.trigger("destroy");
        audioRef.current.play();
        setOpacity(1);

        if (enablelight) {
          setIntensity(lightintensity);
        }

        if (inRange && balance < 1) {
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
          setOpacity(0);
        }, giflifetime);
      } else {
        getBalance();
        setIntensity(0);
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
              onPointerDownHint={label}
              onPointerDown={destroy}
            />
          </rigidbody>
          <trigger
            size={blastradius}
            onEnter={enterRange}
            onLeave={leaveRange}
          />
        </>
      )}
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
      destroy(state) {
        state.active = false;
      },
      reset(state) {
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
        name: "destroy",
      },
    ],
  };
}
```
