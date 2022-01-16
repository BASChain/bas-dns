const queryString =require('query-string')
const getWeb3js = require('../provider/get-web3')
const {findDomainInfo} = require('../biz/bas-view-api')
const {textToHash} = require('../utils/domain-util')

/**
 * 301 redirect
 * @param {*} app 
 * @param {*} db 
 */
module.exports =function(app,db){
    const web3js = getWeb3js()

    app.get('/parser',async(req,resp)=>{
        let domain = ''
        let bd = req.query && req.query.bd ? req.query.bd : ''
        const originalUrl = `https://${bd}`
        const googleURL = new URL(originalUrl)
        

        console.log('>>>>>>>>>googleURL>>>>>>>>>>>>>>>',googleURL)
        const {q} = queryString.parse(googleURL.search)

        if(!q) {
            resp.send(originalUrl)
            return
        }


        if(q && q.match(/^httpb:\/\/(.*)/)){
            let matches = q.match(/^httpb:\/\/(.*)/)
            domain = matches && matches.length>1 ? matches[1] : ''
        }
        
        if(!domain) {
            resp.send(originalUrl)
            return
        }

        const domainHash = textToHash(domain)
        let ret = db.get(domainHash)


        if(ret && ret.host){
            resp.send(`http://${ret.host}`)
            return
        }else {
            ret = await findDomainInfo(domain,web3js)

            if(ret && ret.registered){
                db.set(ret,domainHash)
                resp.send(`http://${ret.host}`)
                return
            }
        }

        resp.send(originalUrl)

    })
} 