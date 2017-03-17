/// <reference path="type-validators.d.ts" />
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
var base_validator_1 = require("./base-validator");
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
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthGreaterThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length < compareValue) {
            throw new RangeError(this._variableName + " should have a\n            length greater than " + compareValue + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotGreaterThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length <= compareValue) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareValue + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * isLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthGreaterOrEqualTo = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length > compareValue || this._variableValue.length === compareValue) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareValue + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotGreaterOrEqualTo = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length > compareValue || this._variableValue.length === compareValue) {
            throw new RangeError(this._variableName + " should not have a\n             length greater or equal to " + compareValue + " but is " + this._variableValue.length);
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
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthLessThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length >= compareValue) {
            throw new RangeError(this._variableName + " should have a length less than " + compareValue + " but is " + this._variableValue.length);
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
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotLessThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length <= compareValue) {
            throw new RangeError(this._variableName + " should have a length\n        not less than " + compareValue + " but is " + this._variableValue.length);
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
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthLessOrEqualThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length > compareValue) {
            throw new RangeError(this._variableName + " should have a length less or equal\n            to " + compareValue + " but is " + this._variableValue.length);
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
     * @param compareTo is a number or another array
     * @returns { IArrayValidator }
     */
    ArrayValidator.prototype.isLengthNotLessOrEqualThan = function (compareTo) {
        var compareValue = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);
        if (this._variableValue.length <= compareValue) {
            throw new RangeError(this._variableName + " should not have a\n             length less or equal to " + compareValue + " but is " + this._variableValue.length);
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
        var _loop_1 = function (i) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                count++;
            }
        };
        for (var i = 0; i < compareTo.length; i++) {
            _loop_1(i);
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
        var _loop_2 = function (i) {
            if (compareTo.some(function (elem) { return _this._variableValue[i] === elem; })) {
                count++;
            }
        };
        for (var i = 0; i < compareTo.length; i++) {
            _loop_2(i);
        }
        if (count > 0) {
            throw new RangeError(this._variableName + " should not contain the pattern " + compareTo + "\n             but the pattern is not found in " + this._variableValue);
        }
        return this;
    };
    ArrayValidator.prototype.prepareArrayForLengthComparison = function (compareTo, compareValue) {
        if (!this._variableValue.length) {
            throw new RangeError("Can't compare the values length of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (compareTo instanceof Array) {
            if (!compareTo.length) {
                throw new RangeError("Can't compare the length of uninitialized arrays, " +
                    "please append values to the array's in the instance of this TypedContract");
            }
            compareValue = compareTo.length;
        }
        else {
            compareValue = compareTo;
        }
        return compareValue;
    };
    return ArrayValidator;
}(base_validator_1.BaseValidator));
exports.ArrayValidator = ArrayValidator;
//# sourceMappingURL=array-validator.js.map