var BaseValidator = (function () {
    function BaseValidator() {
    }
    return BaseValidator;
})();
/// <reference path="BaseValidator.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StringValidator = (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator() {
        _super.apply(this, arguments);
    }
    StringValidator.prototype.IsNotNull = function () {
        return this;
    };
    return StringValidator;
})(BaseValidator);
/// <reference path="BaseValidator.ts" />
var BooleanValidator = (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator() {
        _super.apply(this, arguments);
    }
    BooleanValidator.prototype.IsTrue = function () {
        return this;
    };
    return BooleanValidator;
})(BaseValidator);
/// <reference path="BaseValidator.ts" />
var NumberValidator = (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator() {
        _super.apply(this, arguments);
    }
    NumberValidator.prototype.IsGreaterThan = function (compareTo) {
        return this;
    };
    return NumberValidator;
})(BaseValidator);
/// <reference path="BaseValidator.ts" />
var ArrayValidator = (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator() {
        _super.apply(this, arguments);
    }
    ArrayValidator.prototype.IsEmpty = function () {
        return this;
    };
    return ArrayValidator;
})(BaseValidator);
/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
/// <reference path="TypeValidators\NumberValidator.ts" />
/// <reference path="TypeValidators\ArrayValidator.ts" />
var Contract;
(function (Contract) {
    "use strict";
    function In(precondition) {
        if (typeof precondition === "string") {
            return new StringValidator();
        }
        else if (typeof precondition === "boolean") {
            return new BooleanValidator();
        }
        else if (typeof precondition === "number") {
            return new NumberValidator();
        }
        else if (precondition instanceof Array) {
            return new ArrayValidator();
        }
        return undefined;
    }
    Contract.In = In;
    function Out(postcondition) {
        return true;
    }
    Contract.Out = Out;
})(Contract || (Contract = {}));
//# sourceMappingURL=typed-contract.js.map