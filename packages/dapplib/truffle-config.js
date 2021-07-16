require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn provide install opera flee turn'; 
let testAccounts = [
"0x670fb503ca48814c661becaed1e075b21ca5c2bcea594cb8c086507461c642bc",
"0xd4ff2fc8a78ad1d6fe6f403094eed927f37dffcf725899e25f32afa9cf02264e",
"0x2a11ac1d5034ccb67e35df1b795847c39ffaad239012a96c49ddf16d272d6d1d",
"0xe53916e5b8867af5033a4ffcff636be2701db3e5ba41b6a36faaf5da49be4559",
"0x36158472cf45be1eabaec8b6630fc0408f1291a7ef1bf7c94546f0e3ea0aefcc",
"0xadbaf3fabad8994df47b00e6e9bfe68a175474754cdafb0d7f90ee2f8f138898",
"0xe17d46cf6616f06858a0d86944f7e40940308bb6f7202de228f63ca6017551e7",
"0xe3981d832e1006b8e9c1bc52449e75f192faeb3de62e989d953b8c1171fa31aa",
"0x90ef0f5b52f15b3a9c3fa08d3f6850286b8b2f9cdcc383cb2e013daaad9bce8d",
"0xf04e35203014d977c451a28ee23989eac1df0762b98e8a5ffdd82d6f0c08f4d6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

