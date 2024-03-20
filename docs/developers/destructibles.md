---
sidebar_label: "Guide: Destructibles"
sidebar_position: 85
---

```jsx
import React, { useState, useEffect, useRef } from "react";
import { useSyncState, useWorld, useFields, useFile, useEditing } from "hyperfy";

export default function Destructible() {
  const [opacity, setOpacity] = useState(0);  
  const [inRange, setInRange] = useState(false);  
  const [active, dispatch] = useSyncState((state) => state.active);
  const { blastradius, upwardforce, giflifetime, gifscale, model, sound, gif, gifposition } = useFields();
  const modelUrl = useFile(model);
  const soundUrl = useFile(sound);
  const gifUrl = useFile(gif);
  const audioRef = useRef();
  const world = useWorld();
  const editing = useEditing();

  useEffect(() => {
    if (!active) {
      audioRef.current.play();
      setOpacity(1);

      if (inRange) {
        world.applyUpwardForce(upwardforce);
      }

      setTimeout(() => {
        setOpacity(0);
      }, giflifetime);
    }
  }, [active]);

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

  return (  
    <app>
      {
        editing &&
        <box size={blastradius} opacity={0.15} color="orange" />
      }
      {
        active &&
        <rigidbody type="kinematic">
          <model 
            src={modelUrl ?? "barrel.glb"}
            collision="trimesh" 
            onPointerDownHint="destroy" 
            onPointerDown={destroy}
          />
        </rigidbody>
      }
      <billboard>
        <image 
          src={gifUrl ?? "explosion.gif"} 
          scale={gifscale} 
          position={[0,gifposition,0]} 
          opacity={opacity}
        />
      </billboard>
      <audio 
        src={soundUrl ?? "explosion.mp3" }
        loop={false} 
        ref={audioRef} 
      />
      <trigger 
        size={blastradius} 
        onEnter={enterRange} 
        onLeave={leaveRange} 
      />
    </app>
  )
}

export function getStore(state = {active: true}) {
  return {
    state,
    actions: {
      destroy(state) {
        state.active = false;
      },
    },
    fields: [
      { type: "float", key: "blastradius", label: "Blast Radius", initial: 3 },
      { type: "float", key: "upwardforce", label: "Upward Force", initial: 20 },
      { type: "float", key: "giflifetime", label: "Gif Lifetime", initial: 4000 },
      { type: "float", key: "gifscale", label: "Gif Scale", initial: 4 },
      { type: "float", key: "gifposition", label: "Gif Y Position", initial: 2 },
      { type: "file", key: "gif", label: "Gif Animation", accept: ".gif" },
      { type: "file", key: "model", label: "Model", accept: ".glb" },
      { type: "file", key: "sound", label: "Sound", accept: ".mp3" },
    ],
  };
}
```