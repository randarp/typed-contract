/// <reference path="BaseValidator.ts" />

class ObjectValidator<T> extends BaseValidator<T> {

    constructor(variableValue: T, variableName: string) {
        super(variableValue, variableName);
    }

    public IsNotNull(): ObjectValidator<T> {
        return this;
    }

    public IsExpectedType(): ObjectValidator<T> {
        return this;
    }
}
