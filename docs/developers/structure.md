---
sidebar_position: 30
---

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

Everything added to a world in Hyperfy is an App. It is up to you if you want to create one giant app that holds your entire space or create many little apps that you can compose together and easily make changes in your live world using the editor.

To create another app it's easiest to just duplicate an existing one and edit the `app.json` to give it a new id and title etc. We have created a Github repository containing a collection of [Hyperfy Recipes](https://github.com/hyperfy-io/hyperfy-recipes) demonstrating how to build different apps using the Hyperfy SDK to get you started.

## Assets

All finalized models, sounds, videos or images you reference in your app should be placed in the `assets` folder. These files will be uploaded along with your code.

## Sources

You should store any raw source files like `.blend` and `.psd` in the `src` folder. These files won't be uploaded to Hyperfy but are useful if you want to use `git` and `git-lfs` to version control or share your project with others.

## Scripts

Each app requires a single `index.js` entrypoint. From there you can import any other js files in the app folder including other npm packages you have installed. 

Your scripts run on both the server and on each client's browser independently. The server is not a central authority and doesn't automatically synchronize script data between clients. The `hyperfy` package provides utilities for synchronizing data, accessing secrets on the server, and running server-only or client-only code. It also provides a bunch of useful utilities out of the box including `Vector3`, `DEG2RAD`, `tween`, etc. See the API Reference for more info.

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

It's important to choose a unique ID for your project, eg by prefixing it with your name or company. It may only contain lowercase alphanumeric characters and hyphens.

:::
