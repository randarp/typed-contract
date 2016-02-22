
/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />
/*
import {ExceptionInformation} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib"; import BooleanValidator from "./";
import {RangeError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
*/

class BooleanValidator extends BaseValidator<boolean> {

    constructor(variableValue: boolean, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * Checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    public IsNull(): BooleanValidator {
        if (this._variableValue === null && typeof this._variableValue === "object") {
            return this;
        } else {
            throw new ReferenceError(`${this._variableName} should be null`);
        }
    }

    /**
     *
     * Checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    public IsNotNull(): BooleanValidator {
        if (this._variableValue == null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {BooleanValidator}
     */

    public IsDefined(): BooleanValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {BooleanValidator}
     */

    public IsUndefined(): BooleanValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be undefined`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {BooleanValidator}
     */

    public IsNullOrUndefined(): BooleanValidator {
        if (this._variableValue == null || typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }
    /**
     *
     * Checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {BooleanValidator}
     */
    public IsEqualTo(compareTo: boolean): BooleanValidator {
        if (!this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the boolean variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {BooleanValidator}
     */

    public IsNotEqualTo(compareTo: boolean): BooleanValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the boolean ${compareTo}`);
        } else {
            return this;
        }
    }
    /**
     *
     * Checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {BooleanValidator}
     */
    public IsTrue(): BooleanValidator {
        if (this._variableValue === false) {
            throw new RangeError(`${this._variableName} should be true`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {BooleanValidator}
     */

    public IsFalse(): BooleanValidator {
        if (this._variableValue === true) {
            throw new RangeError(`${this._variableName} should be false`);
        } else {
            return this;
        }
    }
}
