/// <reference path="BaseValidator.ts" />

import {ReferenceError} from "../../node_modules/typescript/lib/lib";
import {ReferenceError} from "../../node_modules/typescript/lib/lib";
import ArrayValidator from "./";
class ArrayValidator extends BaseValidator<any[]> {

    constructor(variableValue: any[], variableName: string) {
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
            throw new ReferenceError(`${this._variableValue} should be null`);
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

    public isNotNull(): ArrayValidator {
        if (this._variableValue == null) {
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
    public isDefined(): ArrayValidator {
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
    public isUndefined(): ArrayValidator {
        if (typeof this._variableValue !== "undefined") {
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
    public isNotNullOrUndefined(): ArrayValidator {
        if (this._variableValue == null || typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }
}
