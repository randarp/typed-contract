/// <reference path="BaseValidator.ts" />

class NumberValidator extends BaseValidator {
    public IsGreaterThan(compareTo:number): NumberValidator {
        return this;
    }
}
