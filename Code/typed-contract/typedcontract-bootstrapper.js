/// <reference path="IContract.d.ts" />
/// <reference path="type-validators/TypeValidators.d.ts" />
/* tslint:disable */
var contract;
var typedcontract;
/* Create a global scope object if we are not being called through a module */
if (!contract && typeof typedcontract !== "undefined") {
    contract = new typedcontract.Contract();
}
/* tslint:enable */
//# sourceMappingURL=typedcontract-bootstrapper.js.map