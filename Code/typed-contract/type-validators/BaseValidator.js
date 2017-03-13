"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
var BaseValidator = (function () {
    function BaseValidator(variableValue, variableName) {
        var self = this;
        self._variableValue = variableValue;
        if (variableName && variableName.length > 0) {
            self._variableName = variableName;
        }
        else {
            self._variableName = "The variable";
        }
    }
    /**
     * value returns the value that was passed into the contract
     * @returns {T}
     * @constructor
     */
    BaseValidator.prototype.value = function () {
        return this._variableValue;
    };
    /**
     * name returns the variable name that was passed into the contract
     * @returns {string}
     * @constructor
     */
    BaseValidator.prototype.name = function () {
        return this._variableName;
    };
    return BaseValidator;
}());
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=BaseValidator.js.map