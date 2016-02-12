/// <reference path="BaseValidator.ts" />

import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
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

    public LengthIsGreaterOrEqualThan(stringLength: number, variableName?: string): StringValidator {
        if (this._variableValue.length < stringLength) {
            throw new RangeError(`${this._variableValue} is out of length range by a of ${this._variableValue.length - stringLength},
            your specified range was ${stringLength} for ${this._variableName} `);
        } else {
            return this;
        }
    }
}
