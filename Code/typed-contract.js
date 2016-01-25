var TestClass = (function () {
    function TestClass() {
    }
    TestClass.prototype.Method1 = function () {
        return true;
    };
    return TestClass;
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
