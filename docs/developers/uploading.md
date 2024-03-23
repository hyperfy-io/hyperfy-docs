---
sidebar_position: 80
---

# Uploading

Once you're happy with your app and want to use them in your actual world, you can upload them to Hyperfy with a single command.

## Checklist

1. Test your app to make sure it runs well on mobile, desktop and VR devices.
2. Make sure your `app.json` file has the correct metadata that you want.
3. Ensure any files you don't need uploaded are in your `src` folder, not your `assets` folder.

## Upload to Hyperfy

Ensure you are connected to Hyperfy. This will open a hyperfy web page, if you are already connected it will tell you to close your browser window, otherwise it will ask you to connect with WalletConnect or MetaMask:

```bash
npm run connect
```

Now build and upload your app, replacing `<id>` with the ID you specified in your `app.json` file:

```bash
npm run upload <id>
```

Once complete you can go to your live world, hit `Tab` to open the editor, click `Add` and switch to the `Uploads` tab where your uploaded apps will be shown.
