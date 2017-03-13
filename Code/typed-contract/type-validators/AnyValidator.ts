/// <reference path="TypeValidators.d.ts" />

import {BaseValidator} from "./BaseValidator";

export class AnyValidator extends BaseValidator<any> implements IAnyValidator {

    constructor(variableValue:any, variableName:string) {
        super(variableValue, variableName);
    }

    /**
     *
     * isNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns { IAnyValidator }
     */
    public isNotNull():IAnyValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     *
     * isNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns { IAnyValidator }
     */
    public isNull():IAnyValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }


    /**
     * isDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns { IAnyValidator }
     */
    public isDefined():IAnyValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * isUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns { IAnyValidator }
     */
    public isUndefined():IAnyValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    /**
     * isNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns { IAnyValidator }
     */
    public isNullOrUndefined():IAnyValidator {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

}
