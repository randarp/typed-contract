/// <reference path="BaseValidator.ts" />

class ArrayValidator extends BaseValidator<any[]> {

    constructor(variableValue: any[], variableName: string) {
        super(variableValue, variableName);
    }

    public IsEmpty(): ArrayValidator {
        return this;
    }
}
