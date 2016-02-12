/// <reference path="BaseValidator.ts" />

class NumberValidator extends BaseValidator<number> {

    constructor(variableValue: number, variableName: string) {
        super(variableValue, variableName);
    }
    /**
     *
     * Checks if the type number variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {NumberValidator}
     */
    public isNotNull(): NumberValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {NumberValidator}
     */
    public isNull(): NumberValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the number variable is defined
     * @throws ReferenceError if the number variable jis not defined
     * @returns {NumberValidator}
     */
    public isDefined(): NumberValidator {
      if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
      }  else {
          return this;
      }
    }

    /**
     * Checks if the number variable is undefined
     * @throws a ReferenceError if the number variable is undefined
     * @returns {NumberValidator}
     */
    public isUndefined(): NumberValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    /**
     * Checks if the number variable is not null or undefined
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {NumberValidator}
     */
    public isNotNullOrUndefined(): NumberValidator {
        if (this._variableValue == null || typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

}
