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
    StringValidator.prototype.IsLessThan = function (compareTo) {
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
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length greater\n            than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsLengthGreaterOrEqualTo = function (compareTo) {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    StringValidator.prototype.IsLengthNotGreaterThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    StringValidator.prototype.IsLengthNotGreaterOrEqualTo = function (compareTo) {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length greater or equal to " + compareTo.length + "\n              but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsLengthLessThan = function (compareTo) {
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsLengthNotLessThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsLengthLessOrEqualThan = function (compareTo) {
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(this._variableName + " should have a\n            length less or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsLengthNotLessOrEqualThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length less\n            or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.ToMatch = function (regExp) {
        if (!regExp.test(this._variableValue)) {
            throw new RangeError(this._variableName + " should match\n            the pattern " + regExp + " but the value of " + this._variableValue + " does not match");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.ToNotMatch = function (regExp) {
        if (regExp.test(this._variableValue)) {
            throw new RangeError(this._variableName + " should not match\n            the pattern " + regExp + " but the value of " + this._variableValue + " matches");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.Contains = function (compareTo) {
        if (this._variableValue.indexOf(compareTo) <= -1) {
            throw new RangeError(this._variableName + " should contain\n           the pattern " + compareTo + " but the pattern is not found in " + this._variableValue);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.NotContains = function (compareTo) {
        if (this._variableValue.indexOf(compareTo) > -1) {
            throw new RangeError(this._variableName + " should not contain\n           the pattern " + compareTo + " but the pattern is found in " + this._variableValue);
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.StartsWith = function (compareTo) {
        if (this._variableValue.startsWith(compareTo)) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should start with " + this._variableValue + ", but " + compareTo + " does not");
        }
    };
    StringValidator.prototype.NotStartsWith = function (compareTo) {
        if (this._variableValue.startsWith(compareTo)) {
            throw new RangeError(this._variableName + " should not start with " + compareTo + " but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.EndsWith = function (compareTo) {
        if (!this._variableValue.endsWith(compareTo)) {
            throw new RangeError(this._variableName + " should end with " + compareTo + ", but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.NotEndsWith = function (compareTo) {
        if (this._variableValue.endsWith(compareTo)) {
            throw new RangeError(this._variableName + " should not end with " + compareTo + ", but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    StringValidator.prototype.IsBetween = function (startRange, endRange) {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range");
        }
    };
    StringValidator.prototype.IsNotBetween = function (startRange, endRange) {
        if (this._variableValue < startRange && this._variableValue > endRange) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range");
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
        _super.call(this, variableValue, variableName);
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
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
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
    BooleanValidator.prototype.IsFalse = function () {
        if (this._variableValue === true) {
            throw new RangeError(this._variableName + " should be false");
        }
        else {
            return this;
        }
    };
    ;
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
        _super.call(this, variableValue, variableName);
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
    ArrayValidator.prototype.IsUndefined = function () {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(this._variableName + " should be undefined");
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
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] !== compareTo[index]) {
            throw new RangeError(this._variableName + " should be equal to array variable " + compareTo + " at the index " + index);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsNotEqualTo = function (compareTo, index) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(this._variableName + " should be equal to array variable " + compareTo + " at the index " + index);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsLengthGreaterThan = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length < compareTo.length) {
            throw new RangeError(this._variableName + " should have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsLengthNotGreaterThan = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length <= compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    ArrayValidator.prototype.IsLengthGreaterOrEqualTo = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    ArrayValidator.prototype.IsLengthNotGreaterOrEqualTo = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(this._variableName + " should not have a\n             length greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsLengthLessThan = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsLengthNotLessThan = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length\n        not less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsLengthLessOrEqualThan = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(this._variableName + " should have a length less or equal\n            to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsLengthNotLessOrEqualThan = function (compareTo) {
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should not have a\n             length less or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.Contains = function (compareTo) {
        var _this = this;
        this.count = 0;
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
        }
        for (var i = 0; i < compareTo.length; i++) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                this.count++;
            }
        }
        if (this.count === 0) {
            throw new RangeError(this._variableName + " should contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
        }
        return this;
    };
    ArrayValidator.prototype.NotContains = function (compareTo) {
        var _this = this;
        this.count = 0;
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
        }
        for (var i = 0; i < compareTo.length; i++) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                this.count++;
            }
        }
        if (this.count > 0) {
            throw new RangeError(this._variableName + " should not contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
        }
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