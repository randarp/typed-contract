/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
export class BaseValidator<T> {
    protected _variableValue: T;
    protected _variableName: string;

    constructor(variableValue: T, variableName: string) {
        var self = this;

        self._variableValue = variableValue;

        if (variableName && variableName.length > 0) {
            self._variableName = variableName;
        } else {
            self._variableName = "The variable";
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
}