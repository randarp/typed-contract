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
var AnyValidator = (function (_super) {
    __extends(AnyValidator, _super);
    function AnyValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNotNull checks if the type any variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the any is null
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNotNull = function (message) {
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
     * isNull checks if the any variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNull = function (message) {
        if (message === void 0) { message = null; }
        if (this._variableValue !== null) {
            throw new ReferenceError(this.validationMessage(message, this._variableName + " should be null"));
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the any variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the any variable jis not defined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isDefined = function (message) {
        if (message === void 0) { message = null; }
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the any variable is undefined
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the any variable is undefined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isUndefined = function (message) {
        if (message === void 0) { message = null; }
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the any variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the any variable is null or undefined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNullOrUndefined = function (message) {
        if (message === void 0) { message = null; }
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    return AnyValidator;
}(base_validator_1.BaseValidator));
exports.AnyValidator = AnyValidator;
//# sourceMappingURL=any-validator.js.map