"use strict";
exports.__esModule = true;
var ensjs_1 = require("@ensdomains/ensjs");
var Web3 = require("web3");
var provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/0ea012f970b947ff82570ae314d306d3');
var ens = new ensjs_1["default"]({ provider: provider, ensAddress: ensjs_1.getEnsAddress('3') });
console.log(ens);
var defaultAddress = '0xc7BC8404fE99f6aCE8a4954B7d6D1e23B25afB08';
ens.name('fxy.eth').getAddress().then(function (address) {
    console.log(address);
});
ens.getName(defaultAddress).then(function (name) {
    console.log(name);
    // console.log(ens.name(name))
});
var tx = ens.createSubdomain('iam');
console.log(tx);
