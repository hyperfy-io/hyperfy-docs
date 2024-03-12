---
sidebar_position: 20
---

# Quick Start

To get started you'll need NodeJS + Npm/Yarn. We recommend using NodeJS `v16.14.2` as this is the version we build and test with. A utility like [nvm](https://github.com/nvm-sh/nvm) allows you to quickly switch between different versions of node.

The easiest way to get started with the SDK is by initializing a new project using `npx`:

```bash
npx hyperfy create <project>
```

This will create a project with a demo app to get you started.

Launch the world:

```bash
cd <project>
npm install
npm run dev
```

Visit `http://localhost:4000` in your browser. You should now be standing in a virtual world running locally on your machine!

Hit `Tab` to open the editor.

Your project comes with a demo app called `Treasure Chest` that you can add to the world. When you walk up to it and click on it, it opens.

Open `apps/treasure-chest/index.js` and change the `OPEN_CLOSE_SPEED` value from `0.5` to `2` and hit save. Your app will be updated and you'll see that the treasure chest now animates slower when opening/closing.

To test multiplayer, just open multiple browser tabs. Each tab will automatially be assigned its own guest account.


# Structure

Once you've created a new project it will look something like this:

```
my-project/
├─ apps/
│  ├─ treasure-chest/
│  │  ├─ assets/           models, images, audio, etc
|  |  |- src/              raw assets eg .blend
│  │  ├─ app.json          app metadata
│  │  ├─ secrets.json      app server-side secrets
│  │  ├─ index.js          script entrypoint
```

## Apps

Each app lives inside its own folder inside the `/apps` directory. They will be built when code is changed and in the browser you can bring them into the world to test from the editor, opened with the `Tab` key.

To create another app it's easiest to just duplicate an existing one and edit the `app.json` to give it a new id and title etc.

Everything added to a world in Hyperfy is an App. It is up to you if you want to create one giant app that holds your entire space or create many little apps that you can compose together and easily make changes in your live world using the editor.

## Assets

All finalized models, sounds, videos or images you reference in your app should be placed in the `assets` folder. These files will be uploaded along with your code.

## Sources

You should store any raw source files like `.blend` and `.psd` in the `src` folder. These files won't be uploaded to Hyperfy but are useful if you want to use `git` and `git-lfs` to version control or share your project with others.

## Scripts

Each app requires a single `index.js` entrypoint. From there you can import any other js files in the app folder including other npm packages you have installed. Keep in mind that the `hyperfy` package already provides a bunch of useful utilities out of the box including `Vector3`, `DEG2RAD`, `tween`, etc. See the API Reference for more info.

## Metadata

The `app.json` file describes the app and its metadata.

```json title='app.json'
{
  "id": "fridge",
  "name": "Fridge",
  "description": "A fridge that opens and closes",
  "image": "image.png"
}
```

:::caution

It's important to choose a unique ID for your project, eg by prefixing it with your name or company.

:::


# React

Apps in Hyperfy are built using the declarative power of React – But – instead of rendering to the DOM your app is being rendered into an automatic multiplayer virtual world. Instead of using DOM elements like `<div>` and `<p>` you have access to powerful new elements such as `<model>` and `<rigidbody>`.

Everything else is Just React™, with full access to component based design, hooks, context and the entire React and Javascript ecosystem.

Your apps `index.js` file should export a default React component that will be used as the entry point for your app.

The following is a simple app that displays a large field of grass:

```jsx
import React from "react";

export default function Grass() {
  return (
    <app>
      <rigidbody>
        <box size={[100, 0.1, 100]} color="green" />
      </rigidbody>
    </app>
  );
}
```

## Performance

Thanks to React, Hyperfy is able to take full advantage of a virtual dom and only update things that need updating. On top of this, React can schedule complex tasks to happen later at a more optimal time. This is something no other engine can compete with.

One thing we **must** be careful with, is identifying when to jump into imperative code.

A perfect example of this is when animating objects each frame. Instead of thrashing React with state updates, it's best to do this _outside_ of react state:

<details>
<summary>Click to show code</summary>

```jsx
import React, { useRef, useEffect } from 'react'
import { useWorld, Vector3 } from 'hyperfy'

function MovingBox() {
  const ref = useRef()
  const world = useWorld()

  useEffect(() => {
    const box = ref.current
    const position = new Vector3()
    return world.onUpdate(delta => {
      position.y += delta
      box.setPosition(position)
    })
  }, [])

  return (
    <box ref={ref}>
  )
}
```
</details>

# Sync State

While you are free to use React's `useState` hooks in order to change things only for the current avatar, it's likely you'll want to have some or all of your state synchronized with all clients connected to the world so that everyone sees the same thing.

To do this, export a `getStore` function and then use the `useSyncState` hook to read and write to the distributed store.

The following example shows a cube that changes color when anyone clicks on it. The color change is observed by **everyone** in the world:

