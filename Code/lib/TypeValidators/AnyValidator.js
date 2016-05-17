"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var basevalidator = require("./BaseValidator");
var AnyValidator = (function (_super) {
    __extends(AnyValidator, _super);
    function AnyValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    /**
     *
     * IsNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns {AnyValidator}
     */
    AnyValidator.prototype.IsNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * IsNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {AnyValidator}
     */
    AnyValidator.prototype.IsNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     * IsDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns {AnyValidator}
     */
    AnyValidator.prototype.IsDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns {AnyValidator}
     */
    AnyValidator.prototype.IsUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * IsNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns {AnyValidator}
     */
    AnyValidator.prototype.IsNullOrUndefined = function () {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    return AnyValidator;
}(basevalidator.BaseValidator));
exports.AnyValidator = AnyValidator;
//# sourceMappingURL=AnyValidator.js.map