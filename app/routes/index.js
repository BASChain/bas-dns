const dnsRoutes = require('./dns_routes')

module.exports = function (app,db){
    dnsRoutes(app,db)
}