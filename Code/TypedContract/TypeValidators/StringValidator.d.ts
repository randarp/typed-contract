import { BaseValidator } from "./BaseValidator";
export declare class StringValidator extends BaseValidator<string> {
    constructor(variableValue: string, variableName: string);
    /**
     *
     * IsNotNull checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {StringValidator}
     */
    IsNotNull(): StringValidator;
    /**
     *
     * IsNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {StringValidator}
     */
    IsNull(): StringValidator;
    /**
     * IsDefined checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     * @returns {StringValidator}
     */
    IsDefined(): StringValidator;
    /**
     * IsNotDefined checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     * @returns {StringValidator}
     */
    IsUndefined(): StringValidator;
    /**
     * IsNullOrUndefined checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {StringValidator}
     */
    IsNullOrUndefined(): StringValidator;
    /**
     *
     * IsEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsEqualTo(compareTo: string): StringValidator;
    /**
     *
     * IsNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsNotEqualTo(compareTo: string): StringValidator;
    /**
     *
     * IsLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsLessThan(compareTo: string): StringValidator;
    /**
     *
     * IsNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsNotLessThan(compareTo: string): StringValidator;
    /**
     *
     * IsLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsLengthGreaterThan(compareTo: string): StringValidator;
    /**
     *
     * IsLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsLengthGreaterOrEqualTo(compareTo: string): StringValidator;
    /**
     *
     * IsLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsLengthNotGreaterThan(compareTo: string): StringValidator;
    /**
     *
     * IsLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {StringValidator}
     */
    IsLengthNotGreaterOrEqualTo(compareTo: string): StringValidator;
    /**
     * IsLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    IsLengthLessThan(compareTo: string): StringValidator;
    /**
     * IsLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    IsLengthNotLessThan(compareTo: string): StringValidator;
    /**
     * IsLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    IsLengthLessOrEqualThan(compareTo: string): StringValidator;
    /**
     * IsLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @returns {StringValidator}
     *
     */
    IsLengthNotLessOrEqualThan(compareTo: string): StringValidator;
    /**
     *
     * ToMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {StringValidator}
     */
    ToMatch(regExp: any): StringValidator;
    /**
     *
     * ToNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {StringValidator}
     */
    ToNotMatch(regExp: RegExp): StringValidator;
    /**
     *
     * Contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @returns {StringValidator}
     */
    Contains(compareTo: string): StringValidator;
    /**
     *
     * NotContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @returns {StringValidator}
     */
    NotContains(compareTo: string): StringValidator;
    /**
     *
     * StartsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {StringValidator}
     */
    StartsWith(compareTo: string): StringValidator;
    /**
     *
     * NotStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {StringValidator}
     */
    NotStartsWith(compareTo: string): StringValidator;
    /**
     *
     * EndsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @returns {StringValidator}
     */
    EndsWith(compareTo: string): StringValidator;
    /**
     *
     * NotEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @returns {StringValidator}
     */
    NotEndsWith(compareTo: string): StringValidator;
    /**
     *
     * IsBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {StringValidator}
     */
    IsBetween(startRange: string, endRange: string): StringValidator;
    /**
     *
     * IsNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {StringValidator}
     */
    IsNotBetween(startRange: string, endRange: string): StringValidator;
}
