/// <reference path="BaseValidator.ts" />

import {ExceptionInformation} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
import BooleanValidator from "./";
class BooleanValidator extends BaseValidator<boolean> {

    constructor(variableValue:boolean, variableName:string) {
        super(variableValue, variableName);
    }

    /**
     * Checks if the variable is truthy
     * @throws RangeError if the value is not true
     */
    public IsTrue(): BooleanValidator {
        if (!this._variableValue) {
            throw new RangeError(`${this._variableName} should be true`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the variable is falsey
     * @throws RangeError if the value is not false
     */
    public IsFalse(): BooleanValidator {
        if (this._variableValue) {
            throw new RangeError(`${this._variableName} should be false`);
        } else {
            return this;
        }
    }
    /**
     *
     * Checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    public isNull(): BooleanValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }
    /**
     *
     * Checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    public isNotNull(): BooleanValidator {
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
    public isDefined(): BooleanValidator {
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
    public isUndefined(): BooleanValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should be undefined`);
        } else {
            return this;
        }
    }
}
