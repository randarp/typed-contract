/// <reference path="../TypeValidators/BaseValidator.ts" />

class HTMLValidator extends BaseValidator<HTMLElement> {
    constructor(variableValue: HTMLElement, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * IsNotNull checks if the type HTMLElement variable is not null
     * @throws a ReferenceError if the HTMLElement is null
     * @returns {HTMLValidator}
     */
    public IsNotNull(): HTMLValidator {
        if (this._variableValue === null) {
            throw new ReferenceError(`${this._variableName} should not be null`);
        } else {
            return this;
        }
    }

    /**
     *
     * IsNull checks if the HTMLElement variable is null
     * @throws a ReferenceError if the HTMLElement variable is not null
     * @returns {HTMLValidator}
     */
    public IsNull(): HTMLValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }


    /**
     * IsDefined checks if the HTMLElement variable is defined
     * @throws ReferenceError if the HTMLElement variable jis not defined
     * @returns {HTMLValidator}
     */
    public IsDefined(): HTMLValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsUndefined checks if the HTMLElement variable is undefined
     * @throws a ReferenceError if the HTMLElement variable is undefined
     * @returns {HTMLValidator}
     */
    public IsUndefined(): HTMLValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsNullOrUndefined checks if the HTMLElement variable is not null or undefined
     * @throws ReferenceError if the HTMLElement variable is null or undefined
     * @returns {HTMLValidator}
     */
    public IsNullOrUndefined(): HTMLValidator {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

    public HasAttribute(attributeName: string): HTMLValidator {
        if (!this._variableValue.hasAttribute(attributeName)) {
            throw new ReferenceError(`${this._variableName} does not have the HTML attribute ${attributeName}`);
        } else {
            return this;
        }
    }

    public NotHasAttribute(attributeName: string): HTMLValidator {
        if (this._variableValue.hasAttribute(attributeName)) {
            throw new ReferenceError(`${this._variableName} does have the HTML attribute ${attributeName}`);
        } else {
            return this;
        }
    }

    public HasInnerHTML(stringEval: string, regex ?: RegExp ): HTMLValidator {
        return this;
    }

    public NotHasInnerHTML(stringEval: string, regExp ?: RegExp): HTMLValidator {
        return this;
    }

    public OffsetHeightInRange(startRange: number, endRange: number): HTMLValidator {

        return this;
    }

    public OffsetHeightNotInRange(startRange: number, endRange: number): HTMLValidator {
        return this;
    }
}