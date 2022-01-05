// For more configuration options see: https://trufflesuite.com/docs/truffle/reference/configuration.html
module.exports = {
  contracts_directory: "./src/contracts",
  contracts_build_directory: "./src/abis",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
