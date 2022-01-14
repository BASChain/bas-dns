const Web3 = require('web3')
const config = require('../../config')


function getWeb3js(){
    const {infuraId =''} = config
    const url = `https://ropsten.infura.io/v3/${infuraId}`
    console.log('>>>>>>>>>>>>>>>>>>>',url)

    return new Web3(url)
}

module.exports = getWeb3js