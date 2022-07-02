require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/6z7awRwYPLUB2-2HE1YXaArqjRRxqQed',
      accounts: ['4583289f050b1d3e063ac9ba402aee6d62c01f287b874eff50c23e686e207e93'],
    },
  },
};