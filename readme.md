# MinaFT | Zero-Knowledge App -> zkApp

First ERC721 like smart contract on Mina Protocol with basic NFT minting and transferring UI.

## Zero-Knowledge App (zkApp) Functionning

Deploying a smart contract on mina protocol is done in a completely different way to the standard way on Ethereum.

Ethereum is known for having an Ethereum Virtual Machine (EVM), which uses some of the computing power provided by the full nodes on its network to calculate the deployment of smart contracts on its blockchain.
Each smart contract allocates a certain amount of computing power so that it can be deployed on the Ethereum blockchain by the EVM.

Mina Protocol does not have an EVM or a Decentralized Virtual Machine.

Instead, a library previously installed by the developer is used to cryptographically sign the operation of the smart contract (zkApp). The smart contract is deployed locally off-chain from the computer itself or from a server. The cryptographic signature generated on the entire contract is then taken over by the mina protocol to be validated by its peer nodes.

This generated cryptographic signature proves the honesty of the contract's operation, the owner behind it, and data stored on it without revealing any of the raw data recorded. By asking a series of conditional questions, he is able to summarise the validity of the application.

Fundamentally, a zkApp consists of a smart contract and a UI to interact with it.

## zkApp Initialisation 
Initialize the necessary libraries to interpret correctly the methods and configured rules by MINA Foundation and O1Labs company. 
Install zkApp CLI :
```sh
npm install -g zkapp-cli
```
### Start own Project 
**1. Create own project**
```sh
zk project <mynamedproj>
```
Inside **src** directory is built a *the smart contract* file. 

**2. Select an accompanying UI framework**
```sh
? Create an accompanying UI project too? …
❯ next
svelte
nuxt
empty
none
```
**3. Running tests**
```sh
npm run test
```
**3.1 Re-running tests automatically**
```sh
npm run testw
```
**4. Configure zkApp**
```sh
zk config
```
The command prompts guide you to add a deploy alias to your project [config.json] file.

The deploy alias can be anything you want. For more details, see Deploy alias in Tutorial 3: Deploy to a Live Network.

For this example on Berkeley Testnet, use:

- Deploy alias name: [berkeley]

- This example uses [berkeley], but the deploy alias name can be anything and does not have to match the network name.

- Mina GraphQL API URL: [https://proxy.berkeley.minaexplorer.com/graphql]

- Transaction fee to use when deploying: [0.1]

- Account to pay transaction fees: Create a new fee payer pair
## Smart Contract Structure

- **main** | mina protocol connexion
- **deploy** | deploying the token contract to the blockchain
- **mint** | minting NFTs
- **transfer** | handling NFT transfers
- **getState** | display public address of the wallet holding the tokens

### Issue 0.0 | git fatal: unable to access 'https://github.com/devstackweb3/mina-protocol/minanft.git/': URL using bad/illegal format or missing URL
Issue trying to push in a sub-directory from a local repository made on desktop.
```sh
git remote add origin 'https://github.com/devstackweb3/mina-protocol/minanft.git'
git push -u origin main
```
remote: Not Found
fatal: repository 'https://github.com/devstackweb3/mina-protocol/minanft.git/' not found

First of all checking the status of push attempts in the remote add origin state. 
```sh
git remote -v
```

Remove previous repo added in the remote side before push attempt. 
```sh
git remote rm origin
```

Possible single quote issue with the problem of identification URL path. 
```sh
git remote add origin "https://github.com/devstackweb3/mina-protocol/minanft.git"
git push -u origin main
```
Possible READ only access, lack of administrator use connexion with remote library. 

Solution with password integration is **too old** & [seems deprecated](https://stackoverflow.com/questions/10116373/git-push-error-repository-not-found).
**Github removed** use of username and password on **August 13, 2021**.
```sh
git remote add origin "https://devstackweb3:MYPASSWORD@github.com/devstackweb3/mina-protocol/minanft.git"
```

Possible READ only access, lack of administrator use connexion with remote library. 
Solution with [token credentials](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) is more recent (2022). 

```sh
git remote set-url origin https://PERSONAL_ACCESS_TOKEN@github.com/username/reponame.git
```

Taking a step back from the configuration of the local repository, I noticed that default configuration of project has started with the name of MinaNF dedicated to Github repo name. A name by default accessible in next.config.js and pages/reactCOIServiceWorker.tsx, for any possible changes. Starts to try with this name. 
In fact the project was created under a new repo named MinaNF.git. As understood from the following error : 

#### Issue 0.1 | fatal refusing to merge unrelated histories 
Following an attempt to pull a request from the current remote main branch stated inside the "https://github.com/devstackweb3/mina-protocol" through the remote add origin, this error occurs when [2 totally different git projects](https://www.educative.io/answers/the-fatal-refusing-to-merge-unrelated-histories-git-error) try to be merged together.

To solve the problem, the [following command](https://github.com/git/git/blob/master/Documentation/RelNotes/2.9.0.txt#L58-L68) is helpfull : 

```sh
git pull origin master --allow-unrelated-histories
```

### Issue 1.0 | SnarkyJS Library depreciated
It's necessary to update imports and methods used in the previous reference for a clear interpretation by libraries. 
![image](https://github.com/devstackweb3/mina-protocol/assets/118926098/e0c5996e-b78f-42db-8acb-31e3007aa9d2)

## References
Official documentation Mina Protocol 

https://docs.minaprotocol.com/zkapps/how-to-write-a-zkapp

Project shared during the ETHAMSTERDAM (2022 | Event)

https://ethglobal.com/showcase/minaft-b1f35

https://github.com/orkunkilic/MinaFT/blob/main/src/index.ts
