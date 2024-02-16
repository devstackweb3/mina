# MinaFT | Zero-Knowledge App -> zkApp

First ERC721 like smart contract on Mina Protocol with basic NFT minting and transferring UI.

### Zero-Knowledge App (zkApp) Functionning

Deploying a smart contract on mina protocol is done in a completely different way to the standard way on Ethereum.

Ethereum is known for having an Ethereum Virtual Machine (EVM), which uses some of the computing power provided by the full nodes on its network to calculate the deployment of smart contracts on its blockchain.
Each smart contract allocates a certain amount of computing power so that it can be deployed on the Ethereum blockchain by the EVM.

Mina Protocol does not have an EVM or a Decentralized Virtual Machine.

Instead, a library previously installed by the developer is used to cryptographically sign the operation of the smart contract (zkApp). The smart contract is deployed locally off-chain from the computer itself or from a server. The cryptographic signature generated on the entire contract is then taken over by the mina protocol to be validated by its peer nodes.

This generated cryptographic signature proves the honesty of the contract's operation, the owner behind it, and data stored on it without revealing any of the raw data recorded. By asking a series of conditional questions, he is able to summarise the validity of the application.

### Smart Contract Structure

- **main** | mina protocol connexion
- **deploy** | deploying the token contract to the blockchain
- **mint** | minting NFTs
- **transfer** | handling NFT transfers
- **getState** | display public address of the wallet holding the tokens

#### References
Project shared during the ETHAMSTERDAM (2022 | Event)
https://ethglobal.com/showcase/minaft-b1f35
https://github.com/orkunkilic/MinaFT/blob/main/src/index.ts
