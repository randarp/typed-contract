declare var contract: any;
declare var typedcontract: any;
interface IAnyValidator {
    /**
     *
     * IsNotNull checks if the type any variable is not null
     * @throws a ReferenceError if the any is null
     * @returns {IAnyValidator}
     */
    IsNotNull(): IAnyValidator;

    /**
     *
     * IsNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {IAnyValidator}
     */
    IsNull(): IAnyValidator;


    /**
     * IsDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns {IAnyValidator}
     */
    IsDefined(): IAnyValidator;

    /**
     * IsUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns {IAnyValidator}
     */
    IsUndefined(): IAnyValidator;

    /**
     * IsNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns {IAnyValidator}
     */
    IsNullOrUndefined(): IAnyValidator;
}

interface IArrayValidator {
    /**
     *
     * IsNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { IArrayValidator}
     */
    IsNull(): IArrayValidator;


    /**
     *
     * IsNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { IArrayValidator}
     */

    IsNotNull(): IArrayValidator;

    /**
     * IsDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { IArrayValidator}
     */
    IsDefined(): IArrayValidator;

    /**
     * IsUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { IArrayValidator}
     */

    IsUndefined(): IArrayValidator;

    /**
     * IsNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { IArrayValidator}
     */

    IsNullOrUndefined(): IArrayValidator;

    /**
     *
     * IsEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator}
     */
    IsEqualTo(compareTo: any[], index: number): IArrayValidator;

    /**
     *
     * IsNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator}
     */
    IsNotEqualTo(compareTo: any[], index: number): IArrayValidator;

    /**
     *
     * IsLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo
     * @returns { IArrayValidator}
     */
    IsLengthGreaterThan(compareTo: any[]): IArrayValidator;

    /**
     *
     * IsLengthNotGreaterThan checks if the array variable"s length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator}
     */
    IsLengthNotGreaterThan(compareTo: any[]): IArrayValidator;

    /**
     *
     * IsLengthGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator}
     */

    IsLengthGreaterOrEqualTo(compareTo: any[]): IArrayValidator;

    /**
     *
     * IsLengthNotGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator}
     */
    IsLengthNotGreaterOrEqualTo(compareTo: any[]):  IArrayValidator;

    /**
     *
     * IsLengthLessThan checks if the array variable"s length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator}
     */
    IsLengthLessThan(compareTo: any[]):  IArrayValidator;

    /**
     *
     * IsLengthNotLessThan checks if the array variable"s length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator}
     */

    IsLengthNotLessThan(compareTo: any[]):  IArrayValidator;

    /**
     *
     * IsLengthLessOrEqualThan checks if the array variable"s length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator}
     */
    IsLengthLessOrEqualThan(compareTo: any[]):  IArrayValidator;

    /**
     *
     * IsLengthNotLessOrEqualThan checks if the array variable"s length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo
     * @returns { IArrayValidator}
     */
    IsLengthNotLessOrEqualThan(compareTo: any[]): IArrayValidator;

    /**
     *
     * Contains checks if the array variable"s values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the Contains function
     * @param compareTo
     * @returns { IArrayValidator}
     */

    Contains(compareTo: any[]): IArrayValidator;

    /**
     *
     * NotContains checks if the array variable"s values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the NotContains function
     * @param compareTo
     * @returns { IArrayValidator}
     */

    NotContains(compareTo: any[]): IArrayValidator;
}

interface IBooleanValidator {

    /**
     *
     * IsNull checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    IsNull(): IBooleanValidator;

    /**
     *
     * IsNotNull checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    IsNotNull(): IBooleanValidator;

    /**
     * IsDefined checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */
    IsDefined(): IBooleanValidator;

    /**
     * IsUndefined checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */
    IsUndefined(): IBooleanValidator;

    /**
     * IsNullOrUndefined checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */
    IsNullOrUndefined(): IBooleanValidator;

    /**
     *
     * IsEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    IsEqualTo(compareTo: boolean): IBooleanValidator;

    /**
     *
     * IsNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    IsNotEqualTo(compareTo: boolean): IBooleanValidator;

    /**
     *
     * IsTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    IsTrue(): IBooleanValidator;

    /**
     *
     * IsFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    IsFalse(): IBooleanValidator;
}

interface INumberValidator {

    /**
     *
     * IsNotNull checks if the type number variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {INumberValidator}
     */
    IsNotNull(): INumberValidator;

