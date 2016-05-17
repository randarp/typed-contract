"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basevalidator = require("./BaseValidator");
var ArrayValidator = (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    /**
     *
     * IsNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     * IsDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsUndefined = function () {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(this._variableName + " should be undefined");
        }
        else {
            return this;
        }
    };
    /**
     * IsNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsEqualTo = function (compareTo, index) {
        if (!compareTo.length || this._variableValue.length === 0) {
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
    /**
     *
     * IsNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsNotEqualTo = function (compareTo, index) {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                " please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(this._variableName + " should be equal to array variable " + compareTo + " at the index " + index);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthGreaterThan = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * IsLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthNotGreaterThan = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length <= compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * IsLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthGreaterOrEqualTo = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * IsLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthNotGreaterOrEqualTo = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * IsLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthLessThan = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * IsLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthNotLessThan = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * IsLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthLessOrEqualThan = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * IsLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.IsLengthNotLessOrEqualThan = function (compareTo) {
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * Contains checks if the array variable's values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the Contains function
     * @param compareTo
     * @returns { ArrayValidator}
     */
    ArrayValidator.prototype.Contains = function (compareTo) {
        var _this = this;
        this.count = 0;
        if (!compareTo.length || !this._variableValue.length) {
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
    /**
     *
     * NotContains checks if the array variable's values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the NotContains function
     * @param compareTo
     * @returns { ArrayValidator}
     */
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
}(basevalidator.BaseValidator));
exports.ArrayValidator = ArrayValidator;
//# sourceMappingURL=ArrayValidator.js.map