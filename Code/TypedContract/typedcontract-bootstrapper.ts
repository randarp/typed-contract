/// <reference path="IContract.d.ts" />
/// <reference path="TypeValidators/TypeValidators.d.ts" />

/* tslint:disable */
var contract: IContractStatic;

var typedcontract: any;

/* Create a global scope object if we are not being called through a module */
if (!contract && typeof typedcontract !== "undefined") {
    contract = new typedcontract.Contract();
}
/* tslint:enable */
