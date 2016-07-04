/// <reference path="TypeValidators.d.ts" />

import { BaseValidator } from "./BaseValidator";

export class AnyValidator extends BaseValidator<any> implements IAnyValidator {

        constructor(variableValue: any, variableName: string) {
            super(variableValue, variableName);
        }
    /**
     *
     * IsNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns {AnyValidator}
     */
public IsNotNull(): IAnyValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {AnyValidator}
     */
public IsNull(): IAnyValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }


    /**
     * IsDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns {AnyValidator}
     */
public IsDefined(): IAnyValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns {AnyValidator}
     */
public IsUndefined(): IAnyValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns {AnyValidator}
     */
public IsNullOrUndefined(): IAnyValidator {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

}
