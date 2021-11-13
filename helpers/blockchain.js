const web3 = require('../config/web3');

const isAddress = (address) => {
  return web3.utils.isAddress(address);
};

const newContract = (abi, address) => {
  const instance = new web3.eth.Contract(abi, address);
  return instance;
};

const isContract = async (address) => {
  const result = await web3.eth.getCode(address);

  if (result !== '0x') {
    return true;
  }

  return false;
};

module.exports = { isAddress, newContract, isContract };
