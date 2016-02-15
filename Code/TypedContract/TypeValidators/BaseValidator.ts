/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
class BaseValidator <T> {
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
     * Returns the value that was passed into the contract
     * @returns {T}
     * @constructor
     */
    public Value(): T {
        return this._variableValue;
    }

    public Name(): string {
        return this._variableName;
    }
}
