"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basevalidator = require("./BaseValidator");
var BooleanValidator = (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    /**
     *
     * IsNull checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    BooleanValidator.prototype.IsNull = function () {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        }
        else {
            throw new ReferenceError(this._variableName + " should be null");
        }
    };
    /**
     *
     * IsNotNull checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    BooleanValidator.prototype.IsNotNull = function () {
        if (this._variableValue == null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     * IsDefined checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {BooleanValidator}
     */
    BooleanValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsUndefined checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {BooleanValidator}
     */
    BooleanValidator.prototype.IsUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be undefined");
        }
        else {
            return this;
        }
    };
    /**
     * IsNullOrUndefined checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {BooleanValidator}
     */
    BooleanValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should be null or undefined");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {BooleanValidator}
     */
    BooleanValidator.prototype.IsEqualTo = function (compareTo) {
        if (!this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should be equal to the boolean variable " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {BooleanValidator}
     */
    BooleanValidator.prototype.IsNotEqualTo = function (compareTo) {
        if (this._variableValue === compareTo) {
            throw new RangeError(this._variableName + " should not be equal to the boolean " + compareTo);
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {BooleanValidator}
     */
    BooleanValidator.prototype.IsTrue = function () {
        if (this._variableValue === false) {
            throw new RangeError(this._variableName + " should be true");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {BooleanValidator}
     */
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
}(basevalidator.BaseValidator));
exports.BooleanValidator = BooleanValidator;
//# sourceMappingURL=BooleanValidator.js.map