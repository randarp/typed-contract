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
var StringValidator = (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     * isNotNull checks if the string variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is null
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotNull = function (message) {
        if (message === void 0) { message = null; }
        if (this._variableValue === null) {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should not be null"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNull checks if the string variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNull = function (message) {
        if (message === void 0) { message = null; }
        if (this._variableValue !== null) {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be null"));
        }
        else {
            return this;
        }
    };
    /**
     * Checks if a string is only whitespace
     * @param message is an optional message if validation fails
     * @returns {StringValidator}
     */
    StringValidator.prototype.isWhitespace = function (message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.replace(/^\s+/, "").replace(/\s+$/, "") === "") {
            return this;
        }
        else {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be all whitespace"));
        }
    };
    /**
     * Checks if a string is not only whitespace
     * @param message is an optional message if validation fails
     * @returns {StringValidator}
     */
    StringValidator.prototype.isNotWhitespace = function (message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.replace(/^\s+/, "").replace(/\s+$/, "") === "") {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be all whitespace"));
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the string variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the string is not defined
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isDefined = function (message) {
        if (message === void 0) { message = null; }
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be defined"));
        }
        else {
            return this;
        }
    };
    /**
     * isNotDefined checks if the string variable is not defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if variable is defined
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isUndefined = function (message) {
        if (message === void 0) { message = null; }
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should not be defined"));
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if a string variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNullOrUndefined = function (message) {
        if (message === void 0) { message = null; }
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should not be null or undefined"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isEqualTo = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue !== compareTo) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should be equal to the string variable " + compareTo));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotEqualTo = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue === compareTo) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not be equal to the string variable " + compareTo));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLessThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length > compareTo.length) {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be less than " + compareTo + " but is " + this._variableValue));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotLessThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length < compareTo.length) {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should not be less that " + compareTo + " but is " + this._variableValue + " "));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthGreaterThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should have a length greater\n            than " + compareTo.length + " but is " + this._variableValue.length));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthGreaterOrEqualTo = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this.validationMessage(message, this._variableName + " should have a length\n            greater or equal to " + compareTo.length + " but is " + this._variableValue.length));
        }
    };
    /**
     *
     * isLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthNotGreaterThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length <= compareTo.length) {
            return this;
        }
        else {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not have a\n            length greater than " + compareTo.length + " but is " + this._variableValue.length));
        }
    };
    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isLengthNotGreaterOrEqualTo = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not have a length greater or equal to " + compareTo.length + "\n              but is " + this._variableValue.length));
        }
        else {
            return this;
        }
    };
    /**
     * isLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthLessThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length));
        }
        else {
            return this;
        }
    };
    /**
     * isLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthNotLessThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not have a length\n        less than " + compareTo.length + " but is " + this._variableValue.length));
        }
        else {
            return this;
        }
    };
    /**
     * isLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthLessOrEqualThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should have a\n            length less or equal to " + compareTo.length + " but is " + this._variableValue.length));
        }
        else {
            return this;
        }
    };
    /**
     * isLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     *
     */
    StringValidator.prototype.isLengthNotLessOrEqualThan = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not have a length less\n            or equal to " + compareTo.length + " but is " + this._variableValue.length));
        }
        else {
            return this;
        }
    };
    /**
     *
     * toMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.toMatch = function (regExp, message) {
        if (message === void 0) { message = null; }
        if (!regExp.test(this._variableValue)) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should match\n            the pattern " + regExp + " but the value of " + this._variableValue + " does not match"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * toNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.toNotMatch = function (regExp, message) {
        if (message === void 0) { message = null; }
        if (regExp.test(this._variableValue)) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not match\n            the pattern " + regExp + " but the value of " + this._variableValue + " matches"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.contains = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.length === 0 && compareTo.length === 0) {
            return this;
        }
        if (compareTo.length === 0 || this._variableValue.indexOf(compareTo) <= -1) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should contain\n           the pattern " + compareTo + " but the pattern is not found in " + this._variableValue));
        }
        else {
            return this;
        }
    };
    /**
     *
     * notContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.notContains = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue.indexOf(compareTo) > -1) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not contain\n           the pattern " + compareTo + " but the pattern is found in " + this._variableValue));
        }
        else {
            return this;
        }
    };
    /**
     *
     * startsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.startsWith = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if ((this._variableValue).lastIndexOf(compareTo, 0) === 0) {
            return this;
        }
        else {
            throw new RangeError(this.validationMessage(message, this._variableName + " should start with " + this._variableValue + ", but " + compareTo + " does not"));
        }
    };
    /**
     *
     * notStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.notStartsWith = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if ((this._variableValue).lastIndexOf(compareTo, 0) !== 0) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not start with " + compareTo + " but " + this._variableValue + " does not"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * endsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.endsWith = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) === -1) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should end with " + compareTo + ", but " + this._variableValue + " does not"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * notEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.notEndsWith = function (compareTo, message) {
        if (message === void 0) { message = null; }
        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) !== -1) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not end with " + compareTo + ", but " + this._variableValue + " does not"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange
     * @param endRange
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isBetween = function (startRange, endRange, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            return this;
        }
        else {
            throw new RangeError(this.validationMessage(message, this._variableName + " should be between\n            " + startRange + " and " + endRange + ", but the value of\n            " + this._variableValue + " is not in that range"));
        }
    };
    /**
     *
     * isNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange
     * @param endRange
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    StringValidator.prototype.isNotBetween = function (startRange, endRange, message) {
        if (message === void 0) { message = null; }
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not be between\n            " + startRange + " and " + endRange + ", but the value of " + this._variableValue + " is in that range"));
        }
        else {
            return this;
        }
    };
    return StringValidator;
}(base_validator_1.BaseValidator));
exports.StringValidator = StringValidator;
//# sourceMappingURL=string-validator.js.map