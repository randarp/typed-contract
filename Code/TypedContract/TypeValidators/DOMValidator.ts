/// <reference path="../TypeValidators/BaseValidator.ts" />

class DOMValidator extends BaseValidator<HTMLElement> {
    constructor(variableValue: HTMLElement, variableName: string) {
        super(variableValue, variableName);
    }

    /**
     *
     * IsNotNull checks if the type HTMLElement variable is not null
     * @throws a ReferenceError if the HTMLElement is null
     * @returns {DOMValidator}
     */
    public IsNotNull(): DOMValidator {
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
     * @returns {DOMValidator}
     */
    public IsNull(): DOMValidator {
        if (this._variableValue !== null) {
            throw new ReferenceError(`${this._variableName} should be null`);
        } else {
            return this;
        }
    }


    /**
     * IsDefined checks if the HTMLElement variable is defined
     * @throws ReferenceError if the HTMLElement variable jis not defined
     * @returns {DOMValidator}
     */
    public IsDefined(): DOMValidator {
        if (typeof this._variableValue === "undefined") {
            throw new ReferenceError(`${this._variableName} should be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsUndefined checks if the HTMLElement variable is undefined
     * @throws a ReferenceError if the HTMLElement variable is undefined
     * @returns {DOMValidator}
     */
    public IsUndefined(): DOMValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    /**
     * IsNullOrUndefined checks if the HTMLElement variable is not null or undefined
     * @throws ReferenceError if the HTMLElement variable is null or undefined
     * @returns {DOMValidator}
     */
    public IsNullOrUndefined(): DOMValidator {
        if (this._variableValue === null || typeof this._variableValue === undefined) {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

    public HasAttribute(attributeName: string): DOMValidator {
        if (!this._variableValue.hasAttribute(attributeName)) {
            throw new RangeError(`${this._variableName} does not have the HTML attribute ${attributeName}`);
        } else {
            return this;
        }
    }

    public NotHasAttribute(attributeName: string): DOMValidator {
        if (this._variableValue.hasAttribute(attributeName)) {
            throw new RangeError(`${this._variableName} does have the HTML attribute ${attributeName}`);
        } else {
            return this;
        }
    }

    public HasInnerHTML(stringEval ?: string): DOMValidator {
       if (this._variableValue.innerHTML !== stringEval) {
            throw new RangeError(`${this._variableName} innerHTML does not match the contents given in the contract argument`);
       } else {
           return this;
       }
    }

    public NotHasInnerHTML(stringEval ?: string ): DOMValidator {
        if (this._variableValue.innerHTML === stringEval) {
            throw new RangeError(`${this._variableName} innerHTML does not match the contents given in the contract argument`);
        } else {
            return this;
        }
    }

    public ToMatchInnerHTML(regExp: any): DOMValidator {
        if (!regExp.test(this._variableValue.innerHTML)) {
            throw new RangeError(`${this._variableValue} does not match the regular expression ${regExp} for the variable ${this._variableName} `);
        } else {
            return this;
        }
    }

    public NotToMatchInnerHTML(regExp: any): DOMValidator {
        if (regExp.test(this._variableValue.innerHTML)) {
            throw new RangeError(`${this._variableValue} matches the regular expression ${regExp} for the variable ${this._variableName} `);
        } else {
            return this;
        }
    }

    public HasClass(className: any): DOMValidator {
        if (this._variableValue.className !== className) {
            throw new RangeError(``);
        } else {
            return this;
        }
    }

    public NotHasClass(className: any): DOMValidator {
        if (this._variableValue.className === className) {
            throw new RangeError(``);
        } else {
            return this;
        }
    }

    public HasId(idName: string): DOMValidator {
       if (this._variableValue.id !== idName) {
           throw new RangeError(``);
       } else {
           return this;
       }
   }

   public NotHasId(idName: string): DOMValidator {
        if (this._variableValue.id === idName) {
            throw new RangeError(``);
        } else {
            return this;
        }
   }


   public HasElementPaddingGreaterThan(paddingValue: any): DOMValidator {
       return this;
   }

   public HasElementPaddingLessThan(paddingValue: any): DOMValidator {
        return this;
    }

   public HasElementPaddingGreaterOrEqualThan(paddingValue: any): DOMValidator {
       return this;
   }

   public HasElementPaddingLessOrEqualThan(paddingValue: any): DOMValidator {
       return this;
   }

   public HasElementMarginGreaterThan(paddingValue: any): DOMValidator {
        return this;
    }

   public HasElementMarginLessThan(paddingValue: any): DOMValidator {
        return this;
    }

   public HasElementMarginGreaterOrEqualThan(paddingValue: any): DOMValidator {
        return this;
    }

   public HasElementMarginLessOrEqualThan(paddingValue: any): DOMValidator {
        return this;
    }
}