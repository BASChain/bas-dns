const express = require('express')
const Web3 = require('web3')

const bodyparser = require('body-parser')

const { textToAscii } = require('./app/utils/domain-util')
const config = require('./config')

const DnsCacher = require('./app/dns-cacher')
const db = new DnsCacher()
const port = config.port || 12117
const app = express()
require('./app/routes')(app,db)
app.listen(port,()=>{

    console.log(`Dns Server listen on ${port}.....`)
})