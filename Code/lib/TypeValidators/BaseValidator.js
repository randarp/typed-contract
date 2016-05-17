/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
"use strict";
var BaseValidator = (function () {
    function BaseValidator(variableValue, variableName) {
        this._variableValue = variableValue;
        if (variableName && variableName.length > 0) {
            this._variableName = variableName;
        }
        else {
            this._variableName = "The variable";
        }
    }
    /**
     * Value returns the value that was passed into the contract
     * @returns {T}
     * @constructor
     */
    BaseValidator.prototype.Value = function () {
        return this._variableValue;
    };
    /**
     * Name returns the variable name that was passed into the contract
     * @returns {string}
     * @constructor
     */
    BaseValidator.prototype.Name = function () {
        return this._variableName;
    };
    return BaseValidator;
}());
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=BaseValidator.js.map