/// <reference path="BaseValidator.d.ts" />
declare class NumberValidator extends BaseValidator<number> {
    constructor(variableValue: number, variableName: string);
    /**
     *
     * IsNotNull checks if the type number variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {NumberValidator}
     */
    IsNotNull(): NumberValidator;
    /**
     *
     * IsNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {NumberValidator}
     */
    IsNull(): NumberValidator;
    /**
     * IsDefined checks if the number variable is defined
     * @throws ReferenceError if the number variable jis not defined
     * @returns {NumberValidator}
     */
    IsDefined(): NumberValidator;
    /**
     * IsUndefined checks if the number variable is undefined
     * @throws a ReferenceError if the number variable is undefined
     * @returns {NumberValidator}
     */
    IsUndefined(): NumberValidator;
    /**
     * IsNullOrUndefined checks if the number variable is not null or undefined
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {NumberValidator}
     */
    IsNullOrUndefined(): NumberValidator;
    /**
     *
     * IsEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsEqualTo(compareTo: number): NumberValidator;
    /**
     *
     * IsNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsNotEqualTo(compareTo: number): NumberValidator;
    /**
     *
     * IsGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsGreaterThan(compareTo: number): NumberValidator;
    /**
     *
     * IsNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsNotGreaterThan(compareTo: number): NumberValidator;
    /**
     *
     * IsGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsGreaterOrEqualThan(compareTo: number): NumberValidator;
    /**
     *
     * IsNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
     * parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsNotGreaterOrEqualThan(compareTo: number): NumberValidator;
    /**
     *
     * IsLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsLessThan(compareTo: number): NumberValidator;
    /**
     *
     * IsNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsNotLessThan(compareTo: number): NumberValidator;
    /**
     *
     * IsLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsLessOrEqualThan(compareTo: number): NumberValidator;
    /**
     *
     * IsNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */
    IsNotLessOrEqualThan(compareTo: number): NumberValidator;
    IsBetween(startRange: number, endRange: number): NumberValidator;
    IsNotBetween(startRange: number, endRange: number): NumberValidator;
}
