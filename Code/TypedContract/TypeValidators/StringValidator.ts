/// <reference path="C:\Projects\TypedContract\Code\TypedContract\TypeValidators\BaseValidator.ts" />

/* import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
import StringValidator from "./"; */
//import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";
//import {ReferenceError} from "../../../../../Program Files (x86)/JetBrains/WebStorm 11.0/plugins/JavaScriptLanguage/typescriptCompiler/external/lib";

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
    public IsDefined(): StringValidator {
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
    public IsNotDefined(): StringValidator {
        if (typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be defined`);
        } else {
            return this;
        }
    }

    public IsLengthIsGreaterOrEqualThan(stringLength: number, variableName?: string): StringValidator {
        if (this._variableValue.length < stringLength) {
            throw new RangeError(`${this._variableValue} is out of length range by a of ${this._variableValue.length - stringLength},
            your specified range was ${stringLength} for ${this._variableName} `);
        } else {
            return this;
        }
    }

    /**
     * Checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {StringValidator}
     */
    public IsNullOrUndefined(): StringValidator {
        if (this._variableValue !== null || typeof this._variableValue !== "undefined") {
            throw new ReferenceError(`${this._variableName} should not be null or undefined`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    public IsEqualTo(compareTo: string): StringValidator {
        if (this._variableValue !== compareTo) {
            throw new RangeError(`${this._variableName} should be equal to the string variable ${compareTo}`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    public IsNotEqualTo(compareTo: string): StringValidator {
        if (this._variableValue === compareTo) {
            throw new RangeError(`${this._variableName} should not be equal to the string variable ${compareTo}`);
        } else {
            return this;
        }
    }
    /**
     *
     * Checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public isLessThan(compareTo: string): StringValidator {
        if (this._variableValue.length > compareTo.length) {
            throw new ReferenceError(`${this._variableName} should be less than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    /**
     *
     * Checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsNotLessThan(compareTo: string): StringValidator {
        if (this._variableValue.length < compareTo.length) {
            throw new ReferenceError(`${this._variableName} should not be less that ${compareTo} but is ${this._variableValue} `);
        } else {
            return this;
        }
    }
    /**
     *
     * Checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    public IsLengthGreaterThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should have a length greater
            than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }
    /**
     *
     * Checks if the string variable length is greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    public IsLengthGreaterOrEqualTo(compareTo: string): StringValidator {

        if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should have a length
            greater or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    /**
     *
     * Checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */

    public IsLengthNotGreaterThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should not have a
            length greater than ${compareTo.length} but is ${this._variableValue.length}`);
        }
    }

    public IsLengthNotGreaterOrEqualTo(compareTo: string): StringValidator {
         if (this._variableValue.length > compareTo.length || this._variableValue.length === compareTo.length) {
             throw new RangeError(`${this._variableName} should not have a length greater or equal to ${compareTo.length}
              but is ${this._variableValue.length}`);
         } else {
            return this;
         }
    }

    public IsLengthLessThan(compareTo: string): StringValidator {
     if (this._variableValue.length >= compareTo.length) {
        throw new RangeError(`${this._variableName} should have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
     } else {
            return this;
        }
    }

    public IsLengthNotLessThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length) {
            throw new RangeError(`${this._variableName} should not have a length
        less than ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public IsLengthLessOrEqualThan(compareTo: string): StringValidator {
        if (this._variableValue.length > compareTo.length) {
            throw new RangeError(`${this._variableName} should have a
            length less or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public IsLengthNotLessOrEqualThan(compareTo: string): StringValidator {
        if (this._variableValue.length <= compareTo.length ) {
            throw new RangeError(`${this._variableName} should not have a length less
            or equal to ${compareTo.length} but is ${this._variableValue.length}`);
        } else {
            return this;
        }
    }

    public ToMatch(regExp: any): StringValidator {
        if (!regExp.test(this._variableValue)) {
            throw new RangeError(`${this._variableName} should match
            the pattern ${regExp} but the value of ${this._variableValue} does not match`);
        } else {
            return this;
        }
    }

    public ToNotMatch(regExp: any): StringValidator {
        if (regExp.test(this._variableValue)) {
            throw new RangeError(`${this._variableName} should not match
            the pattern ${regExp} but the value of ${this._variableValue} matches`);
        } else {
            return this;
        }
    }

    public Contains(compareTo: string): StringValidator {
       if (this._variableValue.indexOf(compareTo) <= - 1) {
           throw new RangeError(`${this._variableName} should contain
           the pattern ${compareTo} but the pattern is not found in ${this._variableValue}`);
       } else {
           return this;
       }
    }

    public NotContains(compareTo: string): StringValidator {
        if (this._variableValue.indexOf(compareTo) > -1) {
            throw new RangeError(`${this._variableName} should not contain
           the pattern ${compareTo} but the pattern is found in ${this._variableValue}`);
        } else {
            return this;
        }
    }
}
