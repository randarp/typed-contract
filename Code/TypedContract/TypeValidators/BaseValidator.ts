/**
 * Encapsulates any validators that apply to every type and state used by the validation chain.
 */
class BaseValidator<T> {
    protected _variableValue: T;
    protected _variableName: string;

    constructor(variableValue: T, variableName: string) {

        this._variableValue = variableValue;
        this._variableName = variableName;
    }
}
