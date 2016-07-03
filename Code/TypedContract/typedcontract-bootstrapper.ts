// TODO: Strongly type these
var contract: any;
var typedcontract: any;

if (!contract && typeof typedcontract !== "undefined") {
    contract = new typedcontract.Contract();
}
