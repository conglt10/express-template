const Web3 = requie('web3');

require('dotenv').config();

const web3 = new Web3(process.env.JSON_RPC);

module.exports = web3;
