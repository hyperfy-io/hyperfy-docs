# Tools

## Keypad

### Overview

The Keypad app allows players to enter a numeric combination to activate specific in-world actions. The app has 4 possible combination triggers. This is typically activated with a [Smart Object](/fdEdx1aFQ9a1nDlNa54tkw/view#Smart-Object).

![Keypad](https://hackmd.io/_uploads/SyYHPdk0p.jpg)

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: Custom name for the keypad.

#### Code

For all codes that have `Enabled` set to `Yes`

- **Code**: The code that must be entered by the player to trigger an action.
- **On Success**: The action that gets triggered when the code is entered correctly by the player.

## Camera

### Overview

The Camera app allows you to place a camera in-world that can be triggered by players.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: Custom name for the camera.
- **Keybind**: The key combination that a player needs to use to activate the camera.
- **Distortion**: `Yes` to enable fisheye camera lens, `No` to maintain regular camera.

## Coords

### Overview

The Coords app displays coordinates in the browser bar and share links to exact locations within a world.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.

## Command

### Overview

The Commands App allows you to associate `/` commands sent by players in the world chat with actions that happen in-world.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Name**: Custom name used for the `/` command.
- **On Use**: The action that gets triggered when a player uses the command in the world chat.
- **Active**: Allows you to select when the `/` command usage is enabled.

## Discord

### Overview

The Discord app allows you to recieve world chat and event notifications in your own Discord servers using Discord webhooks. Learn more about Discord webhooks [here](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Webhook**: The server/channel webhook URL.
- **Chat**: `Yes` to send world chat messages via webhook `No` to bypass.
- **Events**: `Yes` to send event messages via webhook `No` to bypass.

## Alert

### Overview

The Alert app allows you to display a text alert on a player's local screen when triggered.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Text**: Text to display on alert.
- **Size**: Font size for alert text.
- **Color**: The color of the alert text using hexadecimal value. This parameter has a color selector.
- **Duration**: The time in seconds that the alert text is displayed for.

## Power-up

### Overview

The Power-up app allows you to dynamically adjust move speed, jump force and fly speed of a player.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Name**: Custom name for the power-up.
- **Duration (s)**: The length of time the power-up is applied to the player.
- **Group**: Group multiple power-ups. If there's no group set then all power-ups people get will stacked. If there is a group set, then only the highest value for each power-up will apply. 🟠

#### Move Speed

- **Modify**: `Yes` to enable adjustment in move speed when power-up is triggered, `No` to bypass modification.
- **Amount (%)**: The value of the modificiation applied to move speed.

#### Jump Force

- **Modify**: `Yes` to enable adjustment in jump force when power-up is triggered, `No` to bypass modification.
- **Amount (%)**: The value of the modificiation applied to jump force.

#### Fly Speed

- **Modify**: `Yes` to enable adjustment in fly speed when power-up is triggered, `No` to bypass modification.
- **Amount (%)**: The value of the modificiation applied to fly speed.

## Guestbook

### Overview

The Guestbook app enables the creation of a digital address book for logged-in users who sign with their wallets, allowing for the download of this data later. This is typically activated with a [Smart Object](/fdEdx1aFQ9a1nDlNa54tkw/view#Smart-Object).

![Guestbook1](https://hackmd.io/_uploads/Hyv2tdkCp.jpg)

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Event ID**: A unique ID that can be set to store signatures related to specific events.
- **On Sign**: The action to take when a user signs the guestbook.
- **On No Wallet**: The action to take when a user attempts to sign the guestbook but is not connected to Hyperfy with a wallet.
- **On Sign**: The action to take when a user attempts to sign the guestlist after having previously signed it.

## Place

### Overview

The Place app allows you to specify a specific location in-world.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Name**: Custom name for the place.

## Spawn

### Overview

The Spawn app allows you to specify a spawn point for players.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
