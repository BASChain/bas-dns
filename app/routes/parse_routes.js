const queryString =require('query-string')
const getWeb3js = require('../provider/get-web3')
const {findDomainInfo} = require('../biz/bas-view-api')
const {textToHash} = require('../utils/domain-util')
const isValidDomain = require('is-valid-domain')

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
      
        let originalUrl = `https://${bd}`
        originalUrl = originalUrl.replace(/httpb:\/\//,'')
        const googleURL = new URL(`https://${bd}`)
        
        console.log('>>>>>>>>>googleURL>>>>>>>>>>>>>>>',googleURL)
        const {q} = queryString.parse(googleURL.search)

        if(!q) {
            redirect301(originalUrl)
            return
        }


        if(q && q.match(/^httpb:\/\/(.*)/)){
            let matches = q.match(/^httpb:\/\/(.*)/)
            domain = matches && matches.length>1 ? matches[1] : ''
        }
        
        if(!domain) {
            redirect301(originalUrl)
            return
        }

        const domainHash = textToHash(domain)
        let ret = db.get(domainHash)

        if(ret && ret.host){
            redirect301(`http://${ret.host}`)
            return
       
        }else {
            ret = await findDomainInfo(domain,web3js)

            if(ret && ret.registered){
                db.set(ret,domainHash)
                redirect301(`http://${ret.host}`)
                return
            }
        }

        isValidDomain(domain) ?  redirect301(`http://${domain}`) :  redirect301(originalUrl)

        function redirect301(href){
            resp.writeHead(301,{'Location':href})
            resp.end()
            return
        }
    })
} 

