/// <reference path="type-validators.d.ts" />

import {BaseValidator} from "./base-validator";

export class NumberValidator extends BaseValidator<number> implements INumberValidator {

    constructor(variableValue:number, variableName:string) {
        super(variableValue, variableName);
    }

    /**
     * isNotNull checks if the type number variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is null
     * @returns {INumberValidator}
     */
    public isNotNull(message?: string): INumberValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should not be null`));
        } else {
            return this;
        }
    }

    /**
     *
     * isNull checks if the string variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     * @returns {INumberValidator}
     */
    public isNull(message?: string): INumberValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be null`));
        } else {
            return this;
        }
    }

    /**
     * isDefined checks if the number variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the number variable jis not defined
     * @returns {INumberValidator}
     */
    public isDefined(message?: string): INumberValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be defined`));
        } else {
            return this;
        }
    }

    /**
     * isUndefined checks if the number variable is undefined
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the number variable is undefined
     * @returns {INumberValidator}
     */
    public isUndefined(message?: string): INumberValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should not be defined`));
        } else {
            return this;
        }
    }

    /**
     * isNullOrUndefined checks if the number variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {INumberValidator}
     */
    public isNullOrUndefined(message?: string): INumberValidator {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should not be null or undefined`));
        } else {
            return this;
        }
    }

    /**
     * isEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @returns {INumberValidator}
     */
    public isEqualTo(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue !== compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be equal to the number variable ${compareTo}`));
        } else {
            return this;
        }

    }

    /**
     *
     * isNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @returns {INumberValidator}
     */
    public isNotEqualTo(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not be equal to the number variable ${compareTo}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isGreaterThan(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue < compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be greater than ${compareTo} but is ${this._variableValue}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isNotGreaterThan(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue > compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not be greater than ${compareTo} but is ${this._variableValue}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isGreaterOrEqualThan(compareTo:number, message?: string): INumberValidator {

        if (this._variableValue < compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be greater than ${compareTo} but is ${this._variableValue}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
     * parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isNotGreaterOrEqualThan(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue > compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not be greater or equal to ${compareTo} but is ${this._variableValue}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isLessThan(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue >= compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be less than ${compareTo} but is ${this._variableValue}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isNotLessThan(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not be less than ${compareTo} but is ${this._variableValue}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isLessOrEqualThan(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue > compareTo) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be less or equal than ${compareTo} but is ${this._variableName}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {INumberValidator}
     */
    public isNotLessOrEqualThan(compareTo:number, message?: string): INumberValidator {
        if (this._variableValue <= compareTo) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not be less or equal
                 than ${compareTo} but is ${this._variableValue}`));
        } else {
            return this;
        }
    }

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
     * @param startRange
     * @param endRange
     * @param message is an optional message if validation fails
     * @returns {NumberValidator}
     */
    public isBetween(startRange:number, endRange:number, message?: string): INumberValidator {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            return this;
        } else {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be between
            ${startRange} and ${endRange}, but the value of
            ${this._variableValue} is not in that range`));
        }

    }

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
     * @param startRange
     * @param endRange
     * @param message is an optional message if validation fails
     * @returns {NumberValidator}
     */
    public isNotBetween(startRange:number, endRange:number, message?: string): INumberValidator {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not be between
            ${startRange} and ${endRange}, but the value of ${this._variableValue} is in that range`));
        } else {
            return this;
        }
    }
}