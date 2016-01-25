var TestClass = (function () {
    function TestClass() {
    }
    TestClass.prototype.Method8 = function () {
        return true;
    };
    return TestClass;
})();
/// <reference path="TypeExtensions\Test.ts" />
var Contract;
(function (Contract) {
    function In2(precondition) {
        var testVariable = 12;
        return true;
    }
    Contract.In2 = In2;
    function Out(postcondition) {
        return false;
    }
    Contract.Out = Out;
})(Contract || (Contract = {}));
//# sourceMappingURL=typed-contract.js.map