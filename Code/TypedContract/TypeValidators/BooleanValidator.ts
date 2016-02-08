/// <reference path="BaseValidator.ts" />

class BooleanValidator extends BaseValidator<boolean> {

    constructor(variableValue: boolean, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     * Checks if the variable is truthy
     * @throws RangeError if the value is not true
     */
    public IsTrue(): BooleanValidator {
        if (!this._variableValue) {
            throw new RangeError(`${this._variableName} should be true`)
        } else {
            return this;
        }
    }

    /**
     * Checks if the variable is falsey
     * @throws RangeError if the value is not false
     */
    public IsFalse(): BooleanValidator {
        if (this._variableValue) {
            throw new RangeError(`${this._variableName} should be false`)
        } else {
            return this;
        }
    }
}
