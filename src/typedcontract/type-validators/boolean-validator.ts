/// <reference path="type-validators.d.ts" />

import { BaseValidator } from "./base-validator";

export class BooleanValidator extends BaseValidator<boolean> implements IBooleanValidator {

    constructor(variableValue: boolean, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     * isNull checks if the boolean variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     */
    public isNull(message?: string): IBooleanValidator {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        } else {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be null`));
        }
    }

    /**
     * isNotNull checks if the boolean variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is null
     */
    public isNotNull(message?: string): IBooleanValidator {
        if (this._variableValue == null) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should not be null`));
        } else {
            return this;
        }
    }

    /**
     * isDefined checks if the boolean variable is defined
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */
    public isDefined(message?: string): IBooleanValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be defined`));
        } else {
            return this;
        }
    }

    /**
     * isUndefined checks if the boolean variable is undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */
    public isUndefined(message?: string): IBooleanValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be undefined`));
        } else {
            return this;
        }
    }

    /**
     * isNullOrUndefined checks if the boolean variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */
    public isNullOrUndefined(message?: string): IBooleanValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be null or undefined`));
        } else {
            return this;
        }
    }
    /**
     *
     * isEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isEqualTo(compareTo: boolean, message?: string): IBooleanValidator {
        if (!this._variableValue === compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be equal to the boolean variable ${compareTo}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isNotEqualTo(compareTo: boolean, message?: string): IBooleanValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not be equal to the boolean ${compareTo}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isTrue checks if the boolean variable is true
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isTrue(message?: string): IBooleanValidator {
        if (this._variableValue === false) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be true`));
        } else {
            return this;
        }
    }

    /**
     *
     * isFalse checks if the boolean variable is false
     * @param message is an optional message if validation fails
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isFalse(message?: string): IBooleanValidator {
        if (this._variableValue === true) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be false`));
        } else {
            return this;
        }
    }
}
