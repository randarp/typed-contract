declare var contract: any;
declare var typedcontract: any;
declare module 'typed-contract/TypeValidators/BaseValidator' {
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
declare module 'typed-contract/TypeValidators/StringValidator' {
	import { BaseValidator } from 'typed-contract/TypeValidators/BaseValidator';
	export class StringValidator extends BaseValidator<string> {
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

}
declare module 'typed-contract/TypeValidators/BooleanValidator' {
	import { BaseValidator } from 'typed-contract/TypeValidators/BaseValidator';
	export class BooleanValidator extends BaseValidator<boolean> {
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

}
declare module 'typed-contract/TypeValidators/NumberValidator' {
	import { BaseValidator } from 'typed-contract/TypeValidators/BaseValidator';
	export class NumberValidator extends BaseValidator<number> {
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

}
declare module 'typed-contract/TypeValidators/ArrayValidator' {
	import { BaseValidator } from 'typed-contract/TypeValidators/BaseValidator';
	export class ArrayValidator extends BaseValidator<any[]> {
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

}
declare module 'typed-contract/TypeValidators/AnyValidator' {
	import { BaseValidator } from 'typed-contract/TypeValidators/BaseValidator';
	export class AnyValidator extends BaseValidator<any> {
	    constructor(variableValue: any, variableName: string);
	    /**
	     *
	     * IsNotNull checks if the type any variable is not null
	     * @throws a ReferenceError if the any is null
	     * @returns {AnyValidator}
	     */
	    IsNotNull(): AnyValidator;
	    /**
	     *
	     * IsNull checks if the any variable is null
	     * @throws a ReferenceError if the variable is not null
	     * @returns {AnyValidator}
	     */
	    IsNull(): AnyValidator;
	    /**
	     * IsDefined checks if the any variable is defined
	     * @throws ReferenceError if the any variable jis not defined
	     * @returns {AnyValidator}
	     */
	    IsDefined(): AnyValidator;
	    /**
	     * IsUndefined checks if the any variable is undefined
	     * @throws a ReferenceError if the any variable is undefined
	     * @returns {AnyValidator}
	     */
	    IsUndefined(): AnyValidator;
	    /**
	     * IsNullOrUndefined checks if the any variable is not null or undefined
	     * @throws ReferenceError if the any variable is null or undefined
	     * @returns {AnyValidator}
	     */
	    IsNullOrUndefined(): AnyValidator;
	}

}
declare module 'typed-contract/Contract/Contract' {
	import { StringValidator } from 'typed-contract/TypeValidators/StringValidator';
	import { BooleanValidator } from 'typed-contract/TypeValidators/BooleanValidator';
	import { NumberValidator } from 'typed-contract/TypeValidators/NumberValidator';
	import { ArrayValidator } from 'typed-contract/TypeValidators/ArrayValidator';
	import { AnyValidator } from 'typed-contract/TypeValidators/AnyValidator';
	export class Contract {
	    In(precondition: string): StringValidator;
	    In(precondition: string, name: string): StringValidator;
	    In(precondition: boolean): BooleanValidator;
	    In(precondition: boolean, name: string): BooleanValidator;
	    In(precondition: number): NumberValidator;
	    In(precondition: number, name: string): NumberValidator;
	    In(precondition: any[]): ArrayValidator;
	    In(precondition: any[], name: string): ArrayValidator;
	    In(precondition: any, name: string): AnyValidator;
	    In(precondition: any): AnyValidator;
	    Out(postcondition: string): StringValidator;
	    Out(postcondition: string, name: string): StringValidator;
	    Out(postcondition: boolean): BooleanValidator;
	    Out(postcondition: boolean, name: string): BooleanValidator;
	    Out(postcondition: number): NumberValidator;
	    Out(postcondition: number, name: string): NumberValidator;
	    Out(postcondition: any[]): ArrayValidator;
	    Out(postcondition: any[], name: string): ArrayValidator;
	    Out(postcondition: any, name: string): AnyValidator;
	    Out(postcondition: any): AnyValidator;
	}

}
