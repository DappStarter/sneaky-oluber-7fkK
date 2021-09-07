require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name response range proof grace muscle army gate'; 
let testAccounts = [
"0xfe301522b2096c016a31a0cd3174912f5a65ef3bdf9392ce371971e36f28fff0",
"0x7c5749a7182170abb2524a2cff22392af7543abfe7bfff126314016d98d1b15d",
"0x02c91480d4283a02c7bdc70b850cebbb4884fadbf1be2b5ea9d01e3e1b24eee5",
"0x3f229ef7596161a89c845a904ce9b88b36150cbd6ad74aa30eab62c25bfec24d",
"0xb0d76332726e6f2d37d646ee5d8d286ab07a81c59bc0a38fd5e99a80d330fe63",
"0x80d1a9a81f27462aaf3c0cc53fedc6c1e1885637886cde7f074ddb326dca56d4",
"0x69ac9483e0d07ea603443361b76fc686feeb4008f594f073df77c168a5f1df77",
"0xe7e0c6c6fc408ff3a7cfe8673af9223dcb0f81560db76aed5093033fa371567b",
"0xf1795890fb18178fb5d4896b60890d63b785fbfd44c4e9d720dab88bd873b5c0",
"0xda2babbed78cf30b5c86939e471cd9960b91e4c3d46d40604fc0529a690975f2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

