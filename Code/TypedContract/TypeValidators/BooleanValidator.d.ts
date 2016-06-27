import { BaseValidator } from "./BaseValidator";
export declare class BooleanValidator extends BaseValidator<boolean> {
    constructor(variableValue: boolean, variableName: string);
    /**
     *
     * IsNull checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    IsNull(): BooleanValidator;
    /**
     *
     * IsNotNull checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    IsNotNull(): BooleanValidator;
    /**
     * IsDefined checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {BooleanValidator}
     */
    IsDefined(): BooleanValidator;
    /**
     * IsUndefined checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {BooleanValidator}
     */
    IsUndefined(): BooleanValidator;
    /**
     * IsNullOrUndefined checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {BooleanValidator}
     */
    IsNullOrUndefined(): BooleanValidator;
    /**
     *
     * IsEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {BooleanValidator}
     */
    IsEqualTo(compareTo: boolean): BooleanValidator;
    /**
     *
     * IsNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {BooleanValidator}
     */
    IsNotEqualTo(compareTo: boolean): BooleanValidator;
    /**
     *
     * IsTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {BooleanValidator}
     */
    IsTrue(): BooleanValidator;
    /**
     *
     * IsFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {BooleanValidator}
     */
    IsFalse(): BooleanValidator;
}
