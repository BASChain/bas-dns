module.exports = [
  {
    "inputs": [
      { "internalType": "address", "name": "rel_addr", "type": "address" }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      { "internalType": "address", "name": "newDao", "type": "address" }
    ],
    "name": "ChangeDAO",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x8a42876b"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "DAOAddress",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd392eab1"
  },
  {
    "constant": true,
    "inputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "name": "ErrorCode",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x5d05fa53"
  },
  {
    "constant": false,
    "inputs": [
      { "internalType": "address", "name": "new_rel", "type": "address" }
    ],
    "name": "changeRelation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x57b29ef4"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "bytes", "name": "name", "type": "bytes" },
      { "internalType": "bool", "name": "isCustom", "type": "bool" },
      { "internalType": "uint256", "name": "cusPrice", "type": "uint256" },
      { "internalType": "uint8", "name": "durationInYear", "type": "uint8" }
    ],
    "name": "checkRootRegistry",
    "outputs": [
      { "internalType": "uint8", "name": "", "type": "uint8" },
      { "internalType": "bool", "name": "", "type": "bool" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa84ccbf4"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "bytes", "name": "rName", "type": "bytes" },
      { "internalType": "bytes", "name": "sName", "type": "bytes" },
      { "internalType": "uint256", "name": "durationInYear", "type": "uint256" }
    ],
    "name": "checkSubRegistry",
    "outputs": [
      { "internalType": "uint8", "name": "", "type": "uint8" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd13b893f"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "bytes32", "name": "hash", "type": "bytes32" }
    ],
    "name": "domainIsWild",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x256dec96"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getOANNParams",
    "outputs": [
      { "internalType": "uint256", "name": "MAX_YEAR", "type": "uint256" },
      { "internalType": "uint256", "name": "AROOT_GAS", "type": "uint256" },
      { "internalType": "uint256", "name": "BROOT_GAS", "type": "uint256" },
      { "internalType": "uint256", "name": "SUB_GAS", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "CUSTOM_PRICE_GAS",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xff32cd20"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "bytes32", "name": "nameHash", "type": "bytes32" }
    ],
    "name": "queryDomainConfigs",
    "outputs": [
      { "internalType": "bytes", "name": "A", "type": "bytes" },
      { "internalType": "bytes", "name": "AAAA", "type": "bytes" },
      { "internalType": "bytes", "name": "MX", "type": "bytes" },
      { "internalType": "bytes", "name": "BlockChain", "type": "bytes" },
      { "internalType": "bytes", "name": "IOTA", "type": "bytes" },
      { "internalType": "bytes", "name": "CName", "type": "bytes" },
      { "internalType": "bytes", "name": "MXBCA", "type": "bytes" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x4f69b3a2"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "bytes32", "name": "nameHash", "type": "bytes32" }
    ],
    "name": "queryDomainEmailInfo",
    "outputs": [
      { "internalType": "bytes", "name": "name", "type": "bytes" },
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "uint256", "name": "expiration", "type": "uint256" },
      { "internalType": "bool", "name": "isActive", "type": "bool" },
      { "internalType": "bool", "name": "openToPublic", "type": "bool" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x1f766f14"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "bytes32", "name": "nameHash", "type": "bytes32" }
    ],
    "name": "queryDomainInfo",
    "outputs": [
      { "internalType": "bytes", "name": "name", "type": "bytes" },
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "uint256", "name": "expiration", "type": "uint256" },
      { "internalType": "bool", "name": "isRoot", "type": "bool" },
      { "internalType": "bool", "name": "rIsOpen", "type": "bool" },
      { "internalType": "bool", "name": "rIsCustom", "type": "bool" },
      { "internalType": "bool", "name": "rIsRare", "type": "bool" },
      { "internalType": "uint256", "name": "rCusPrice", "type": "uint256" },
      { "internalType": "bytes32", "name": "sRootHash", "type": "bytes32" },
      { "internalType": "bool", "name": "isMarketOrder", "type": "bool" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x3870d91e"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "bytes32", "name": "mailHash", "type": "bytes32" }
    ],
    "name": "queryEmailInfo",
    "outputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "uint256", "name": "expiration", "type": "uint256" },
      { "internalType": "bytes32", "name": "domainHash", "type": "bytes32" },
      { "internalType": "bool", "name": "isValid", "type": "bool" },
      { "internalType": "bytes", "name": "aliasName", "type": "bytes" },
      { "internalType": "bytes", "name": "bcAddress", "type": "bytes" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa806e95c"
  },
  {
    "constant": true,
    "inputs": [
      { "internalType": "address", "name": "seller", "type": "address" },
      { "internalType": "bytes32", "name": "nameHash", "type": "bytes32" }
    ],
    "name": "queryOrderInfo",
    "outputs": [
      { "internalType": "bytes", "name": "name", "type": "bytes" },
      { "internalType": "uint256", "name": "price", "type": "uint256" },
      { "internalType": "bool", "name": "isValid", "type": "bool" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd8d0db68"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "rel",
    "outputs": [
      { "internalType": "contract BasRelations", "name": "", "type": "address" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xce26e78a"
  },
  {
    "constant": false,
    "inputs": [
      { "internalType": "uint8", "name": "index", "type": "uint8" },
      { "internalType": "string", "name": "reason", "type": "string" }
    ],
    "name": "setErrorCode",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x4411c158"
  }
]
