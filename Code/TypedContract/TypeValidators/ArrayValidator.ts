/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />

/*import {ReferenceError} from "../../node_modules/typescript/lib/lib";
 import  ArrayValidator from "./";
 import {RangeError} from "../../../../../Program Files
  (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
 */
// import {RangeError} from "../../../../../Program Files
// (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";

class  ArrayValidator extends BaseValidator <any[]> {
    public count: number;

    constructor(variableValue: any[], variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * IsNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { ArrayValidator}
     */
    public IsNull(): ArrayValidator {

        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }


    /**
     *
     * IsNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { ArrayValidator}
     */

    public IsNotNull(): ArrayValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     * IsDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { ArrayValidator}
     */
    public IsDefined(): ArrayValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { ArrayValidator}
     */

    public IsUndefined(): ArrayValidator {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(`${this._variableName} should be undefined`);
        } else {
            return this;
        }
    }

    /**
     * IsNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { ArrayValidator}
     */

    public IsNullOrUndefined(): ArrayValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { ArrayValidator}
     */

    public IsEqualTo(compareTo: any[], index: number): ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * IsNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { ArrayValidator}
     */

    public IsNotEqualTo(compareTo: any[], index: number): ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract");
        }
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(`${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public IsLengthGreaterThan(compareTo: any[]): ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * IsLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public IsLengthNotGreaterThan(compareTo: any[]): ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract");
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
     * IsLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public IsLengthGreaterOrEqualTo(compareTo: any[]): ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * IsLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public IsLengthNotGreaterOrEqualTo(compareTo: any[]):  ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * IsLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public IsLengthLessThan(compareTo: any[]):  ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * IsLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public IsLengthNotLessThan(compareTo: any[]):  ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * IsLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    public IsLengthLessOrEqualThan(compareTo: any[]):  ArrayValidator {
        if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * IsLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public IsLengthNotLessOrEqualThan(compareTo: any[]): ArrayValidator {
         if (compareTo.length  === 0 || this._variableValue.length === 0) {
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
     * Contains checks if the array variable's values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the Contains function
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public Contains(compareTo: any[]): ArrayValidator {
        this.count = 0;

        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError(`The length of either your contract precondition
            or comparable have a length of zero, please enter in values`);
        }
        for (var i = 0; i < compareTo.length; i++) {

            if (compareTo.some(elem => this._variableValue[i] === elem)) {
                this.count++;
            }
        }
        if (this.count === 0) {
            throw new RangeError(`${this._variableName} should contain the pattern ${compareTo}
             but the pattern is not found in ${this._variableValue}`);
        }

        return this;
    }

    /**
     *
     * NotContains checks if the array variable's values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the NotContains function
     * @param compareTo
     * @returns { ArrayValidator}
     */

    public NotContains(compareTo: any[]):  ArrayValidator {
        this.count = 0;

        if (compareTo.length === 0 || this._variableValue.length === 0) {
            throw new RangeError(`The length of either your contract precondition
            or comparable have a length of zero, please enter in values`);
        }
        for (var i = 0; i < compareTo.length; i++) {

            if (compareTo.some(elem => this._variableValue[i] === elem)) {
                this.count++;
            }
        }
        if (this.count > 0) {
            throw new RangeError(`${this._variableName} should not contain the pattern ${compareTo}
             but the pattern is not found in ${this._variableValue}`);
        }

        return this;
    }
}