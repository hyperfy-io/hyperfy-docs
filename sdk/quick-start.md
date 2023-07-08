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

Open `apps/treasure-chest/index.js` and change the `OPEN_CLOSE_SPEED` value from `0.5` to `2` and hit save. Your browser will reload with your changes and you'll see that the treasure chest now animates slower when opening/closing.

To test multiplayer, just open multiple browser tabs. Each tab will automatically be assigned its own guest account.
