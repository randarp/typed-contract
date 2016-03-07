/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />

/*import {ReferenceError} from "../../node_modules/typescript/lib/lib";
 import ArrayValidator from "./";
 import {RangeError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
 */
//import {RangeError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";

class ArrayValidator extends BaseValidator <any[]> {

    constructor(variableValue:any[], variableName:string) {
        super(variableValue, variableName);
    }

    /**
     *
     * Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns {ArrayValidator}
     */
    public IsNull():ArrayValidator {

        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }


    /**
     *
     * Checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns {ArrayValidator}
     */

    public IsNotNull():ArrayValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns {ArrayValidator}
     */
    public IsDefined():ArrayValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns {ArrayValidator}
     */

    public IsUndefined():ArrayValidator {
        if (this._variableValue !== undefined) {
            throw new ReferenceError(`${this._variableName} should be undefined`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns {ArrayValidator}
     */

    public IsNullOrUndefined():ArrayValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns {ArrayValidator}
     */
    public IsEqualTo(compareTo:any[], index:number):ArrayValidator {
        if (this._variableValue[index] !== compareTo[index]) {
            throw new RangeError(`${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns {ArrayValidator}
     */

    public IsNotEqualTo(compareTo:any[], index:number):ArrayValidator {
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(`${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo
     * @returns {ArrayValidator}
     */

    public IsLengthGreaterThan(compareTo:any[]):ArrayValidator {
        if (this._variableValue == null || compareTo == null) {
            throw new RangeError("Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract");
        } else if (this._variableValue.length <= 0 || compareTo.length <= 0) {
            throw new RangeError(`Can't compare the length's of uninitialized arrays, please append values to the array's in the instance of this TypedContract`);
        } else if (this._variableValue.length < compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length greater than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public IsLengthNotGreaterThan(compareTo:any[]):ArrayValidator {
        if (this._variableValue.length <= compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should not have a length greater than ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    public IsLengthGreaterOrEqualTo(compareTo:any[]):ArrayValidator {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should have a length
            greater or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    public IsLengthNotGreaterOrEqualTo(compareTo:any[]):ArrayValidator {
        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length greater or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public IsLengthLessThan(compareTo:any[]):ArrayValidator {
        if (this._variableValue.length >= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public IsLengthNotLessThan(compareTo:any[]):ArrayValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length
        not less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public IsLengthLessOrEqualThan(compareTo:any[]):ArrayValidator {
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length less or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public IsLengthNotLessOrEqualThan(compareTo:any[]):ArrayValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a
             length less or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public Contains(compareTo: any[]): ArrayValidator {
        var count = 0;
        if (this._variableValue.every( elem => elem !== compareTo.indexOf(elem))) {
            count++ ;
        }
        if (count > 0) {
            throw new RangeError(`${this._variableName} should contain
            the pattern ${compareTo} but the pattern is not found in ${this._variableValue}`)
        } else {
            return this;
        }
    }

    public NotContains(compareTo: any[]): ArrayValidator {
        return this;
    }
}