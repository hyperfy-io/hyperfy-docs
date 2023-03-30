---
sidebar_position: 20
---

# `<tonemapping>`

Used to change the tone mapping value of the world.

By default worlds use ACES Filmic tonemapping which works well in the majority of use cases. In some cases you may want to change this.

## Props

| Prop  | Type   | Description                                                    | Default |
| ----- | ------ | -------------------------------------------------------------- | ------- |
| value | String | Allowed values: `none`, `linear`, `reinhard`, `cineon`, `aces` | `aces`  |
