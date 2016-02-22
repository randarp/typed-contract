/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />

/*import {ReferenceError} from "../../node_modules/typescript/lib/lib";
 import ArrayValidator from "./";
 import {RangeError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
 */

class ArrayValidator extends BaseValidator <any[]> {

    constructor(variableValue: any[], variableName:string) {
        super(variableValue, variableName);
    }

    /**
     *
     * Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns {ArrayValidator}
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
     * Checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns {ArrayValidator}
     */

    public IsNotNull(): ArrayValidator {
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
    public IsDefined(): ArrayValidator {
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
    public IsUndefined(): ArrayValidator {
        if ( this._variableValue !== undefined) {
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

    public IsNullOrUndefined(): ArrayValidator {
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
    public IsEqualTo(compareTo: any[], index: number): ArrayValidator {
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

    public IsNotEqualTo(compareTo: any[], index: number): ArrayValidator {
        if (this._variableValue[index] === compareTo[index]) {
            throw new RangeError(`${this._variableName} should be equal to array variable ${compareTo} at the index ${index}`);
        } else {
            return this;
        }
    }
}