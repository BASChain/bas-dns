module.exports.BAS_TOKEN = 'BAS_TOKEN'
module.exports.BAS_ASSET = 'BAS_ASSET'
module.exports.BAS_VIEW = 'BAS_VIEW'

module.exports.BAS_ABIS = {
	[BAS_TOKEN]:require('./bas-token'),
	[BAS_ASSET]:require('./bas-asset'),
	[BAS_VIEW]:require('./bas-view')
}