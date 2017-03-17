/// <reference path="type-validators.d.ts" />

import { BaseValidator } from "./base-validator";

export class ArrayValidator extends BaseValidator <any[]> implements IArrayValidator {
    constructor(variableValue: any[], variableName: string) {
        super(variableValue, variableName);
    }

    /**
     * isNull Checks if the array variable is null
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the variable is not null
     * @returns { IArrayValidator }
     */
    public isNull(message: string = null): IArrayValidator {

        if (this._variableValue !== null) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be null`));
        } else {
            return this;
        }
    }

    /**
     * isNotNull checks if the array variable is not null
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the variable is null
     * @returns { IArrayValidator }
     */
    public isNotNull(message: string = null): IArrayValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should not be null`));
        } else {
            return this;
        }
    }

    /**
     * isDefined checks if the array variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the array variable is undefined
     * @returns { IArrayValidator }
     */
    public isDefined(message: string = null): IArrayValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be defined`));
        } else {
            return this;
        }
    }

    /**
     * isUndefined checks if the array variable is undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the array variable is defined
     * @returns { IArrayValidator }
     */
    public isUndefined(message: string = null): IArrayValidator {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be undefined`));
        } else {
            return this;
        }
    }

    /**
     * isNullOrUndefined checks if the array variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { IArrayValidator }
     */
    public isNullOrUndefined(message: string = null): IArrayValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(this.validationMessage(message, `${this._variableName} should be null or undefined`));
        } else {
            return this;
        }
    }

    /**
     *
     * isEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator }
     */
    public isEqualTo(compareTo: any[], index: number, message: string = null): IArrayValidator {
        if (!compareTo.length || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] !== compareTo[index]) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isNotEqualTo(compareTo: any[], index: number, message: string = null): IArrayValidator {
        if (!compareTo.length  || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                " please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthGreaterThan(compareTo: any[] | number, message: string = null): IArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length < compareValue) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should have a
            length greater than ${compareValue} but is ${this._variableValue.length}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthNotGreaterThan(compareTo: any[] | number, message: string = null): IArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length <= compareValue) {
            return this;
        } else {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not have a
            length greater than ${compareValue} but is ${this._variableValue.length}`));
        }
    }

    /**
     *
     * isLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthGreaterOrEqualTo(compareTo: any[] | number, message: string = null): IArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length > compareValue || this._variableValue.length === compareValue) {
            return this;
        } else {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should have a length
            greater or equal to ${compareValue} but is ${this._variableValue.length}`));
        }
    }

    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthNotGreaterOrEqualTo(compareTo: any[] | number, message: string = null):  ArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length > compareValue || this._variableValue.length === compareValue) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not have a
             length greater or equal to ${compareValue} but is ${this._variableValue.length}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthLessThan(compareTo: any[] | number, message: string = null):  ArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length >= compareValue) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should have a length less than ${compareValue} but is ${this._variableValue.length}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthNotLessThan(compareTo: any[] | number, message: string = null):  ArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length <= compareValue) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should have a length
        not less than ${compareValue} but is ${this._variableValue.length}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthLessOrEqualThan(compareTo: any[] | number, message: string = null):  ArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length > compareValue) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should have a length less or equal
            to ${compareValue} but is ${this._variableValue.length}`));
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public isLengthNotLessOrEqualThan(compareTo: any[] | number, message: string = null): IArrayValidator {
        let compareValue:number = 0;
        compareValue = this.prepareArrayForLengthComparison(compareTo, compareValue);

        if (this._variableValue.length <= compareValue) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not have a
             length less or equal to ${compareValue} but is ${this._variableValue.length}`));
        } else {
            return this;
        }
    }

    /**
     *
     * contains checks if the array variable's values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the contains function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public contains(compareTo: any[], message: string = null): IArrayValidator {
        let count = 0;

        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError(`The length of either your contract precondition
            or comparable have a length of zero, please enter in values`);
        }
        for (let i = 0; i < compareTo.length; i++) {

            if (compareTo.some(elem => this._variableValue[i] === elem)) {
                count++;
            }
        }
        if (count === 0) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should contain the pattern ${compareTo}
             but the pattern is not found in ${this._variableValue}`));
        }

        return this;
    }

    /**
     *
     * notContains checks if the array variable's values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the notContains function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator }
     */
    public notContains(compareTo: any[], message: string = null):  ArrayValidator {
        let count = 0;

        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError(`The length of either your contract precondition
            or comparable have a length of zero, please enter in values`);
        }
        for (let i = 0; i < compareTo.length; i++) {

            if (compareTo.some(elem => this._variableValue[i] === elem)) {
                count++;
            }
        }
        if (count > 0) {
            throw new RangeError(this.validationMessage(message, `${this._variableName} should not contain the pattern ${compareTo}
             but the pattern is not found in ${this._variableValue}`));
        }

        return this;
    }

    private prepareArrayForLengthComparison(compareTo: any[] | number, compareValue: number, message: string = null) {
        if (!this._variableValue.length) {
            throw new RangeError("Can't compare the values length of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }

        if (compareTo instanceof Array) {
            if (!compareTo.length) {
                throw new RangeError("Can't compare the length of uninitialized arrays, " +
                    "please append values to the array's in the instance of this TypedContract");
            }
            compareValue = compareTo.length;
        } else {
            compareValue = compareTo;
        }
        return compareValue;
    }
}