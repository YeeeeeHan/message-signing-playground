// import ethers javascript es6
const ethers = require('ethers');

let mnemonic = 'YOUR-PRIVATE-KEY-HERE';

for (let i = 0; i < 10; i++) {
  // Load the second account from a mnemonic
  let path = `m/44'/60'/${i}'/0/0`;
  let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic, path);
  console.log(`Wallet ${i}: Public Key: ${mnemonicWallet.address}, Private Key: ${mnemonicWallet.privateKey}`);
}