    /**
     *
     * IsNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {INumberValidator}
     */
    IsNull(): INumberValidator;


    /**
     * IsDefined checks if the number variable is defined
     * @throws ReferenceError if the number variable jis not defined
     * @returns {INumberValidator}
     */
    IsDefined(): INumberValidator;

    /**
     * IsUndefined checks if the number variable is undefined
     * @throws a ReferenceError if the number variable is undefined
     * @returns {INumberValidator}
     */
    IsUndefined(): INumberValidator;

    /**
     * IsNullOrUndefined checks if the number variable is not null or undefined
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {INumberValidator}
     */
    IsNullOrUndefined(): INumberValidator;

    /**
     *
     * IsEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsEqualTo(compareTo: number): INumberValidator;

    /**
     *
     * IsNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsNotEqualTo(compareTo: number): INumberValidator;

    /**
     *
     * IsGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsGreaterThan(compareTo: number): INumberValidator;

    /**
     *
     * IsNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsNotGreaterThan(compareTo: number): INumberValidator;

    /**
     *
     * IsGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsGreaterOrEqualThan(compareTo: number): INumberValidator;

    /**
     *
     * IsNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
     * parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsNotGreaterOrEqualThan(compareTo: number): INumberValidator;

    /**
     *
     * IsLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsLessThan(compareTo: number): INumberValidator;

    /**
     *
     * IsNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsNotLessThan(compareTo: number): INumberValidator;

    /**
     *
     * IsLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsLessOrEqualThan(compareTo: number): INumberValidator;

    /**
     *
     * IsNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    IsNotLessOrEqualThan(compareTo: number): INumberValidator;

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     * @constructor
     */
    IsBetween(startRange: number, endRange: number): INumberValidator;

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     */
    IsNotBetween(startRange: number, endRange: number): INumberValidator;
}

interface IStringValidator {

    /**
     *
     * IsNotNull checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {IStringValidator}
     */
    IsNotNull(): IStringValidator;

    /**
     *
     * IsNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {IStringValidator}
     */
    IsNull(): IStringValidator;

    /**
     * IsDefined checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     * @returns {IStringValidator}
     */
    IsDefined(): IStringValidator;

    /**
     * IsNotDefined checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     * @returns {IStringValidator}
     */
    IsUndefined(): IStringValidator;


    /**
     * IsNullOrUndefined checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {IStringValidator}
     */
    IsNullOrUndefined(): IStringValidator;

