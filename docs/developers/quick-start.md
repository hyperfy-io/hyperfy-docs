---
sidebar_position: 20
---

# Quick Start

To get started you'll need [NodeJS](https://nodejs.org/en) + [Npm/Yarn](https://classic.yarnpkg.com/lang/en/docs/install/). We recommend using NodeJS `v16.14.2` as this is the version we build and test with. If you are on a Windows operating system you may have trouble install/deploying without having [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux 1 or 2) installed on your machine. A utility like [nvm](https://github.com/nvm-sh/nvm) allows you to quickly switch between different versions of node.

The easiest way to get started with the SDK is by initializing a new project using `npx`:

```bash
npx hyperfy create quickstart
```

This will create a directory containing the project with a demo app to get you started.

Navigate into the directory and launch the world:

```bash
cd quickstart
npm install
npm run dev
```

Visit `http://localhost:4000` in your browser. You should now be standing in a virtual world running locally on your machine!

Hit `Tab` to open the editor.

Your project comes with a demo app called `Treasure Chest` that you can add to the world. When you walk up to it and click on it, it opens.

Open `apps/treasure-chest/index.js` and change the `OPEN_CLOSE_SPEED` value from `0.5` to `2` and hit save. Your app will be updated and you'll see that the treasure chest now animates slower when opening/closing.

To test multiplayer, just open multiple browser tabs. Each tab will automatially be assigned its own guest account.
