# Misc

## Pay

### Overview

The Pay app allows players to pay an EVM wallet address a given quantity of ETH.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Network**: The network to use for payment.
- **Address**: The payment recipient wallet address. This should be provided as a hexadecimal string.
- **Amount**: The amount paid in ETH.

#### Button

- **Button Text**: Text to display on the payment button.
- **Button Hint**: The highlight text to display when a user interacts with the button.
- **Color**: The color of the button text using hexadecimal value. This parameter has a color selector.
- **Background**: The color of the button using hexadecimal value. This parameter has a color selector.
- **Size**: The size of the button.

#### Triggers

- **On Paid**: The action to take when a payment takes place.

## VR Effects

### Overview

The VR Effects app allows you to set custom player effects for climbing and gliding for players using VR headsets.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Climbing**: `Yes` enables climbing of meshes with collision enabled, `No` bypasses it.
- **Gliding**: `Yes` enables gliding, `No` bypasses it.

## Basic Emotes

### Overview

The Basic Emotes app supplies users with a set of basic emotes that can be triggered with `/` commands in the world chat. These include:

- `/dance`
- `/dance2`
- `/wave`
- `/sit`
- `/clap`
- `/cheer`
- `/stretch`
- `/pray`

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.

## Minter

### Overview

The Minter app allows players to mint NFTs in world directly from contract.

### Configuration Parameters

#### General

- **Position**: The `X`, `Y`, `Z` values for the world position of the app.
- **Rotation**: The `X`, `Y`, `Z` values for the world rotation of the app.
- **Type**: `Single` Allows for the minting of a single NFT at a time, `Multi` enables the minting of multiple NFTs in one transaction.
- **Network**: Specifies the chain that the NFT will be minted on.
- **Contract**: The address of the smart contract on the blockchain that will be used to mint the NFTs. This should be provided as a hexadecimal string.
- **Function**: Defines the function to be called on the smart contract for minting, typically "mint" for most contracts.
- **ABI**: The Application Binary Interface of the contract, required for interacting with smart contracts that act as proxies or have complex interactions.
- **Token ID**: Specifies the ID of the token to be minted, applicable only for ERC1155 tokens that support the minting of multiple unique assets under a single contract address.

#### Appearance

- **Button Text**: Text to display on the minter button.
- **Text Color**: The color of the text on the minter button.
- **Background Color**: The color of the minter button.

#### Triggers

- **On Minted**: The action to take once an NFT has been minted.
