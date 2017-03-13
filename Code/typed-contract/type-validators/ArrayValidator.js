/// <reference path="TypeValidators.d.ts" />
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseValidator_1 = require("./BaseValidator");
var ArrayValidator = (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isUndefined = function () {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(this._variableName + " should be undefined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isEqualTo = function (compareTo, index) {
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
     * isNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isNotEqualTo = function (compareTo, index) {
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
     * isLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthGreaterThan = function (compareTo) {
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
     * isLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotGreaterThan = function (compareTo) {
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
     * isLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthGreaterOrEqualTo = function (compareTo) {
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
     * isLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotGreaterOrEqualTo = function (compareTo) {
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
     * isLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthLessThan = function (compareTo) {
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
     * isLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotLessThan = function (compareTo) {
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
     * isLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthLessOrEqualThan = function (compareTo) {
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
     * isLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotLessOrEqualThan = function (compareTo) {
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
     * contains checks if the array variable's values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the contains function
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.contains = function (compareTo) {
        var _this = this;
        var count = 0;
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
        }
        for (var i = 0; i < compareTo.length; i++) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                count++;
            }
        }
        if (count === 0) {
            throw new RangeError(this._variableName + " should contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
        }
        return this;
    };
    /**
     *
     * notContains checks if the array variable's values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the notContains function
     * @param compareTo
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.notContains = function (compareTo) {
        var _this = this;
        var count = 0;
        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError("The length of either your contract precondition\n            or comparable have a length of zero, please enter in values");
        }
        for (var i = 0; i < compareTo.length; i++) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                count++;
            }
        }
        if (count > 0) {
            throw new RangeError(this._variableName + " should not contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
        }
        return this;
    };
    return ArrayValidator;
}(BaseValidator_1.BaseValidator));
exports.ArrayValidator = ArrayValidator;
//# sourceMappingURL=ArrayValidator.js.map