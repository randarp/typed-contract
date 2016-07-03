// TODO: Strongly type these
var contract: any;
var typedcontract: any;

/* Create a global scope object if we are not being called through a module */
if (!contract && typeof typedcontract !== "undefined") {
    contract = new typedcontract.Contract();
}
