/// <reference path="IContract.d.ts" />
/// <reference path="TypeValidators/TypeValidators.d.ts" />

/* tslint:disable */
var contract: IContractStatic;

var typedcontract: any;

/* Create a global scope object if we are not being called through a module */
console.debug("Initializing TypedContract")
if (!contract && typeof typedcontract !== "undefined") {
    console.debug("Initializing TypedContract global variable")
    contract = new typedcontract.Contract();
    console.debug("Created TypedContract global variable")
}
/* tslint:enable */
