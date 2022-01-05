# NFT Marketplace 
Please run npm install on the terminal to download the appropriate packages already defined to the package.json file. 
Make sure you are in the source file. 

**Please ensure you have downloaded the following additionally **

1. Ganache
2. Truffle (global installation)
3. Metamask.io (hooked up on the browser)

**To run the development server on a local host scripts:** npm run start

For truffle tests and console please consult the official Truffle documentation for updates.


## Truffle 

### Base Commands

`truffle init`
Create base contract and migrations objects

`truffle compile`
scan contracts directory (if provided), and build json definitions

`truffle migrate`
Deploy to connected blockchain

`truffle console`
- set a var with the smart contract object 
- `kryptoBird = await KryptoBird.deployed()`
    - use await since javascript is synchronous, await makes it async