<details>
<summary>Click to show code</summary>

```jsx
import React from "react";
import { useSyncState } from "hyperfy";

export default function ColorCube() {
  const [color, dispatch] = useSyncState((state) => state.color);
  return (
    <app>
      <box color={color} onPointerDown={() => dispatch("toggle")} />
    </app>
  );
}

const initialState = {
  color: "blue",
};

export function getStore(state = initialState) {
  return {
    state,
    actions: {
      toggle(state) {
        state.color = state.color === "blue" ? "red" : "blue";
      },
    },
  };
}
```
</details>

Synchronized state is inspired by the flux/redux pattern popular on the web, but instead of dispatching events locally they are distributed across all clients and the server.

While it may take a second to get used to we've found that this flow is far more efficient and superior to what most platforms do by syncing the component changes of every entity in the space each time they change. This is the ultimate flex for declarative programming that other 3D engines don't have access to.

# Secrets

Apps run on both the server and client which can be an issue if you want to do something securely like submit high scores or reward players.

To solve this, we allow you to bundle secrets with your app, and those variables will only be available from the code that runs on the server.

Secrets can be used to store private API URL's, API tokens etc.

## Using Secrets

To use secrets in your app, simply add a `secrets.json` file to your app folder, populated with things you only want to access on the server:

```json
{
  "apiKey": "2k3jh5k3jh4..."
}
```

You can then access them directly in your app code, and they will only be available on the server side:

```jsx
import React from "react";

export default function App() {
  useEffect(() => {
    console.log("API Key: ", SECRETS.apiKey);
  }, []);
  return <app />;
}
```


# Web3

<iframe width="560" height="315" src="https://www.youtube.com/embed/gzSIk9vKsPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Developers have the ability to build crypto enabled experiences right into their world. The `useEth()` hook makes it super easy to interact with the blockchain and dApps right inside your virtual world.

Supported networks: `ethereum`, `optimism`, `arbitrum`, `polygon`, `goerli`

The following example demonstrates this functionality using simple cubes that you can click on:

- The `white` cube will fetch the number of NFTs owned by the user.
- The `blue` cube will mint an NFT on the same contract and wait for it to be confirmed on the chain.
- The `red` cube will get the user to sign a message with their wallet.
- The `green` cube will request the user to make a payment.

<details>
<summary>Click to show code</summary>

```jsx
import React, { useMemo, useState } from "react";
import { useEth } from "hyperfy";

const CONTRACT = "0x000...";
const MINT_PRICE = "0.06";
const PAYEE = "0x000...";

export function EthCubes() {
  const eth = useEth(); // defaults to ethereum network
  const contract = useMemo(() => eth.contract(CONTRACT), []);
  const [status, setStatus] = useState(null);

  async function getBalance(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Checking...");
    const balance = await contract.read("balanceOf", address);
    setStatus(`Balance: ${balance}`);
  }

  async function mint(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Please confirm transaction");
    const tx = await contract.write("mint", 1, {
      value: eth.toWei(MINT_PRICE),
    });
    setStatus("Verifying...");
    await tx.wait();
    setStatus("Minted!");
  }

  async function sign(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Please sign message");
    const signature = await eth.sign("Howdy!");
    setStatus("Signed!");
  }

  async function pay(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Please confirm payment");
    const tx = await eth.pay(PAYEE, eth.toWei("0.01"));
    setStatus("Verifying...");
    await tx.wait();
    setStatus("Paid!");
  }

  return (
    <>
      {status && <text color="white" value={status} position={[0, 1.5, 0]} />}
      <box
        color="white"
        size={0.5}
        position={[-0.9, 1, 0]}
        onPointerDown={getBalance}
      />
      <box
        color="blue"
        size={0.5}
        position={[-0.3, 1, 0]}
        onPointerDown={mint}
      />
      <box color="red" size={0.5} position={[0.3, 1, 0]} onPointerDown={sign} />
      <box
        color="green"
        size={0.5}
        position={[0.9, 1, 0]}
        onPointerDown={pay}
      />
    </>
  );
}
```
</details>

Learn more in the [useEth()](/developers/hooks/use-eth) API reference.

# Uploading

Once you're happy with your app and want to use them in your actual world, you can upload them to Hyperfy with a single command.

## Checklist

1. Test your app to make sure it runs well on mobile, desktop and VR devices.
2. Make sure your `app.json` file has the correct metadata that you want.
3. Ensure any files you don't need uploaded are in your `src` folder, not your `assets` folder.

## Upload to Hyperfy

Ensure you are connected to Hyperfy:

```bash
npm run connect
```

Now build and upload each app using the ID you specified in each `app.json` file:

```bash
npm run upload <id>
```

Once complete you can go to your live world, hit `Tab` to open the editor, click `Add` and switch to the `Uploads` tab where your uploaded apps will be shown.
