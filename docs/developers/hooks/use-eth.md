# `useEth()`

A utility hook for requesting payment or reading and writing to a contract on the blockchain.

**useEth(chainName)**

Returns an instance of `Eth`

`chainName` can be one of `ethereum`, `optimism`, `arbitrum`, `polygon` or `goerli`. If none specified, defaults to `ethereum`.

**Eth.getChain()**

Returns info about the chain the current user is connected to, or null if they are not connected.

This is useful to check that the user is connected to the correct network before calling a contract or making a payment.

**Eth.sign(message)**

Returns a `Promise` that resolves with the signature `String` once the user signs using their wallet.

```jsx
import React from "react";
//highlight-next-line
import { useEth } from "hyperfy";

export default function App() {
  //highlight-next-line
  const eth = useEth();
  async function signEth() {
    //highlight-next-line
    const chainInfo = await eth.getChain();
    if (chainInfo) {
      console.log(chainInfo);
      //highlight-next-line
      const signature = await eth.sign("Howdy Ethereum!");
      console.log(signature);
    }
  }

  //highlight-next-line
  const op = useEth("optimism");
  async function signOp() {
    //highlight-next-line
    const chainInfo = await op.getChain();
    if (chainInfo) {
      console.log(chainInfo);
      //highlight-next-line
      const signature = await op.sign("Howdy Optimism!");
      console.log(signature);
    }
  }

  return (
    <app>
      <text
        color="white"
        position={[0, 0, 0]}
        value="Sign Ethereum"
        onPointerDown={signEth}
      />
      <text
        color="white"
        position={[2, 0, 0]}
        value="Sign Optimism"
        onPointerDown={signOp}
      />
    </app>
  );
}
```

**Eth.pay(address, amountInWei)**

Requests the user to make a payment to an address.

Returns a `Promise` that resolves with a `Transaction` instance.

**Eth.toWei(amountInEth)**

Converts an eth string to wei. Returns a `String`.

```jsx
import React from "react";
//highlight-next-line
import { useEth } from "hyperfy";

const WALLET = "0xf53b18570db14c1e7dbc7dc74538c48d042f1332"; //Hyperfy worlds contract
const ETH_AMOUNT = "0.69";

export default function App() {
  //highlight-next-line
  const eth = useEth();

  async function payEth() {
    if (await eth.getChain()) {
      //highlight-next-line
      const amount = eth.toWei(ETH_AMOUNT);
      //highlight-next-line
      const tx = await eth.pay(WALLET, amount);
      //highlight-next-line
      await tx.wait();
    }
  }

  return (
    <app>
      <text
        color="white"
        position={[0, 0, 0]}
        value="Pay Hyperfy"
        onPointerDown={payEth}
      />
    </app>
  );
}
```

**Eth.contract(address[, abi])**

Returns an instance of `Contract` for the specified address.

If no ABI is specified we will automatically load it for you. Providing your own ABI is useful to improve speed or when the ABI can't be loaded automatically.

**Contract.read(method, ...args)**

Returns a `Promise` that resolves with the result of the read method.

**Contract.write(method, ...args)**

Returns a `Promise` that resolves with a `Transaction`

**Transaction.wait()**

Returns a `Promise` that resolves once the transaction is confirmed on the blockchain.

```jsx
import React, { useMemo } from "react";
//highlight-next-line
import { useEth } from "hyperfy";

const WALLET = "0xf53b18570db14c1e7dbc7dc74538c48d042f1332"; //Hyperfy worlds contract
const MINT_PRICE = "0.06";

export default function App() {
  //highlight-next-line
  const eth = useEth();
  //highlight-next-line
  const contract = useMemo(() => eth.contract(WALLET), []);

  async function getBalance() {
    if (await eth.getChain()) {
      //highlight-next-line
      const balance = await contract.read("balanceOf");
      console(`Balance: ${balance}`);
    }
  }

  async function mintWorld() {
    if (await eth.getChain()) {
      //highlight-next-line
      const tx = await contract.write("mint", 1, {
        value: eth.toWei(MINT_PRICE),
      });
      console.log("Verifying...");
      //highlight-next-line
      await tx.wait();
      console.log("Minted!");
    }
  }

  return (
    <app>
      <text
        color="white"
        position={[0, 0, 0]}
        value="Hyperfy Worlds Balance"
        onPointerDown={getBalance}
      />
      <text
        color="white"
        position={[2, 0, 0]}
        value="Mint Hyperfy World"
        onPointerDown={mintWorld}
      />
    </app>
  );
}
```
