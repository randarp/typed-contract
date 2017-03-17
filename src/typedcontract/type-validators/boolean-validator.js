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
exports.__esModule = true;
var base_validator_1 = require("./base-validator");
var BooleanValidator = (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     * isNull checks if the boolean variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     */
    BooleanValidator.prototype.isNull = function (message) {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        }
        else {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be null"));
        }
    };
    /**
     * isNotNull checks if the boolean variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is null
     */
    BooleanValidator.prototype.isNotNull = function (message) {
        if (this._variableValue == null) {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should not be null"));
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the boolean variable is defined
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isDefined = function (message) {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be defined"));
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the boolean variable is undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isUndefined = function (message) {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be undefined"));
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the boolean variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isNullOrUndefined = function (message) {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be null or undefined"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isEqualTo = function (compareTo, message) {
        if (!this._variableValue === compareTo) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should be equal to the boolean variable " + compareTo));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isNotEqualTo = function (compareTo, message) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should not be equal to the boolean " + compareTo));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isTrue checks if the boolean variable is true
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isTrue = function (message) {
        if (this._variableValue === false) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should be true"));
        }
        else {
            return this;
        }
    };
    /**
     *
     * isFalse checks if the boolean variable is false
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    BooleanValidator.prototype.isFalse = function (message) {
        if (this._variableValue === true) {
            throw new RangeError(this.validationMessage(message, this._variableName + " should be false"));
        }
        else {
            return this;
        }
    };
    return BooleanValidator;
}(base_validator_1.BaseValidator));
exports.BooleanValidator = BooleanValidator;
//# sourceMappingURL=boolean-validator.js.map