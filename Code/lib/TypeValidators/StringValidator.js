"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basevalidator = require("./BaseValidator");
var StringValidator = (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    /**
     *
     * IsNotNull checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsNotNull = function () {
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
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     * IsDefined checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsNotDefined checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsNullOrUndefined checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsEqualTo = function (compareTo) {
        if (this._variableValue !== compareTo) {
            throw new RangeError(this._variableName + " should be equal to the string variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the string variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsLessThan = function (compareTo) {
        if (this._variableValue.length > compareTo.length) {
            throw new ReferenceError(this._variableName + " should be less than " + compareTo + " but is " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsNotLessThan = function (compareTo) {
        if (this._variableValue.length < compareTo.length) {
            throw new ReferenceError(this._variableName + " should not be less that " + compareTo + " but is " + this._variableValue + " ");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsLengthGreaterThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length greater\n            than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsLengthGreaterOrEqualTo = function (compareTo) {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should have a length\n            greater or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * IsLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsLengthNotGreaterThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length);
        }
    };
    /**
     *
     * IsLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsLengthNotGreaterOrEqualTo = function (compareTo) {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length greater or equal to " + compareTo.length + "\n              but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * IsLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    StringValidator.prototype.IsLengthLessThan = function (compareTo) {
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(this._variableName + " should have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * IsLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    StringValidator.prototype.IsLengthNotLessThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * IsLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    StringValidator.prototype.IsLengthLessOrEqualThan = function (compareTo) {
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(this._variableName + " should have a\n            length less or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     * IsLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    StringValidator.prototype.IsLengthNotLessOrEqualThan = function (compareTo) {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this._variableName + " should not have a length less\n            or equal to " + compareTo.length + " but is " + this._variableValue.length);
        }
        else {
            return this;
        }
    };
    /**
     *
     * ToMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {StringValidator}
     */
    StringValidator.prototype.ToMatch = function (regExp) {
        if (!regExp.test(this._variableValue)) {
            throw new RangeError(this._variableName + " should match\n            the pattern " + regExp + " but the value of " + this._variableValue + " does not match");
        }
        else {
            return this;
        }
    };
    /**
     *
     * ToNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {StringValidator}
     */
    StringValidator.prototype.ToNotMatch = function (regExp) {
        if (regExp.test(this._variableValue)) {
            throw new RangeError(this._variableName + " should not match\n            the pattern " + regExp + " but the value of " + this._variableValue + " matches");
        }
        else {
            return this;
        }
    };
    /**
     *
     * Contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.Contains = function (compareTo) {
        if (this._variableValue.length === 0 && compareTo.length === 0) {
            return this;
        }
        if (compareTo.length === 0 || this._variableValue.indexOf(compareTo) <= -1) {
            throw new RangeError(this._variableName + " should contain\n           the pattern " + compareTo + " but the pattern is not found in " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * NotContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.NotContains = function (compareTo) {
        if (this._variableValue.indexOf(compareTo) > -1) {
            throw new RangeError(this._variableName + " should not contain\n           the pattern " + compareTo + " but the pattern is found in " + this._variableValue);
        }
        else {
            return this;
        }
    };
    /**
     *
     * StartsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.StartsWith = function (compareTo) {
        if ((this._variableValue).lastIndexOf(compareTo, 0) === 0) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should start with " + this._variableValue + ", but " + compareTo + " does not");
        }
    };
    /**
     *
     * NotStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.NotStartsWith = function (compareTo) {
        if ((this._variableValue).lastIndexOf(compareTo, 0) !== 0) {
            throw new RangeError(this._variableName + " should not start with " + compareTo + " but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    /**
     *
     * EndsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.EndsWith = function (compareTo) {
        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) === -1) {
            throw new RangeError(this._variableName + " should end with " + compareTo + ", but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    /**
     *
     * NotEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @returns {StringValidator}
     */
    StringValidator.prototype.NotEndsWith = function (compareTo) {
        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) !== -1) {
            throw new RangeError(this._variableName + " should not end with " + compareTo + ", but " + this._variableValue + " does not");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsBetween = function (startRange, endRange) {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            return this;
        }
        else {
            throw new RangeError(this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range");
        }
    };
    /**
     *
     * IsNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {StringValidator}
     */
    StringValidator.prototype.IsNotBetween = function (startRange, endRange) {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            throw new RangeError(this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range");
        }
        else {
            return this;
        }
    };
    return StringValidator;
}(basevalidator.BaseValidator));
exports.StringValidator = StringValidator;
//# sourceMappingURL=StringValidator.js.map