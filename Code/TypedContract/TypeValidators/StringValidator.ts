/// <reference path="../TypeValidators/BaseValidator.ts" />

class StringValidator extends BaseValidator<string> {

    constructor(variableValue: string, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * IsNotNull checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {StringValidator}
     */

    public IsNotNull(): StringValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {StringValidator}
     */

    public IsNull(): StringValidator {

        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }

    /**
     * IsDefined checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     * @returns {StringValidator}
     */

    public IsDefined(): StringValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsNotDefined checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     * @returns {StringValidator}
     */

    public IsUndefined(): StringValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }


    /**
     * IsNullOrUndefined checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {StringValidator}
     */
    public IsNullOrUndefined(): StringValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    public IsEqualTo(compareTo: string): StringValidator {
        if (this._variableValue !== compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the string variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsNotEqualTo(compareTo: string): StringValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the string variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsLessThan(compareTo: string): StringValidator {
        if (this._variableValue.length > compareTo.length) {
            throw new ReferenceError(`${this._variableName} should be less than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsNotLessThan(compareTo: string): StringValidator {
        if (this._variableValue.length < compareTo.length) {
            throw new ReferenceError(`${this._variableName} should not be less that ${compareTo} but is ${this._variableValue} `);
        } else {
            return this;
        }
    }

    /**
     *
     * IsLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsLengthGreaterThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length greater
            than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsLengthGreaterOrEqualTo(compareTo: string): StringValidator {

        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should have a length
            greater or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    /**
     *
     * IsLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsLengthNotGreaterThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should not have a
            length greater than ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    /**
     *
     * IsLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsLengthNotGreaterOrEqualTo(compareTo: string): StringValidator {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length greater or equal to ${compareTo.length}
              but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * IsLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */

    public IsLengthLessThan(compareTo: string): StringValidator {
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * IsLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */

    public IsLengthNotLessThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * IsLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */

    public IsLengthLessOrEqualThan(compareTo: string): StringValidator {
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(`${this._variableName} should have a
            length less or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     * IsLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */

    public IsLengthNotLessOrEqualThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length less
            or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * ToMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {StringValidator}
     */

    public ToMatch(regExp: any): StringValidator {
        if (!regExp.test(this._variableValue)) {
            throw new RangeError(`${this._variableName} should match
            the pattern ${regExp} but the value of ${this._variableValue} does not match`);
        } else {
            return this;
        }
    }

    /**
     *
     * ToNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {StringValidator}
     */

    public ToNotMatch(regExp: RegExp): StringValidator {
        if (regExp.test(this._variableValue)) {
            throw new RangeError(`${this._variableName} should not match
            the pattern ${regExp} but the value of ${this._variableValue} matches`);
        } else {
            return this;
        }
    }

    /**
     *
     * Contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @returns {StringValidator}
     */

    public Contains(compareTo: string): StringValidator {
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
     * NotContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @returns {StringValidator}
     */

    public NotContains(compareTo: string): StringValidator {

        if (this._variableValue.indexOf(compareTo) > -1) {
            throw new RangeError(`${this._variableName} should not contain
           the pattern ${compareTo} but the pattern is found in ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * StartsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {StringValidator}
     */
    public StartsWith(compareTo: string): StringValidator {

        if ((<any>this._variableValue).startsWith(compareTo)) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should start with ${this._variableValue}, but ${compareTo} does not`);
        }
    }

    /**
     *
     * NotStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {StringValidator}
     */

    public NotStartsWith(compareTo: string): StringValidator {

        if ((<any>this._variableValue).startsWith(compareTo)) {
            throw new RangeError(`${this._variableName} should not start with ${compareTo} but ${this._variableValue} does not`);
        } else {
            return this;
        }
    }

    /**
     *
     * EndsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @returns {StringValidator}
     */

    public EndsWith(compareTo: string): StringValidator {

        if (!(<any>this._variableValue).endsWith(compareTo)) {
            throw new RangeError(`${this._variableName} should end with ${compareTo}, but ${this._variableValue} does not`);
        } else {
            return this;
        }
    }

    /**
     *
     * NotEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @returns {StringValidator}
     */

    public NotEndsWith(compareTo: string): StringValidator {

        if ((<any>this._variableValue).endsWith(compareTo)) {
            throw new RangeError(`${this._variableName} should not end with ${compareTo}, but ${this._variableValue} does not`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {StringValidator}
     */

    public IsBetween(startRange: string, endRange: string): StringValidator {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should be between
            ${startRange} and ${endRange}, but the value of
            ${this._variableValue} is not in that range`);
        }
    }

    /**
     *
     * IsNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {StringValidator}
     */

    public IsNotBetween(startRange: string, endRange: string): StringValidator {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            throw new RangeError(`${this._variableName} should not be between
            ${startRange} and ${endRange}, but the value of ${this._variableValue} is in that range`);
        } else {
           return this;
        }
    }
}