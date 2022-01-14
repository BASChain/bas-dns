const getWeb3js = require('../provider/get-web3')
const {findDomainInfo} = require('../biz/bas-view-api')
const {textToHash} = require('../utils/domain-util')

module.exports = function (app,db){
    let find = db.get('csdn')

    const web3js = getWeb3js()
    

    app.get('/domain/:text',async(req,resp)=>{
        try {
            const domainText = req.params.text
            const domainHash = textToHash(domainText)

            let ret = db.get(domainHash)

            let needQ = true

            if(!ret){
                ret = await findDomainInfo(domainText,web3js)

                if(ret && ret.registered){
                    db.set(ret,domainHash)
                }
            }
            
            console.log('Queyrf',domainText,ret)
            resp.send({
                data:ret
            })
        } catch (err) {
            console.warn(err)
            resp.send({
                code:5001,
                error:'Qurery error'
            })
        }

    })
 
    app.get('/domain', async(req,resp)=>{
        console.log(req.body)

        resp.send('Please use /domain/text')
    })
}

