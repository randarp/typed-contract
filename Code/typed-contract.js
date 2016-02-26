var BaseValidator = (function () {
    function BaseValidator(variableValue, variableName) {
        this._variableValue = variableValue;
        if (variableName && variableName.length > 0) {
            this._variableName = variableName;
        }
        else {
            this._variableName = "The variable";
        }
    }
    BaseValidator.prototype.Value = function () {
        return this._variableValue;
    };
    BaseValidator.prototype.Name = function () {
        return this._variableName;
    };
    return BaseValidator;
})();
/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StringValidator = (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    StringValidator.prototype.IsNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsNotDefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsLengthIsGreaterOrEqualThan = function (stringLength, variableName) {
        if (this._variableValue.length < stringLength) {
            throw new RangeError(this._variableValue + " is out of length range by a of " + (this._variableValue.length - stringLength) + ",\n            your specified range was " + stringLength + " for " + this._variableName + " ");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsEqualTo = function (compareTo) {
        if (this._variableValue !== compareTo) {
            throw new RangeError(this._variableName + " should be equal to the string variable " + compareTo);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the string variable " + compareTo);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.isLessThan = function (compareTo) {
        if (this._variableValue.length > compareTo.length) {
            throw new ReferenceError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsNotLessThan = function (compareTo) {
        if (this._variableValue.length < compareTo.length) {
            throw new ReferenceError(this._variableName + " should not be less that " + compareTo + " but is " + this._variableValue + " ");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsLengthGreaterThan = function (compareTo) {
        if (this._variableValue.length < compareTo.length) {
            throw new RangeError(this._variableName + " should have a length greater than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    return StringValidator;
})(BaseValidator);
/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />
/*
import {ExceptionInformation} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib"; import BooleanValidator from "./";
import {RangeError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
*/
var BooleanValidator = (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator(variableValue, variableName) {
        var _this = this;
        _super.call(this, variableValue, variableName);
        this.IsFalse = function () {
            if (_this._variableValue === true) {
                throw new RangeError(_this._variableName + " should be false");
            }
            else {
                return _this;
            }
        };
    }
    BooleanValidator.prototype.IsNull = function () {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        }
        else {
            throw new ReferenceError(this._variableName + " should be null");
        }
    };
    BooleanValidator.prototype.IsNotNull = function () {
        if (this._variableValue == null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    BooleanValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    BooleanValidator.prototype.IsUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be undefined");
        }
        else {
            return this;
        }
    };
    BooleanValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== undefined) {
            throw new ReferenceError(this._variableName + " should be null or undefined");
        }
        else {
            return this;
        }
    };
    BooleanValidator.prototype.IsEqualTo = function (compareTo) {
        if (!this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should be equal to the boolean variable " + compareTo);
        }
        else {
            return this;
        }
    };
    BooleanValidator.prototype.IsNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the boolean " + compareTo);
        }
        else {
            return this;
        }
    };
    BooleanValidator.prototype.IsTrue = function () {
        if (this._variableValue === false) {
            throw new RangeError(this._variableName + " should be true");
        }
        else {
            return this;
        }
    };
    return BooleanValidator;
})(BaseValidator);
/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />
var NumberValidator = (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    NumberValidator.prototype.IsNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsEqualTo = function (compareTo) {
        if (this._variableValue !== compareTo) {
            throw new RangeError(this._variableName + " should be equal to the number variable " + compareTo);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the number variable " + compareTo);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsGreaterThan = function (compareTo) {
        if (this._variableValue < compareTo) {
            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsNotGreaterThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new RangeError(this._variableName + " should not be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsGreaterOrEqualThan = function (compareTo) {
        if (this._variableValue < compareTo) {
            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsNotGreaterOrEqualThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new RangeError(this._variableName + " should not be greater or equal to " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsLessThan = function (compareTo) {
        if (this._variableValue >= compareTo) {
            throw new RangeError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsNotLessThan = function (compareTo) {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this._variableName + " should not be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsLessOrEqualThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new ReferenceError(this._variableName + " should be less or equal than " + compareTo + " but is " + this._variableName);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsNotLessOrEqualThan = function (compareTo) {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this._variableName + " should not be less or equal\n                 than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    return NumberValidator;
})(BaseValidator);
/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />
var ArrayValidator = (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator(variableValue, variableName) {
        var _this = this;
        _super.call(this, variableValue, variableName);
        this.IsUndefined = function () {
            if (_this._variableValue !== undefined) {
                throw new ReferenceError(_this._variableName + " should be undefined");
            }
            else {
                return _this;
            }
        };
    }
    ArrayValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be null or undefined");
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsEqualTo = function (compareTo, index) {
        if (this._variableValue[index] !== compareTo[index]) {
            throw new RangeError(this._variableName + " should be equal to array variable " + compareTo + " at the index " + index);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsNotEqualTo = function (compareTo, index) {
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(this._variableName + " should be equal to array variable " + compareTo + " at the index " + index);
        }
        else {
            return this;
        }
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
    function In(precondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof precondition === "string" || precondition === null || precondition === undefined) {
            return new StringValidator(precondition, name);
        }
        else if (typeof precondition === "boolean" || precondition === null || precondition === undefined) {
            return new BooleanValidator(precondition, name);
        }
        else if (typeof precondition === "number" || precondition === null || precondition === undefined) {
            return new NumberValidator(precondition, name);
        }
        else if (precondition instanceof Array || precondition instanceof Array === null || precondition instanceof Array === undefined) {
            return new ArrayValidator(precondition, name);
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