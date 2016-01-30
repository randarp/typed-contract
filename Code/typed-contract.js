var Test = (function () {
    function Test() {
    }
    return Test;
})();
/// <reference path="TypeExtensions\Test.ts" />
var Contract;
(function (Contract) {
    function In(precondition) {
        return true;
    }
    Contract.In = In;
    function Out(postcondition) {
        return true;
    }
    Contract.Out = Out;
})(Contract || (Contract = {}));
//# sourceMappingURL=typed-contract.js.map