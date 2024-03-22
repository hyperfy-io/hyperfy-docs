# Combat

## Combat Melee

### Overview

The Combat Melee App enables the creation of interactive combat systems, focusing on melee attacks with customizable hitboxes and effects.

![Alt text](combat1.png)

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: Custom name for melee item.
- **Model**: Allows you to upload a `.glb` model for your melee item.
- **Hand**: Select whether the melee item is appended to the `Left` or `Right` hand bone.
- **Position**: The position of the melee item in relation to the selected hand.
- **Rotation**: The rotation of the melee item in relation to the selected hand.

#### Hitbox

- **Size**: Defines the dimensions of the hitbox to detect hits.
- **Position**: Sets the position of the hitbox relative to the melee item.
- **Rotation**: Adjusts the rotation of the hitbox.
- **Active Delay**: Delays activation of the hitbox after an attack is initiated (seconds).
- **Active Time**: Duration the hitbox remains active to register hits.

#### Effect

- **Emote**: Allows you to upload a `.glb` animation that plays when a player uses the melee item.
- **Sound**: Allows you to upload a `.mp3` audio file that plays when a player uses the melee item.
- **Min Damage**: The minimum damage inflicted by the melee item.
- **Max Damage**: The maximum damage inflicted by the melee item.
- **Crit %**: Chance to inflict a critical hit.
- **Crit Multiplier**: Damage multiplier for critical hits.
- **Cooldown**: Time before the attack can be used again.

## Combat Health

### Overview

The Combat Health App enables health regeneration for player combat.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: Custom name for health system.
- **HP**: The amount of player HP that gets restored when the health system is triggered.
- **On Dead**: The action to take when a player's health reaches = 0.

## Combat Mod

### Overview

The Combat Mod App allows you to trigger dynamic player damage or healing.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Label**: Custom name for the mod system.
- **Type**: `Heal` to trigger player healing, `Damage` to trigger player damage.
- **Amount**: The quantity of HP restored for `Heal` and inflicted for `Damage`.
- **Timing**:`Instant` applies the HP change immediately, `Tick Based` spreads the HP change over a period.

If `Tick Based` is selected:

- **Tick Delay**: Sets the time interval, in seconds, between each HP change.
- **Num Ticks**: Determines how many times the HP change occurs.
