/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
export class BaseValidator<T> {
    protected _variableValue: T;
    protected _variableName: string;

    constructor(variableValue: T, variableName: string) {
        this._variableValue = variableValue;

        if (variableName && variableName.length > 0) {
            this._variableName = variableName;
        } else {
            this._variableName = "The variable";
        }
    }

    /**
     * value returns the value that was passed into the contract
     * @returns {T}
     * @constructor
     */
    public value(): T {
        return this._variableValue;
    }

    /**
     * name returns the variable name that was passed into the contract
     * @returns {string}
     * @constructor
     */
    public name(): string {
        return this._variableName;
    }

    /**
     * Will return either the custom message passed in or the default message
     * @param optionalMessage
     * @param defaultMessage
     * @returns {string}
     */
    protected validationMessage(optionalMessage: string, defaultMessage: string) {
        if (optionalMessage && optionalMessage.length > 0) {
            return optionalMessage.replace("$var", this._variableName);
        } else {
            return defaultMessage;
        }
    }
}