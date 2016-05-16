/// <reference path="BaseValidator.d.ts" />
declare class ArrayValidator extends BaseValidator<any[]> {
    private count;
    constructor(variableValue: any[], variableName: string);
    /**
     *
     * IsNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { ArrayValidator}
     */
    IsNull(): ArrayValidator;
    /**
     *
     * IsNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { ArrayValidator}
     */
    IsNotNull(): ArrayValidator;
    /**
     * IsDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { ArrayValidator}
     */
    IsDefined(): ArrayValidator;
    /**
     * IsUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { ArrayValidator}
     */
    IsUndefined(): ArrayValidator;
    /**
     * IsNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { ArrayValidator}
     */
    IsNullOrUndefined(): ArrayValidator;
    /**
     *
     * IsEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { ArrayValidator}
     */
    IsEqualTo(compareTo: any[], index: number): ArrayValidator;
    /**
     *
     * IsNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { ArrayValidator}
     */
    IsNotEqualTo(compareTo: any[], index: number): ArrayValidator;
    /**
     *
     * IsLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthGreaterThan(compareTo: any[]): ArrayValidator;
    /**
     *
     * IsLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthNotGreaterThan(compareTo: any[]): ArrayValidator;
    /**
     *
     * IsLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthGreaterOrEqualTo(compareTo: any[]): ArrayValidator;
    /**
     *
     * IsLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthNotGreaterOrEqualTo(compareTo: any[]): ArrayValidator;
    /**
     *
     * IsLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthLessThan(compareTo: any[]): ArrayValidator;
    /**
     *
     * IsLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthNotLessThan(compareTo: any[]): ArrayValidator;
    /**
     *
     * IsLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthLessOrEqualThan(compareTo: any[]): ArrayValidator;
    /**
     *
     * IsLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { ArrayValidator}
     */
    IsLengthNotLessOrEqualThan(compareTo: any[]): ArrayValidator;
    /**
     *
     * Contains checks if the array variable's values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the Contains function
     * @param compareTo
     * @returns { ArrayValidator}
     */
    Contains(compareTo: any[]): ArrayValidator;
    /**
     *
     * NotContains checks if the array variable's values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the NotContains function
     * @param compareTo
     * @returns { ArrayValidator}
     */
    NotContains(compareTo: any[]): ArrayValidator;
}
