/// <reference path="BaseValidator.ts" />

class StringValidator extends BaseValidator {
    public IsNotNull(): StringValidator {
        return this;
    }
}
