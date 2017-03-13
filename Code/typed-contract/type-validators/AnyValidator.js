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
var AnyValidator = (function (_super) {
    __extends(AnyValidator, _super);
    function AnyValidator(variableValue, variableName) {
        return _super.call(this, variableValue, variableName) || this;
    }
    /**
     *
     * isNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNotNull = function () {
        if (this._variableValue === null) {
            throw new ReferenceError(this._variableName + " should not be null");
        }
        else {
            return this;
        }
    };
    /**
     *
     * isNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNull = function () {
        if (this._variableValue !== null) {
            throw new ReferenceError(this._variableName + " should be null");
        }
        else {
            return this;
        }
    };
    /**
     * isDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isDefined = function () {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this._variableName + " should be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isUndefined = function () {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this._variableName + " should not be defined");
        }
        else {
            return this;
        }
    };
    /**
     * isNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns { IAnyValidator }
     */
    AnyValidator.prototype.isNullOrUndefined = function () {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this._variableName + " should not be null or undefined");
        }
        else {
            return this;
        }
    };
    return AnyValidator;
}(BaseValidator_1.BaseValidator));
exports.AnyValidator = AnyValidator;
//# sourceMappingURL=AnyValidator.js.map