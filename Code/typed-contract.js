var TestClass = (function () {
    function TestClass() {
    }
    TestClass.prototype.Method23 = function () {
        return true;
    };
    return TestClass;
})();
/// <reference path="TypeExtensions\Test.ts" />
var Contract;
(function (Contract) {
    function In(precondition) {
        var testVariable = 23;
        return true;
    }
    Contract.In = In;
    function Out(postcondition) {
        return false;
    }
    Contract.Out = Out;
})(Contract || (Contract = {}));
//# sourceMappingURL=typed-contract.js.map