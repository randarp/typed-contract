/**
 * Created by Andre on 4/14/2016.
 */
/// <reference path="../TypeValidators/BaseValidator.ts" />

    class AnyValidator extends BaseValidator<any> {

        constructor(variableValue: any, variableName: string) {
            super(variableValue, variableName);
        }
    /**
     *
     * IsNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns {AnyValidator}
     */
public IsNotNull(): AnyValidator {
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
public IsNull(): AnyValidator {
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
public IsDefined(): AnyValidator {
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
public IsUndefined(): AnyValidator {
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
public IsNullOrUndefined(): AnyValidator {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

}
