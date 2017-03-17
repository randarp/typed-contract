"use strict";
exports.__esModule = true;
/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
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
    /**
     * Will return either the custom message passed in or the default message
     * @param optionalMessage
     * @param defaultMessage
     * @returns {string}
     */
    BaseValidator.prototype.validationMessage = function (optionalMessage, defaultMessage) {
        if (optionalMessage && optionalMessage.length > 0) {
            return optionalMessage.replace("$var", this._variableName);
        }
        else {
            return defaultMessage;
        }
    };
    return BaseValidator;
}());
exports.BaseValidator = BaseValidator;
//# sourceMappingURL=base-validator.js.map