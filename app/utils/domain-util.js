const punycode = require('punycode')
const Web3Uitls = require('web3-utils')

const dataStoreDelimiter = '7f'

module.exports.textToHash = (text='')=>{
    let _text = this.preHandleDomainText(text)
    return Web3Uitls.keccak256(_text)
}

module.exports.textToAscii = (text)=>{
    if(text===undefined)return ''
    return punycode.toASCII(text.toString().trim().toLowerCase())
}

module.exports.preHandleDomainText = function(text=''){
    let _ret = text.toString().trim().toLowerCase()
    return punycode.toASCII(_ret)
}

module.exports.parseConfHexToString = function (hex=''){
    if (!hex) return ''
    if (Web3Uitls.isHex(hex)) {
      const _hexstr = Web3Uitls.isHexStrict(hex) ? hex.slice(2) : hex
      let datas = _hexstr.split(dataStoreDelimiter)
  
      datas = datas.map((d) => Web3Uitls.hexToString(`0x${d}`))
      return datas.join('')
    } else {
      return ''
    }
}