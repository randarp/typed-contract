/// <reference path="type-validators.d.ts" />

import { BaseValidator } from "./base-validator";

export class StringValidator extends BaseValidator<string> {

    constructor(variableValue: string, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * isNotNull checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {IStringValidator}
     */
    public isNotNull(): IStringValidator {
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
     * @returns {IStringValidator}
     */
    public isNull(): IStringValidator {

        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }

    /**
     * isDefined checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     * @returns {IStringValidator}
     */
    public isDefined(): IStringValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * isNotDefined checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     * @returns {IStringValidator}
     */
    public isUndefined(): IStringValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }


    /**
     * isNullOrUndefined checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {IStringValidator}
     */
    public isNullOrUndefined(): IStringValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * isEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isEqualTo(compareTo: string): IStringValidator {
        if (this._variableValue !== compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the string variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isNotEqualTo(compareTo: string): IStringValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the string variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isLessThan(compareTo: string): IStringValidator {
        if (this._variableValue.length > compareTo.length) {
            throw new ReferenceError(`${this._variableName} should be less than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isNotLessThan(compareTo: string): IStringValidator {
        if (this._variableValue.length < compareTo.length) {
            throw new ReferenceError(`${this._variableName} should not be less that ${compareTo} but is ${this._variableValue} `);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isLengthGreaterThan(compareTo: string): IStringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length greater
            than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isLengthGreaterOrEqualTo(compareTo: string): IStringValidator {

        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should have a length
            greater or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    /**
     *
     * isLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isLengthNotGreaterThan(compareTo: string): IStringValidator {
        if (this._variableValue.length <= compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should not have a
            length greater than ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    public isLengthNotGreaterOrEqualTo(compareTo: string): IStringValidator {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length greater or equal to ${compareTo.length}
              but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * isLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    public isLengthLessThan(compareTo: string): IStringValidator {
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * isLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    public isLengthNotLessThan(compareTo: string): IStringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * isLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    public isLengthLessOrEqualThan(compareTo: string): IStringValidator {
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(`${this._variableName} should have a
            length less or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * isLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    public isLengthNotLessOrEqualThan(compareTo: string): IStringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length less
            or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * toMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    public toMatch(regExp: any): IStringValidator {
        if (!regExp.test(this._variableValue)) {
            throw new RangeError(`${this._variableName} should match
            the pattern ${regExp} but the value of ${this._variableValue} does not match`);
        } else {
            return this;
        }
    }

    /**
     *
     * toNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    public toNotMatch(regExp: RegExp): IStringValidator {
        if (regExp.test(this._variableValue)) {
            throw new RangeError(`${this._variableName} should not match
            the pattern ${regExp} but the value of ${this._variableValue} matches`);
        } else {
            return this;
        }
    }

    /**
     *
     * contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    public contains(compareTo: string): IStringValidator {
        if (this._variableValue.length === 0 && compareTo.length === 0) {
            return this;
        }
        if (compareTo.length === 0 || this._variableValue.indexOf(compareTo) <= -1) {
            throw new RangeError(`${this._variableName} should contain
           the pattern ${compareTo} but the pattern is not found in ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * notContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    public notContains(compareTo: string): IStringValidator {

        if (this._variableValue.indexOf(compareTo) > -1) {
            throw new RangeError(`${this._variableName} should not contain
           the pattern ${compareTo} but the pattern is found in ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * startsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    public startsWith(compareTo: string): IStringValidator {

        if ((this._variableValue).lastIndexOf(compareTo, 0) === 0) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should start with ${this._variableValue}, but ${compareTo} does not`);
        }
    }

    /**
     *
     * notStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    public notStartsWith(compareTo: string): IStringValidator {

        if ((this._variableValue).lastIndexOf(compareTo, 0) !== 0) {
            throw new RangeError(`${this._variableName} should not start with ${compareTo} but ${this._variableValue} does not`);
        } else {
            return this;
        }
    }

    /**
     *
     * endsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    public endsWith(compareTo: string): IStringValidator {
        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) === -1) {
            throw new RangeError(`${this._variableName} should end with ${compareTo}, but ${this._variableValue} does not`);
        } else {
            return this;
        }
    }

    /**
     *
     * notEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    public notEndsWith(compareTo: string): IStringValidator {

        if ((this._variableValue).indexOf(compareTo, (this._variableValue).length - compareTo.length) !== -1) {
            throw new RangeError(`${this._variableName} should not end with ${compareTo}, but ${this._variableValue} does not`);
        } else {
            return this;
        }
    }

    /**
     *
     * isBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    public isBetween(startRange: string, endRange: string): IStringValidator {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should be between
            ${startRange} and ${endRange}, but the value of
            ${this._variableValue} is not in that range`);
        }
    }

    /**
     *
     * isNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    public isNotBetween(startRange: string, endRange: string): IStringValidator {
        if (this._variableValue >= startRange && this._variableValue <= endRange) {
            throw new RangeError(`${this._variableName} should not be between
            ${startRange} and ${endRange}, but the value of ${this._variableValue} is in that range`);
        } else {
           return this;
        }
    }
}