    /**
     *
     * IsEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsEqualTo(compareTo: string): IStringValidator;

    /**
     *
     * IsNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsNotEqualTo(compareTo: string): IStringValidator;

    /**
     *
     * IsLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsLessThan(compareTo: string): IStringValidator;

    /**
     *
     * IsNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsNotLessThan(compareTo: string): IStringValidator;

    /**
     *
     * IsLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsLengthGreaterThan(compareTo: string): IStringValidator;

    /**
     *
     * IsLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsLengthGreaterOrEqualTo(compareTo: string): IStringValidator;

    /**
     *
     * IsLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsLengthNotGreaterThan(compareTo: string): IStringValidator;

    /**
     *
     * IsLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    IsLengthNotGreaterOrEqualTo(compareTo: string): IStringValidator;

    /**
     * IsLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    IsLengthLessThan(compareTo: string): IStringValidator;

    /**
     * IsLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    IsLengthNotLessThan(compareTo: string): IStringValidator;

    /**
     * IsLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    IsLengthLessOrEqualThan(compareTo: string): IStringValidator;

    /**
     * IsLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    IsLengthNotLessOrEqualThan(compareTo: string): IStringValidator;

    /**
     *
     * ToMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    ToMatch(regExp: any): IStringValidator;

    /**
     *
     * ToNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    ToNotMatch(regExp: RegExp): IStringValidator;

    /**
     *
     * Contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    Contains(compareTo: string): IStringValidator;

    /**
     *
     * NotContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    NotContains(compareTo: string): IStringValidator;

    /**
     *
     * StartsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    StartsWith(compareTo: string): IStringValidator;

    /**
     *
     * NotStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    NotStartsWith(compareTo: string): IStringValidator;

    /**
     *
     * EndsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    EndsWith(compareTo: string): IStringValidator;

    /**
     *
     * NotEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    NotEndsWith(compareTo: string): IStringValidator;

    /**
     *
     * IsBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    IsBetween(startRange: string, endRange: string): IStringValidator;

    /**
     *
     * IsNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    IsNotBetween(startRange: string, endRange: string): IStringValidator;
}
declare module "typedcontract" {
	/**
	 * Encapsulates any validators that apply to every type and state used by the validation chain.
	 */
	export class BaseValidator<T> {
	    protected _variableValue: T;
	    protected _variableName: string;
	    constructor(variableValue: T, variableName: string);
	    /**
	     * Value returns the value that was passed into the contract
	     * @returns {T}
	     * @constructor
	     */
	    Value(): T;
	    /**
	     * Name returns the variable name that was passed into the contract
	     * @returns {string}
	     * @constructor
	     */
	    Name(): string;
	}

}
declare module "typedcontract" {
	/// <reference path="TypeValidators.d.ts" />
	import { BaseValidator } from "typedcontract";
	export class StringValidator extends BaseValidator<string> {
	    constructor(variableValue: string, variableName: string);
	    /**
	     *
	     * IsNotNull checks if the string variable is not null
	     * @throws a ReferenceError if the variable is null
	     * @returns {IStringValidator}
	     */
	    IsNotNull(): IStringValidator;
	    /**
	     *
	     * IsNull checks if the string variable is null
	     * @throws a ReferenceError if the variable is not null
	     * @returns {IStringValidator}
	     */
	    IsNull(): IStringValidator;
	    /**
	     * IsDefined checks if the string variable is defined
	     * @throws ReferenceError if the string is not defined
	     * @returns {IStringValidator}
	     */
	    IsDefined(): IStringValidator;
	    /**
	     * IsNotDefined checks if the string variable is not defined
	     * @throws ReferenceError if variable is defined
	     * @returns {IStringValidator}
	     */
	    IsUndefined(): IStringValidator;
	    /**
	     * IsNullOrUndefined checks if a string variable is not null or undefined
	     * @throws ReferenceError if a string variable is null or not undefined
	     * @returns {IStringValidator}
	     */
	    IsNullOrUndefined(): IStringValidator;
	    /**
	     *
	     * IsEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsEqualTo(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsNotEqualTo(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsLessThan checks if the string variable is less than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsLessThan(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not less than to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsNotLessThan(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsLengthGreaterThan(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
	     * to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsLengthGreaterOrEqualTo(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsLengthNotGreaterThan(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    IsLengthNotGreaterOrEqualTo(compareTo: string): IStringValidator;
	    /**
	     * IsLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     *
	     */
	    IsLengthLessThan(compareTo: string): IStringValidator;
	    /**
	     * IsLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     *
	     */
	    IsLengthNotLessThan(compareTo: string): IStringValidator;
	    /**
	     * IsLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater than the comparable passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     *
	     */
	    IsLengthLessOrEqualThan(compareTo: string): IStringValidator;
	    /**
	     * IsLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is less or equal than the comparable passed into the function
	     * @param compareTo
	     * @returns {IStringValidator}
	     *
	     */
	    IsLengthNotLessOrEqualThan(compareTo: string): IStringValidator;
	    /**
	     *
	     * ToMatch checks if the regular expression passed into the function matches the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param regExp
	     * @returns {IStringValidator}
	     */
	    ToMatch(regExp: any): IStringValidator;
	    /**
	     *
	     * ToNotMatch checks if the regular expression passed into the function does not match the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param regExp
	     * @returns {IStringValidator}
	     */
	    ToNotMatch(regExp: RegExp): IStringValidator;
	    /**
	     *
	     * Contains checks if the string passed into the function contains a match of the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does match the values in the precondition
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    Contains(compareTo: string): IStringValidator;
	    /**
	     *
	     * NotContains checks if the string passed into the function contains a match of the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    NotContains(compareTo: string): IStringValidator;
	    /**
	     *
	     * StartsWith checks if the precondition in the TypedContract has the same starting string
	     * value as the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    StartsWith(compareTo: string): IStringValidator;
	    /**
	     *
	     * NotStartsWith checks if the precondition in the TypedContract does not have the same starting string
	     * value as the comparable variable passed into the function
	     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    NotStartsWith(compareTo: string): IStringValidator;
	    /**
	     *
	     * EndsWith checks if the precondition in the TypedContract has the same ending string
	     * values as the comparable variable passed into the function
	     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    EndsWith(compareTo: string): IStringValidator;
	    /**
	     *
	     * NotEndsWith checks if the precondition in the TypedContract does not have the same ending string
	     * values as the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
	     * @param compareTo
	     * @returns {IStringValidator}
	     */
	    NotEndsWith(compareTo: string): IStringValidator;
	    /**
	     *
	     * IsBetween checks if the precondition in the TypedContract is in between the starting and ending string range
	     * and are compared against the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
	     * starting and ending range
	     * @param startRange, endRange
	     * @returns {IStringValidator}
	     */
	    IsBetween(startRange: string, endRange: string): IStringValidator;
	    /**
	     *
	     * IsNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
	     * and are compared against the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract is in between the
	     * starting and ending range
	     * @param startRange, endRange
	     * @returns {IStringValidator}
	     */
	    IsNotBetween(startRange: string, endRange: string): IStringValidator;
	}

}
declare module "typedcontract" {
	/// <reference path="TypeValidators.d.ts" />
	import { BaseValidator } from "typedcontract";
	export class BooleanValidator extends BaseValidator<boolean> {
	    constructor(variableValue: boolean, variableName: string);
	    /**
	     *
	     * IsNull checks if the boolean variable is null
	     * @throws a ReferenceError if the variable is not null
	     */
	    IsNull(): IBooleanValidator;
	    /**
	     *
	     * IsNotNull checks if the boolean variable is not null
	     * @throws a ReferenceError if the variable is null
	     */
	    IsNotNull(): IBooleanValidator;
	    /**
	     * IsDefined checks if the boolean variable is defined
	     * @throws a ReferenceError if the boolen variable is undefined
	     * @returns {IBooleanValidator}
	     */
	    IsDefined(): IBooleanValidator;
	    /**
	     * IsUndefined checks if the boolean variable is undefined
	     * @throws ReferenceError if the boolean variable is defined
	     * @returns {IBooleanValidator}
	     */
	    IsUndefined(): IBooleanValidator;
	    /**
	     * IsNullOrUndefined checks if the boolean variable is not null or undefined
	     * @throws ReferenceError if the boolean variable is null or undefined
	     * @returns {IBooleanValidator}
	     */
	    IsNullOrUndefined(): IBooleanValidator;
	    /**
	     *
	     * IsEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
	     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    IsEqualTo(compareTo: boolean): IBooleanValidator;
	    /**
	     *
	     * IsNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
	     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    IsNotEqualTo(compareTo: boolean): IBooleanValidator;
	    /**
	     *
	     * IsTrue checks if the boolean variable is true
	     * @throws RangeError if the boolean variable is false
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    IsTrue(): IBooleanValidator;
	    /**
	     *
	     * IsFalse checks if the boolean variable is false
	     * @throws RangeError if the boolean variable is alse
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    IsFalse(): IBooleanValidator;
	}

}
declare module "typedcontract" {
	/// <reference path="TypeValidators.d.ts" />
	import { BaseValidator } from "typedcontract";
	export class NumberValidator extends BaseValidator<number> {
	    constructor(variableValue: number, variableName: string);
	    /**
	     *
	     * IsNotNull checks if the type number variable is not null
	     * @throws a ReferenceError if the variable is null
	     * @returns {INumberValidator}
	     */
	    IsNotNull(): INumberValidator;
	    /**
	     *
	     * IsNull checks if the string variable is null
	     * @throws a ReferenceError if the variable is not null
	     * @returns {INumberValidator}
	     */
	    IsNull(): INumberValidator;
	    /**
	     * IsDefined checks if the number variable is defined
	     * @throws ReferenceError if the number variable jis not defined
	     * @returns {INumberValidator}
	     */
	    IsDefined(): INumberValidator;
	    /**
	     * IsUndefined checks if the number variable is undefined
	     * @throws a ReferenceError if the number variable is undefined
	     * @returns {INumberValidator}
	     */
	    IsUndefined(): INumberValidator;
	    /**
	     * IsNullOrUndefined checks if the number variable is not null or undefined
	     * @throws ReferenceError if the number variable is null or undefined
	     * @returns {INumberValidator}
	     */
	    IsNullOrUndefined(): INumberValidator;
	    /**
	     *
	     * IsEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsEqualTo(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsNotEqualTo(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsGreaterThan(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsNotGreaterThan(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsGreaterOrEqualThan(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
	     * parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsNotGreaterOrEqualThan(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsLessThan checks if the number variable is less than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsLessThan(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsNotLessThan(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsLessOrEqualThan(compareTo: number): INumberValidator;
	    /**
	     *
	     * IsNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
	     * @param compareTo
	     * @returns {INumberValidator}
	     */
	    IsNotLessOrEqualThan(compareTo: number): INumberValidator;
	    /**
	     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
	     * @param startRange
	     * @param endRange
	     * @returns {NumberValidator}
	     */
	    IsBetween(startRange: number, endRange: number): INumberValidator;
	    /**
	     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
	     * @param startRange
	     * @param endRange
	     * @returns {NumberValidator}
	     */
	    IsNotBetween(startRange: number, endRange: number): INumberValidator;
	}

}
declare module "typedcontract" {
	/// <reference path="TypeValidators.d.ts" />
	import { BaseValidator } from "typedcontract";
	export class ArrayValidator extends BaseValidator<any[]> implements IArrayValidator {
	    private count;
	    constructor(variableValue: any[], variableName: string);
	    /**
	     *
	     * IsNull Checks if the array variable is null
	     * @throws ReferenceError if the variable is not null
	     * @returns { IArrayValidator }
	     */
	    IsNull(): IArrayValidator;
	    /**
	     *
	     * IsNotNull checks if the array variable is not null
	     * @throws ReferenceError if the variable is null
	     * @returns { IArrayValidator }
	     */
	    IsNotNull(): IArrayValidator;
	    /**
	     * IsDefined checks if the array variable is defined
	     * @throws ReferenceError if the array variable is undefined
	     * @returns { IArrayValidator }
	     */
	    IsDefined(): IArrayValidator;
	    /**
	     * IsUndefined checks if the array variable is undefined
	     * @throws ReferenceError if the array variable is defined
	     * @returns { IArrayValidator }
	     */
	    IsUndefined(): IArrayValidator;
	    /**
	     * IsNullOrUndefined checks if the array variable is not null or undefined
	     * @throws ReferenceError if the array variable is null or undefined
	     * @returns { IArrayValidator }
	     */
	    IsNullOrUndefined(): IArrayValidator;
	    /**
	     *
	     * IsEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
	     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
	     * @param compareTo, index
	     * @returns { IArrayValidator }
	     */
	    IsEqualTo(compareTo: any[], index: number): IArrayValidator;
	    /**
	     *
	     * IsNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
	     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
	     * @param compareTo, index
	     * @returns { IArrayValidator }
	     */
	    IsNotEqualTo(compareTo: any[], index: number): IArrayValidator;
	    /**
	     *
	     * IsLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
	     * @throws RangeError if the array is not greater than the parameter passed into the function
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthGreaterThan(compareTo: any[]): IArrayValidator;
	    /**
	     *
	     * IsLengthNotGreaterThan checks if the array variable"s length is not greater than the length of the contract precondition
	     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthNotGreaterThan(compareTo: any[]): IArrayValidator;
	    /**
	     *
	     * IsLengthGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is not
	     * greater or equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthGreaterOrEqualTo(compareTo: any[]): IArrayValidator;
	    /**
	     *
	     * IsLengthNotGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is not greater or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthNotGreaterOrEqualTo(compareTo: any[]): ArrayValidator;
	    /**
	     *
	     * IsLengthLessThan checks if the array variable"s length is less than the length of the contract precondition
	     * @throws RangeError if the array variable is greater or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthLessThan(compareTo: any[]): ArrayValidator;
	    /**
	     *
	     * IsLengthNotLessThan checks if the array variable"s length is not less than the length of the contract precondition
	     * @throws RangeError if the array variable is less than or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthNotLessThan(compareTo: any[]): ArrayValidator;
	    /**
	     *
	     * IsLengthLessOrEqualThan checks if the array variable"s length is less or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is greater than
	     * the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthLessOrEqualThan(compareTo: any[]): ArrayValidator;
	    /**
	     *
	     * IsLengthNotLessOrEqualThan checks if the array variable"s length is not less or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is less or equal than
	     * the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    IsLengthNotLessOrEqualThan(compareTo: any[]): IArrayValidator;
	    /**
	     *
	     * Contains checks if the array variable"s values contains one or more values
	     * with in the precondition of the TypedContract
	     * @throws RangeError if the array variable does not contain any of the values
	     *  passed into the instance of the TypedContract using the Contains function
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    Contains(compareTo: any[]): IArrayValidator;
	    /**
	     *
	     * NotContains checks if the array variable"s values does not contain any values
	     * with in the precondition of the TypedContract
	     * @throws RangeError if the array variable does contain any of the values
	     *  passed into the instance of the TypedContract using the NotContains function
	     * @param compareTo
	     * @returns { IArrayValidator }
	     */
	    NotContains(compareTo: any[]): ArrayValidator;
	}

}
declare module "typedcontract" {
	/// <reference path="TypeValidators.d.ts" />
	import { BaseValidator } from "typedcontract";
	export class AnyValidator extends BaseValidator<any> implements IAnyValidator {
	    constructor(variableValue: any, variableName: string);
	    /**
	     *
	     * IsNotNull checks if the type any variable is not null
	     * @throws a ReferenceError if the any is null
	     * @returns { IAnyValidator }
	     */
	    IsNotNull(): IAnyValidator;
	    /**
	     *
	     * IsNull checks if the any variable is null
	     * @throws a ReferenceError if the variable is not null
	     * @returns { IAnyValidator }
	     */
	    IsNull(): IAnyValidator;
	    /**
	     * IsDefined checks if the any variable is defined
	     * @throws ReferenceError if the any variable jis not defined
	     * @returns { IAnyValidator }
	     */
	    IsDefined(): IAnyValidator;
	    /**
	     * IsUndefined checks if the any variable is undefined
	     * @throws a ReferenceError if the any variable is undefined
	     * @returns { IAnyValidator }
	     */
	    IsUndefined(): IAnyValidator;
	    /**
	     * IsNullOrUndefined checks if the any variable is not null or undefined
	     * @throws ReferenceError if the any variable is null or undefined
	     * @returns { IAnyValidator }
	     */
	    IsNullOrUndefined(): IAnyValidator;
	}

}
declare module "typedcontract" {
	/// <reference path="../TypeValidators/TypeValidators.d.ts" />
	import { StringValidator } from "typedcontract";
	import { BooleanValidator } from "typedcontract";
	import { NumberValidator } from "typedcontract";
	export class Contract {
	    In(precondition: string): StringValidator;
	    In(precondition: string, name: string): StringValidator;
	    In(precondition: boolean): BooleanValidator;
	    In(precondition: boolean, name: string): BooleanValidator;
	    In(precondition: number): NumberValidator;
	    In(precondition: number, name: string): NumberValidator;
	    In(precondition: any[]): IArrayValidator;
	    In(precondition: any[], name: string): IArrayValidator;
	    In(precondition: any, name: string): IAnyValidator;
	    In(precondition: any): IAnyValidator;
	    Out(postcondition: string): StringValidator;
	    Out(postcondition: string, name: string): StringValidator;
	    Out(postcondition: boolean): BooleanValidator;
	    Out(postcondition: boolean, name: string): BooleanValidator;
	    Out(postcondition: number): NumberValidator;
	    Out(postcondition: number, name: string): NumberValidator;
	    Out(postcondition: any[]): IArrayValidator;
	    Out(postcondition: any[], name: string): IArrayValidator;
	    Out(postcondition: any, name: string): IAnyValidator;
	    Out(postcondition: any): IAnyValidator;
	}
	export var contract: Contract;

}
