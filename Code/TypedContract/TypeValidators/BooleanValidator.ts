/// <reference path="BaseValidator.ts" />

class BooleanValidator extends BaseValidator<boolean> {

    constructor(variableValue: boolean, variableName: string) {
        super(variableValue, variableName);
    }

    public IsTrue(): BooleanValidator {
        return this;
    }
}
