/// <reference path="TypeValidators.d.ts" />

import { BaseValidator } from "./BaseValidator";

export class ArrayValidator extends BaseValidator <any[]> implements IArrayValidator {
    constructor(variableValue: any[], variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * isNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { IArrayValidator }
     */
    public isNull(): IArrayValidator {

        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { IArrayValidator }
     */
    public isNotNull(): IArrayValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     * isDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { IArrayValidator }
     */
    public isDefined(): IArrayValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * isUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { IArrayValidator }
     */
    public isUndefined(): IArrayValidator {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(`${this._variableName} should be undefined`);
        } else {
            return this;
        }
    }

    /**
     * isNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { IArrayValidator }
     */
    public isNullOrUndefined(): IArrayValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * isEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator }
     */
    public isEqualTo(compareTo: any[], index: number): IArrayValidator {
        if (!compareTo.length || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] !== compareTo[index]) {
            throw new RangeError(`${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator }
     */
    public isNotEqualTo(compareTo: any[], index: number): IArrayValidator {
        if (!compareTo.length  || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                " please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(`${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthGreaterThan(compareTo: any[]): IArrayValidator {
        if (!compareTo.length || !this._variableValue.length) {
        throw new RangeError("Can't compare the length's of uninitialized arrays, " +
            "please append values to the array's in the instance of this TypedContract");
       }
        if (this._variableValue.length < compareTo.length) {
            throw new RangeError(`${this._variableName} should have a
            length greater than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthNotGreaterThan(compareTo: any[]): IArrayValidator {
        if (!compareTo.length || !this._variableValue.length ) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length <= compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should not have a
            length greater than ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    /**
     *
     * isLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthGreaterOrEqualTo(compareTo: any[]): IArrayValidator {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should have a length
            greater or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthNotGreaterOrEqualTo(compareTo: any[]):  ArrayValidator {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays," +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a
             length greater or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthLessThan(compareTo: any[]):  ArrayValidator {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthNotLessThan(compareTo: any[]):  ArrayValidator {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length
        not less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthLessOrEqualThan(compareTo: any[]):  ArrayValidator {
        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                "please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length less or equal
            to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    /**
     *
     * isLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator }
     */
    public isLengthNotLessOrEqualThan(compareTo: any[]): IArrayValidator {
         if (!compareTo.length || !this._variableValue.length) {
                throw new RangeError("Can't compare the length's of uninitialized arrays, " +
                    "please append values to the array's in the instance of this TypedContract");
        }
         if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a
             length less or equal to ${compareTo.length} but is ${this._variableValue.length}`);
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
     * @returns { IArrayValidator }
     */
    public contains(compareTo: any[]): IArrayValidator {
        let count = 0;

        if (!compareTo.length || !this._variableValue.length) {
            throw new RangeError(`The length of either your contract precondition
            or comparable have a length of zero, please enter in values`);
        }
        for (var i = 0; i < compareTo.length; i++) {

            if (compareTo.some(elem => this._variableValue[i] === elem)) {
                count++;
            }
        }
        if (count === 0) {
            throw new RangeError(`${this._variableName} should contain the pattern ${compareTo}
             but the pattern is not found in ${this._variableValue}`);
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
     * @returns { IArrayValidator }
     */
    public notContains(compareTo: any[]):  ArrayValidator {
        let count = 0;

        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError(`The length of either your contract precondition
            or comparable have a length of zero, please enter in values`);
        }
        for (var i = 0; i < compareTo.length; i++) {

            if (compareTo.some(elem => this._variableValue[i] === elem)) {
                count++;
            }
        }
        if (count > 0) {
            throw new RangeError(`${this._variableName} should not contain the pattern ${compareTo}
             but the pattern is not found in ${this._variableValue}`);
        }

        return this;
    }
}