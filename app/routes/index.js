const dnsRoutes = require('./dns_routes')

const parseRoutes = require('./parse_routes')

module.exports = function (app,db){
    dnsRoutes(app,db)
    parseRoutes(app,db)
}