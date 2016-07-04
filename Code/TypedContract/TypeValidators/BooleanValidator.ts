/// <reference path="TypeValidators.d.ts" />

import { BaseValidator } from "./BaseValidator";

export class BooleanValidator extends BaseValidator<boolean> {

    constructor(variableValue: boolean, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * IsNull checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    public IsNull(): IBooleanValidator {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        } else {
            throw new ReferenceError(`${this._variableName} should be null`);
        }
    }

    /**
     *
     * IsNotNull checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    public IsNotNull(): IBooleanValidator {
        if (this._variableValue == null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     * IsDefined checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */

    public IsDefined(): IBooleanValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsUndefined checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */

    public IsUndefined(): IBooleanValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be undefined`);
        } else {
            return this;
        }
    }

    /**
     * IsNullOrUndefined checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */

    public IsNullOrUndefined(): IBooleanValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be null or undefined`);
        } else {
            return this;
        }
    }
    /**
     *
     * IsEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public IsEqualTo(compareTo: boolean): IBooleanValidator {
        if (!this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the boolean variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */

    public IsNotEqualTo(compareTo: boolean): IBooleanValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the boolean ${compareTo}`);
        } else {
            return this;
        }
    }
    /**
     *
     * IsTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    public IsTrue(): IBooleanValidator {
        if (this._variableValue === false) {
            throw new RangeError(`${this._variableName} should be true`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {IBooleanValidator}
     */

    public IsFalse(): IBooleanValidator {
        if (this._variableValue === true) {
            throw new RangeError(`${this._variableName} should be false`);
        } else {
            return this;
        }
    };
}
