/// <reference path="BaseValidator.ts" />

class StringValidator extends BaseValidator<string> {

    constructor(variableValue: string, variableName: string) {
        super(variableValue, variableName);
    }

    public IsNotNull(): StringValidator {
        return this;
    }
}
