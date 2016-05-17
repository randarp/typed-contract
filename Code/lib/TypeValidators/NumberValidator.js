"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basevalidator = require("./BaseValidator");
var NumberValidator = (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    /**
     *
     * IsNotNull checks if the type number variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     * IsDefined checks if the number variable is defined
     * @throws ReferenceError if the number variable jis not defined
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsUndefined checks if the number variable is undefined
     * @throws a ReferenceError if the number variable is undefined
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsNullOrUndefined checks if the number variable is not null or undefined
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsEqualTo = function (compareTo) {
        if (this._variableValue !== compareTo) {
            throw new RangeError(this._variableName + " should be equal to the number variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the number variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsGreaterThan = function (compareTo) {
        if (this._variableValue < compareTo) {
            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNotGreaterThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new RangeError(this._variableName + " should not be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsGreaterOrEqualThan = function (compareTo) {
        if (this._variableValue < compareTo) {
            throw new RangeError(this._variableName + " should be greater than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
     * parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNotGreaterOrEqualThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new RangeError(this._variableName + " should not be greater or equal to " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsLessThan = function (compareTo) {
        if (this._variableValue >= compareTo) {
            throw new RangeError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNotLessThan = function (compareTo) {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this._variableName + " should not be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsLessOrEqualThan = function (compareTo) {
        if (this._variableValue > compareTo) {
            throw new ReferenceError(this._variableName + " should be less or equal than " + compareTo + " but is " + this._variableName);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    NumberValidator.prototype.IsNotLessOrEqualThan = function (compareTo) {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this._variableName + " should not be less or equal\n                 than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    NumberValidator.prototype.IsBetween = function (startRange, endRange) {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range");
        }
    };
    NumberValidator.prototype.IsNotBetween = function (startRange, endRange) {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            throw new RangeError(this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range");
        }
        else {
            return this;
        }
    };
    return NumberValidator;
}(basevalidator.BaseValidator));
exports.NumberValidator = NumberValidator;
//# sourceMappingURL=NumberValidator.js.map