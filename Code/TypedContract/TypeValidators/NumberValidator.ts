/// <reference path="BaseValidator.ts" />

class NumberValidator extends BaseValidator<number> {

    constructor(variableValue: number, variableName: string) {
        super(variableValue, variableName);
    }

    public IsGreaterThan(compareTo: number): NumberValidator {
        return this;
    }
}
