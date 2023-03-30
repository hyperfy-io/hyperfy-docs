---
sidebar_position: 20
---

# Quick Start

The easiest way to get started is by initializing a new project using `npx`:

```bash
npx hyperfy create <project>
```

This will create a project with a demo environment to get you started.

Launch the development server:

```bash
cd <project>
npm install
npm run dev
```

Visit `http://localhost:4000` in your browser.

You now have a fully functional space running locally on your machine!

Open `components/meadow/index.js` and change `NUM_OBJECTS` to another value and hit save. The browser will reload and show your changes. Play around with the `seed` value to get objects to spawn in different formations or try adding your own GLTF models to the environment.

To test multiplayer, open the space in multiple browser tabs. Each tab will automatially use a unique guest account.


