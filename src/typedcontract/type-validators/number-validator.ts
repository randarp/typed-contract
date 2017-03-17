/// <reference path="type-validators.d.ts" />

import {BaseValidator} from "./base-validator";

export class NumberValidator extends BaseValidator<number> implements INumberValidator {

    constructor(variableValue:number, variableName:string) {
        super(variableValue, variableName);
    }

    /**
     *
     * isNotNull checks if the type number variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {INumberValidator}
     */
    public isNotNull(): INumberValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {INumberValidator}
     */
    public isNull(): INumberValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }

    /**
     * isDefined checks if the number variable is defined
     * @throws ReferenceError if the number variable jis not defined
     * @returns {INumberValidator}
     */
    public isDefined(): INumberValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * isUndefined checks if the number variable is undefined
     * @throws a ReferenceError if the number variable is undefined
     * @returns {INumberValidator}
     */
    public isUndefined(): INumberValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    /**
     * isNullOrUndefined checks if the number variable is not null or undefined
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {INumberValidator}
     */
    public isNullOrUndefined(): INumberValidator {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * isEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isEqualTo(compareTo:number): INumberValidator {
        if (this._variableValue !== compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the number variable ${compareTo}`);
        } else {
            return this;
        }

    }

    /**
     *
     * isNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isNotEqualTo(compareTo:number): INumberValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the number variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isGreaterThan(compareTo:number): INumberValidator {
        if (this._variableValue < compareTo) {
            throw new RangeError(`${this._variableName} should be greater than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isNotGreaterThan(compareTo:number): INumberValidator {
        if (this._variableValue > compareTo) {
            throw new RangeError(`${this._variableName} should not be greater than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isGreaterOrEqualThan(compareTo:number): INumberValidator {

        if (this._variableValue < compareTo) {
            throw new RangeError(`${this._variableName} should be greater than ${compareTo} but is ${this._variableValue}`);
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
     * @returns {INumberValidator}
     */
    public isNotGreaterOrEqualThan(compareTo:number): INumberValidator {
        if (this._variableValue > compareTo) {
            throw new RangeError(`${this._variableName} should not be greater or equal to ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isLessThan(compareTo:number): INumberValidator {
        if (this._variableValue >= compareTo) {
            throw new RangeError(`${this._variableName} should be less than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isNotLessThan(compareTo:number): INumberValidator {
        if (this._variableValue <= compareTo) {
            throw new RangeError(`${this._variableName} should not be less than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isLessOrEqualThan(compareTo:number): INumberValidator {
        if (this._variableValue > compareTo) {
            throw new ReferenceError(`${this._variableName} should be less or equal than ${compareTo} but is ${this._variableName}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    public isNotLessOrEqualThan(compareTo:number): INumberValidator {
        if (this._variableValue <= compareTo) {
            throw new RangeError(`${this._variableName} should not be less or equal
                 than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     */
    public isBetween(startRange:number, endRange:number): INumberValidator {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should be between
            ${startRange} and ${endRange}, but the value of
            ${this._variableValue} is not in that range`);
        }

    }

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     */
    public isNotBetween(startRange:number, endRange:number): INumberValidator {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            throw new RangeError(`${this._variableName} should not be between
            ${startRange} and ${endRange}, but the value of ${this._variableValue} is in that range`);
        } else {
            return this;
        }
    }
}