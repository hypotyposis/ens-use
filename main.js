var Web3 = require("web3")

// var accounts = ethereum.enable();
var defaultAccount = '0xc7BC8404fE99f6aCE8a4954B7d6D1e23B25afB08';
// var web3 = new Web3(ethereum);
var web3 = new Web3(Web3.givenProvider || "https://ropsten.infura.io/v3/0ea012f970b947ff82570ae314d306d3");
var ens = web3.eth.ens;
// console.log(ens);
ens.getAddress('fxy.eth').then(function (address) {
    console.log(address);
})
// Getting contenthash
ens.getContenthash('ethereum.eth').then(function (result) {
    console.log(result);
});