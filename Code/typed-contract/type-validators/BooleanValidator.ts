/// <reference path="TypeValidators.d.ts" />

import { BaseValidator } from "./BaseValidator";

export class BooleanValidator extends BaseValidator<boolean> {

    constructor(variableValue: boolean, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * isNull checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    public isNull(): IBooleanValidator {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        } else {
            throw new ReferenceError(`${this._variableName} should be null`);
        }
    }

    /**
     *
     * isNotNull checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    public isNotNull(): IBooleanValidator {
        if (this._variableValue == null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     * isDefined checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */
    public isDefined(): IBooleanValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * isUndefined checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */
    public isUndefined(): IBooleanValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be undefined`);
        } else {
            return this;
        }
    }

    /**
     * isNullOrUndefined checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */
    public isNullOrUndefined(): IBooleanValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be null or undefined`);
        } else {
            return this;
        }
    }
    /**
     *
     * isEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isEqualTo(compareTo: boolean): IBooleanValidator {
        if (!this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the boolean variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isNotEqualTo(compareTo: boolean): IBooleanValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the boolean ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isTrue(): IBooleanValidator {
        if (this._variableValue === false) {
            throw new RangeError(`${this._variableName} should be true`);
        } else {
            return this;
        }
    }

    /**
     *
     * isFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public isFalse(): IBooleanValidator {
        if (this._variableValue === true) {
            throw new RangeError(`${this._variableName} should be false`);
        } else {
            return this;
        }
    }
}
