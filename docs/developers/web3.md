---
sidebar_position: 30
---

# Web3

<iframe width="560" height="315" src="https://www.youtube.com/embed/gzSIk9vKsPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Developers have the ability to build crypto enabled experiences right into their world. The `useEth()` hook makes it super easy to interact with the blockchain and dApps right inside your virtual world.

Supported networks: `ethereum`, `optimism`, `arbitrum`, `polygon`, `goerli`

The following example demonstrates this functionality using simple cubes that you can click on:

- The `white` cube will fetch the number of NFTs owned by the user.
- The `blue` cube will mint an NFT on the same contract and wait for it to be confirmed on the chain.
- The `red` cube will get the user to sign a message with their wallet.
- The `green` cube will request the user to make a payment.

```jsx
import React, { useMemo, useState } from "react";
// highlight-next-line
import { useEth } from "hyperfy";

const CONTRACT = "0x000...";
const MINT_PRICE = "0.06";
const PAYEE = "0x000...";

export function EthCubes() {
// highlight-next-line
  const eth = useEth(); // defaults to ethereum network
// highlight-next-line
  const contract = useMemo(() => eth.contract(CONTRACT), []);
  const [status, setStatus] = useState(null);

  async function getBalance(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Checking...");
// highlight-next-line
    const balance = await contract.read("balanceOf", address);
    setStatus(`Balance: ${balance}`);
  }

  async function mint(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Please confirm transaction");
// highlight-start
    const tx = await contract.write("mint", 1, {
      value: eth.toWei(MINT_PRICE),
    });
// highlight-end
    setStatus("Verifying...");
    await tx.wait();
    setStatus("Minted!");
  }

  async function sign(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Please sign message");
// highlight-next-line
    const signature = await eth.sign("Howdy!");
    setStatus("Signed!");
  }

  async function pay(e) {
    const { address } = e.avatar;
    if (!address) return setStatus("Not connected!");
    setStatus("Please confirm payment");
// highlight-next-line
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

Learn more in the [useEth()](/docs/developers/hooks/use-eth) API reference.
