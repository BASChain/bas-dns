const {basViewAddress} = require('./contract-addresses')

const basViewABI = require('./abi/bas-view')

const {preHandleDomainText,parseConfHexToString} = require('../utils/domain-util')

module.exports.basViewInstance = basViewInstance

module.exports.findDomainInfo = findDomainInfo

function basViewInstance(web3js,opts={}){
    const inst = new web3js.eth.Contract(basViewABI,basViewAddress,opts)
    return inst
}

async function findDomainInfo(domainText='',web3js){
    
    let sname = preHandleDomainText(domainText)
    const domainHash = web3js.utils.keccak256(sname)

    const inst = basViewInstance(web3js,{})

    let ret= {
        domainText,
        domainHash,
        registered:false,
        host:'',
        dns:{}
    }

    const res = await inst.methods.queryDomainInfo(domainHash).call()

    if(!res.name || res.name === null) return ret

    ret.registered = true

    let dnsConf = await inst.methods.queryDomainConfigs(domainHash).call()

    const A = parseConfHexToString(dnsConf.A)
    const AAAA = parseConfHexToString(dnsConf.AAAA)
    const CName = parseConfHexToString(dnsConf.CName)
  
    dnsConf = { ...dnsConf, ipv4: A, ipv6: AAAA, cname: CName }
    let host = A || AAAA || CName || ''

    return {...ret,registered:true,dns:dnsConf,host}

}