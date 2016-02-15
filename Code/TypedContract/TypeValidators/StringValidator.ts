/// <reference path="BaseValidator.ts" />

import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
import StringValidator from "./";
class StringValidator extends BaseValidator<string> {

    constructor(variableValue: string, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * Checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     */
    public IsNotNull(): StringValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        }else {
            return this;
        }
    }

    /**
     *
     * Checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     */
    public IsNull(): StringValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     */
    public isDefined(): StringValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     */
    public isNotDefined(): StringValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    public IsLengthIsGreaterOrEqualThan(stringLength: number, variableName?: string): StringValidator {
        if (this._variableValue.length < stringLength) {
            throw new RangeError(`${this._variableValue} is out of length range by a of ${this._variableValue.length - stringLength},
            your specified range was ${stringLength} for ${this._variableName} `);
        } else {
            return this;
        }
    }

    /**
     * Checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {StringValidator}
     */
    public isNullOrUndefined(): StringValidator {
        if (this._variableValue == null || typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    public isEqualTo(compareTo: string): StringValidator {
        if (this._variableValue !== compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the string variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    public isNotEqualTo(compareTo: string): StringValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the string variable ${compareTo}`)
        } else {
            return this;
        }
    }

}
