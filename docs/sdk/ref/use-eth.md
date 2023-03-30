---
sidebar_position: 43
---

# `useEth()`

A utility hook for requesting payment or reading and writing to a contract on the blockchain.

**useEth(chainName)**

Returns an instance of `Eth`

`chainName` can be one of `ethereum`, `optimism`, `arbitrum`, `polygon` or `goerli`. If none specified, defaults to `ethereum`.

**Eth.getChain()**

Returns info about the chain the current user is connected to, or null if they are not connected.

This is useful to check that the user is connected to the correct network before calling a contract or making a payment.

```jsx
const chain = await eth.getChain()
```

**Eth.sign(message)**

Returns a `Promise` that resolves with the signature `String` once the user signs using their wallet.

```jsx
const signature = await eth.sign('Howdy!')
```

**Eth.pay(address, amountInWei)**

Requests the user to make a payment to an address.

Returns a `Promise` that resolves with a `Transaction` instance.

```jsx
const tx = await eth.pay('0x00', eth.toWei('2.4'))
await tx.wait()
console.log('Paid!')
```

**Eth.toWei(amountInEth)**

Converts an eth string to wei. Returns a `String`.

**Eth.contract(address[, abi])**

Returns an instance of `Contract` for the specified address.

If no ABI is specified we will automatically load it for you. Providing your own ABI is useful to improve speed or when the ABI can't be loaded automatically.

```jsx
// ABI not provided (fetched automatically)
const contract = useMemo(() => eth.contract('0x000...'))

// ABI provided manually (faster)
const contract = useMemo(() =>
  eth.contract('0x000', ['function mint(uint256 amount) external payable'])
)
```

**Contract.read(method, ...args)**

Returns a `Promise` that resolves with the result of the read method.

```jsx
const balance = await contract.read('balanceOf', '0x123')
```

**Contract.write(method, ...args)**

Returns a `Promise` that resolves with a `Transaction`

```jsx
const tx = await contract.write('mint', 1, { value: eth.toWei('0.06') })
```

**Transaction.wait()**

Returns a `Promise` that resolves once the transaction is confirmed on the blockchain.

```jsx
const tx = await contract.write('mint', 1, { value: eth.toWei('0.06') })
await tx.wait()
console.log('Minted!')
```
