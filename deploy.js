const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile')
// const {environment} = require("./environment");

const INITIAL_STRING = 'Hi there!'

const provider = new HDWalletProvider(
    'boy joy upgrade pond waste genuine father wolf raccoon misery length message',
    'https://rinkeby.infura.io/v3/cdb1db7fb3e044f7b251855b1083804d'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account: ', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_STRING]})
        .send({gas: '1000000', gasPrice: '5000000000', from: accounts[0]});

    console.log('Contract deployed to: ', result.options.address);

};

deploy();
