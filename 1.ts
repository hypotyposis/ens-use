import ENS, { getEnsAddress } from '@ensdomains/ensjs'
var Web3 = require("web3")

var provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/0ea012f970b947ff82570ae314d306d3')
const ens = new ENS({ provider, ensAddress: getEnsAddress('3') })

// console.log(ens)

var defaultAddress = '0xc7BC8404fE99f6aCE8a4954B7d6D1e23B25afB08'
ens.name('fxy.eth').getAddress().then((address) => {
    console.log(address)
})
ens.getName(defaultAddress).then((name) => {
    console.log(name)
    // console.log(ens.name(name))
})
const tx = ens.createSubdomain('iam')
console.log(tx)