var StringValidator = (function () {
    function StringValidator() {
    }
    StringValidator.prototype.IsNotNull = function () {
        return this;
    };
    return StringValidator;
})();
var BooleanValidator = (function () {
    function BooleanValidator() {
    }
    BooleanValidator.prototype.IsTrue = function () {
        return this;
    };
    return BooleanValidator;
})();
/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
var Contract;
(function (Contract) {
    function In(precondition) {
        if (typeof precondition == "string") {
            return new StringValidator();
        }
        else if (typeof precondition == "boolean") {
            return new BooleanValidator();
        }
        return null;
    }
    Contract.In = In;
    function Out(postcondition) {
        return true;
    }
    Contract.Out = Out;
})(Contract || (Contract = {}));
//# sourceMappingURL=typed-contract.js.map