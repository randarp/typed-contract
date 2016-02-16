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
/*
import {ExceptionInformation} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib"; import BooleanValidator from "./";
import {RangeError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BooleanValidator = (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    BooleanValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
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
    BooleanValidator.prototype.IsNotNullOrUndefined = function () {
        if (this._variableValue == null || typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
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
    return BooleanValidator;
})(BaseValidator);
/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />
var ArrayValidator = (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    ArrayValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableValue + " should be null");
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsNotNull = function () {
        if (this._variableValue == null) {
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
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be undefined");
        }
        else {
            return this;
        }
    };
    ArrayValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue == null || typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
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
        if (typeof precondition === "string") {
            return new StringValidator(precondition, name);
        }
        else if (typeof precondition === "boolean") {
            return new BooleanValidator(precondition, name);
        }
        else if (typeof precondition === "number") {
            return new NumberValidator(precondition, name);
        }
        else if (precondition instanceof Array) {
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