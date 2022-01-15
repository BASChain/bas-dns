
class DnsCacher {
    cacheMillionSeconds = 1 * 24 *3600*1000
    constructor(){
        
        this.domains = {
        }
    }


    clearAll(){
        this.domains = {}
    }

    set(domain,key){
        if( domain){
            const created = new Date().getTime()
            const {domainHash} = domain
            key = key||domainHash
            this.domains[key] = {...domain,created}
        }
    }

    get(domainHash){
        let domain =  this.domains[domainHash]
        const current = new Date().getTime()

        if(domain &&  domain.created && (current - domain.created)< this.cacheMillionSeconds){
            this.domains[domainHash] = undefined
        }

        return this.domains[domainHash]
    }

    
}

module.exports = DnsCacher