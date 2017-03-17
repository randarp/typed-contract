declare interface IContractStatic {
    In(precondition:string):IStringValidator;
    In(precondition:string, name:string):IStringValidator;
    In(precondition:boolean):IBooleanValidator;
    In(precondition:boolean, name:string):IBooleanValidator;
    In(precondition:number):INumberValidator;
    In(precondition:number, name:string):INumberValidator;
    In(precondition:any[]):IArrayValidator;
    In(precondition:any[], name:string):IArrayValidator;
    In(precondition:any, name:string):IAnyValidator;
    In(precondition:any):IAnyValidator;
    In(precondition:any, name:string):any;
    Out(postcondition:string):IStringValidator;
    Out(postcondition:string, name:string):IStringValidator;
    Out(postcondition:boolean):IBooleanValidator;
    Out(postcondition:boolean, name:string):IBooleanValidator;
    Out(postcondition:number):INumberValidator;
    Out(postcondition:number, name:string):INumberValidator;
    Out(postcondition:any[]):IArrayValidator;
    Out(postcondition:any[], name:string):IArrayValidator;
    Out(postcondition:any, name:string):IAnyValidator;
    Out(postcondition:any):IAnyValidator;
    Out(postcondition:any, name:string):any;
}interface IBaseValidator<T> {
    /**
     * value returns the value that was passed into the contract
     * @returns {T}
     * @constructor
     */
    value(): T;
    /**
     * name returns the variable name that was passed into the contract
     * @returns {string}
     * @constructor
     */
    name(): string;
}
interface IAnyValidator extends IBaseValidator<any> {
    /**
     *
     * isNotNull checks if the type any variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the any is null
     * @returns {IAnyValidator}
     */
    isNotNull(message: string): IAnyValidator;
    /**
     *
     * isNull checks if the any variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     * @returns {IAnyValidator}
     */
    isNull(message: string): IAnyValidator;
    /**
     * isDefined checks if the any variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the any variable jis not defined
     * @returns {IAnyValidator}
     */
    isDefined(message: string): IAnyValidator;
    /**
     * isUndefined checks if the any variable is undefined
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the any variable is undefined
     * @returns {IAnyValidator}
     */
    isUndefined(message: string): IAnyValidator;
    /**
     * isNullOrUndefined checks if the any variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the any variable is null or undefined
     * @returns {IAnyValidator}
     */
    isNullOrUndefined(message: string): IAnyValidator;
}
interface IArrayValidator extends IBaseValidator<any[]> {
    /**
     *
     * isNull Checks if the array variable is null
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the variable is not null
     * @returns { IArrayValidator}
     */
    isNull(message: string): IArrayValidator;
    /**
     *
     * isNotNull checks if the array variable is not null
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the variable is null
     * @returns { IArrayValidator}
     */
    isNotNull(message: string): IArrayValidator;
    /**
     * isDefined checks if the array variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the array variable is undefined
     * @returns { IArrayValidator}
     */
    isDefined(message: string): IArrayValidator;
    /**
     * isUndefined checks if the array variable is undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the array variable is defined
     * @returns { IArrayValidator}
     */
    isUndefined(message: string): IArrayValidator;
    /**
     * isNullOrUndefined checks if the array variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { IArrayValidator}
     */
    isNullOrUndefined(message: string): IArrayValidator;
    /**
     *
     * isEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isEqualTo(compareTo: any[], index: number, message: string): IArrayValidator;
    /**
     *
     * isNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isNotEqualTo(compareTo: any[], index: number, message: string): IArrayValidator;
    /**
     *
     * isLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthGreaterThan(compareTo: any[] | number, message: string): IArrayValidator;
    /**
     *
     * isLengthNotGreaterThan checks if the array variable"s length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthNotGreaterThan(compareTo: any[] | number, message: string): IArrayValidator;
    /**
     *
     * isLengthGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthGreaterOrEqualTo(compareTo: any[] | number, message: string): IArrayValidator;
    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthNotGreaterOrEqualTo(compareTo: any[] | number, message: string):  IArrayValidator;
    /**
     *
     * isLengthLessThan checks if the array variable"s length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthLessThan(compareTo: any[] | number, message: string):  IArrayValidator;
    /**
     *
     * isLengthNotLessThan checks if the array variable"s length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthNotLessThan(compareTo: any[] | number, message: string):  IArrayValidator;
    /**
     *
     * isLengthLessOrEqualThan checks if the array variable"s length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthLessOrEqualThan(compareTo: any[] | number, message: string):  IArrayValidator;
    /**
     *
     * isLengthNotLessOrEqualThan checks if the array variable"s length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    isLengthNotLessOrEqualThan(compareTo: any[] | number, message: string): IArrayValidator;
    /**
     *
     * contains checks if the array variable"s values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the contains function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    contains(compareTo: any[], message: string): IArrayValidator;
    /**
     *
     * notContains checks if the array variable"s values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the notContains function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns { IArrayValidator}
     */
    notContains(compareTo: any[], message: string): IArrayValidator;
}
interface IBooleanValidator extends IBaseValidator<boolean> {
    /**
     * isNull checks if the boolean variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     */
    isNull(message: string): IBooleanValidator;
    /**
     * isNotNull checks if the boolean variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is null
     */
    isNotNull(message: string): IBooleanValidator;
    /**
     * isDefined checks if the boolean variable is defined
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */
    isDefined(message: string): IBooleanValidator;
    /**
     * isUndefined checks if the boolean variable is undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */
    isUndefined(message: string): IBooleanValidator;
    /**
     * isNullOrUndefined checks if the boolean variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */
    isNullOrUndefined(message: string): IBooleanValidator;
    /**
     *
     * isEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @param compareTo
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @returns {IBooleanValidator}
     */
    isEqualTo(compareTo: boolean, message: string): IBooleanValidator;
    /**
     *
     * isNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @param compareTo
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @returns {IBooleanValidator}
     */
    isNotEqualTo(compareTo: boolean, message: string): IBooleanValidator;
    /**
     *
     * isTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param message is an optional message if validation fails
     * @returns {IBooleanValidator}
     */
    isTrue(message: string): IBooleanValidator;
    /**
     *
     * isFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param message is an optional message if validation fails
     * @returns {IBooleanValidator}
     */
    isFalse(message: string): IBooleanValidator;
}
interface INumberValidator extends IBaseValidator<number> {
    /**
     *
     * isNotNull checks if the type number variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is null
     * @returns {INumberValidator}
     */
    isNotNull(message: string): INumberValidator;
    /**
     *
     * isNull checks if the string variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     * @returns {INumberValidator}
     */
    isNull(message: string): INumberValidator;
    /**
     * isDefined checks if the number variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the number variable jis not defined
     * @returns {INumberValidator}
     */
    isDefined(message: string): INumberValidator;
    /**
     * isUndefined checks if the number variable is undefined
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the number variable is undefined
     * @returns {INumberValidator}
     */
    isUndefined(message: string): INumberValidator;
    /**
     * isNullOrUndefined checks if the number variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {INumberValidator}
     */
    isNullOrUndefined(message: string): INumberValidator;
    /**
     *
     * isEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isEqualTo(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @param compareTo
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @returns {INumberValidator}
     */
    isNotEqualTo(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @returns {INumberValidator}
     */
    isGreaterThan(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @returns {INumberValidator}
     */
    isNotGreaterThan(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @returns {INumberValidator}
     */
    isGreaterOrEqualThan(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
     * parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @param compareTo
     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
     * @returns {INumberValidator}
     */
    isNotGreaterOrEqualThan(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @param compareTo
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @returns {INumberValidator}
     */
    isLessThan(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @param compareTo
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @returns {INumberValidator}
     */
    isNotLessThan(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @returns {INumberValidator}
     */
    isLessOrEqualThan(compareTo: number, message: string): INumberValidator;
    /**
     *
     * isNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @returns {INumberValidator}
     */
    isNotLessOrEqualThan(compareTo: number, message: string): INumberValidator;
    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
     * @param startRange
     * @param endRange
     * @param message is an optional message if validation fails
     * @returns {NumberValidator}
     * @constructor
     */
    isBetween(startRange: number, endRange: number, message: string): INumberValidator;
    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
     * @param startRange
     * @param endRange
     * @param message is an optional message if validation fails
     * @returns {NumberValidator}
     */
    isNotBetween(startRange: number, endRange: number, message: string): INumberValidator;
}
interface IStringValidator extends IBaseValidator<string> {
    /**
     *
     * isNotNull checks if the string variable is not null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is null
     * @returns {IStringValidator}
     */
    isNotNull(message: string): IStringValidator;
    /**
     *
     * isNull checks if the string variable is null
     * @param message is an optional message if validation fails
     * @throws a ReferenceError if the variable is not null
     * @returns {IStringValidator}
     */
    isNull(message: string): IStringValidator;
    /**
     * Checks if a string is only whitespace
     * @param message is an optional message if validation fails
     * @returns {StringValidator}
     */
    isWhitespace(message: string): IStringValidator;
    /**
     * Checks if a string is not just whitespace
     * @param message is an optional message if validation fails
     * @returns {StringValidator}
     */
    isNotWhitespace(message: string): IStringValidator;
    /**
     * isDefined checks if the string variable is defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if the string is not defined
     * @returns {IStringValidator}
     */
    isDefined(message: string): IStringValidator;
    /**
     * isNotDefined checks if the string variable is not defined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if variable is defined
     * @returns {IStringValidator}
     */
    isUndefined(message: string): IStringValidator;
    /**
     * isNullOrUndefined checks if a string variable is not null or undefined
     * @param message is an optional message if validation fails
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {IStringValidator}
     */
    isNullOrUndefined(message: string): IStringValidator;
    /**
     *
     * isEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @param message is an optional message if validation fails
     * @param compareTo
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isEqualTo(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isNotEqualTo(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isLessThan(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isNotLessThan(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isLengthGreaterThan(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isLengthGreaterOrEqualTo(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isLengthNotGreaterThan(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @returns {IStringValidator}
     */
    isLengthNotGreaterOrEqualTo(compareTo: string, message: string): IStringValidator;
    /**
     * isLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @returns {IStringValidator}
     *
     */
    isLengthLessThan(compareTo: string, message: string): IStringValidator;
    /**
     * isLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @param compareTo
     * @param message is an optional message if validation fails
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @returns {IStringValidator}
     *
     */
    isLengthNotLessThan(compareTo: string, message: string): IStringValidator;
    /**
     * isLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     *
     */
    isLengthLessOrEqualThan(compareTo: string, message: string): IStringValidator;
    /**
     * isLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     *
     */
    isLengthNotLessOrEqualThan(compareTo: string, message: string): IStringValidator;
    /**
     *
     * toMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    toMatch(regExp: RegExp, message: string): IStringValidator;
    /**
     *
     * toNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    toNotMatch(regExp: RegExp, message: string): IStringValidator;
    /**
     *
     * contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    contains(compareTo: string, message: string): IStringValidator;
    /**
     *
     * notContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    notContains(compareTo: string, message: string): IStringValidator;
    /**
     *
     * startsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    startsWith(compareTo: string, message: string): IStringValidator;
    /**
     *
     * notStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    notStartsWith(compareTo: string, message: string): IStringValidator;
    /**
     *
     * endsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    endsWith(compareTo: string, message: string): IStringValidator;
    /**
     *
     * notEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    notEndsWith(compareTo: string, message: string): IStringValidator;
    /**
     *
     * isBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    isBetween(startRange: string, endRange: string, message: string): IStringValidator;
    /**
     *
     * isNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @param message is an optional message if validation fails
     * @returns {IStringValidator}
     */
    isNotBetween(startRange: string, endRange: string, message: string): IStringValidator;
}
/// <reference path="icontract.d.ts" />
/// <reference path="type-validators/type-validators.d.ts" />
declare var contract: IContractStatic;
declare var typedcontract: any;
declare module "typedcontract" {
	/**
	 * Encapsulates any validators that apply to every type and state used by the validation chain.
	 */
	export class BaseValidator<T> {
	    protected _variableValue: T;
	    protected _variableName: string;
	    constructor(variableValue: T, variableName: string);
	    /**
	     * value returns the value that was passed into the contract
	     * @returns {T}
	     * @constructor
	     */
	    value(): T;
	    /**
	     * name returns the variable name that was passed into the contract
	     * @returns {string}
	     * @constructor
	     */
	    name(): string;
	    /**
	     * Will return either the custom message passed in or the default message
	     * @param optionalMessage
	     * @param defaultMessage
	     * @returns {string}
	     */
	    protected validationMessage(optionalMessage: string, defaultMessage: string): string;
	}

	export class StringValidator extends BaseValidator<string> implements IStringValidator {
	    constructor(variableValue: string, variableName: string);
	    /**
	     * isNotNull checks if the string variable is not null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the variable is null
	     * @returns {IStringValidator}
	     */
	    isNotNull(message?: string): IStringValidator;
	    /**
	     *
	     * isNull checks if the string variable is null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the variable is not null
	     * @returns {IStringValidator}
	     */
	    isNull(message?: string): IStringValidator;
	    /**
	     * Checks if a string is only whitespace
	     * @param message is an optional message if validation fails
	     * @returns {StringValidator}
	     */
	    isWhitespace(message?: string): IStringValidator;
	    /**
	     * Checks if a string is not only whitespace
	     * @param message is an optional message if validation fails
	     * @returns {StringValidator}
	     */
	    isNotWhitespace(message?: string): IStringValidator;
	    /**
	     * isDefined checks if the string variable is defined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the string is not defined
	     * @returns {IStringValidator}
	     */
	    isDefined(message?: string): IStringValidator;
	    /**
	     * isNotDefined checks if the string variable is not defined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if variable is defined
	     * @returns {IStringValidator}
	     */
	    isUndefined(message?: string): IStringValidator;
	    /**
	     * isNullOrUndefined checks if a string variable is not null or undefined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if a string variable is null or not undefined
	     * @returns {IStringValidator}
	     */
	    isNullOrUndefined(message?: string): IStringValidator;
	    /**
	     *
	     * isEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isEqualTo(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isNotEqualTo(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isLessThan checks if the string variable is less than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isLessThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not less than to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isNotLessThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isLengthGreaterThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
	     * to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isLengthGreaterOrEqualTo(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isLengthNotGreaterThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
	     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isLengthNotGreaterOrEqualTo(compareTo: string, message?: string): IStringValidator;
	    /**
	     * isLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     *
	     */
	    isLengthLessThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     * isLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     *
	     */
	    isLengthNotLessThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     * isLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is greater than the comparable passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     *
	     */
	    isLengthLessOrEqualThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     * isLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
	     * @throws RangeError if the string length is less or equal than the comparable passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     *
	     */
	    isLengthNotLessOrEqualThan(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * toMatch checks if the regular expression passed into the function matches the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param regExp
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    toMatch(regExp: any, message?: string): IStringValidator;
	    /**
	     *
	     * toNotMatch checks if the regular expression passed into the function does not match the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param regExp
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    toNotMatch(regExp: RegExp, message?: string): IStringValidator;
	    /**
	     *
	     * contains checks if the string passed into the function contains a match of the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does match the values in the precondition
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    contains(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * notContains checks if the string passed into the function contains a match of the string
	     * precondition in the TypedContract
	     * @throws RangeError if the regular expression does not match the values in the precondition
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    notContains(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * startsWith checks if the precondition in the TypedContract has the same starting string
	     * value as the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    startsWith(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * notStartsWith checks if the precondition in the TypedContract does not have the same starting string
	     * value as the comparable variable passed into the function
	     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    notStartsWith(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * endsWith checks if the precondition in the TypedContract has the same ending string
	     * values as the comparable variable passed into the function
	     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    endsWith(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * notEndsWith checks if the precondition in the TypedContract does not have the same ending string
	     * values as the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    notEndsWith(compareTo: string, message?: string): IStringValidator;
	    /**
	     *
	     * isBetween checks if the precondition in the TypedContract is in between the starting and ending string range
	     * and are compared against the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
	     * starting and ending range
	     * @param startRange
	     * @param endRange
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isBetween(startRange: string, endRange: string, message?: string): IStringValidator;
	    /**
	     *
	     * isNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
	     * and are compared against the comparable variable passed into the function
	     * @throws RangeError if the comparable argument passed into TypedContract is in between the
	     * starting and ending range
	     * @param startRange
	     * @param endRange
	     * @param message is an optional message if validation fails
	     * @returns {IStringValidator}
	     */
	    isNotBetween(startRange: string, endRange: string, message?: string): IStringValidator;
	}

	export class BooleanValidator extends BaseValidator<boolean> implements IBooleanValidator {
	    constructor(variableValue: boolean, variableName: string);
	    /**
	     * isNull checks if the boolean variable is null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the variable is not null
	     */
	    isNull(message?: string): IBooleanValidator;
	    /**
	     * isNotNull checks if the boolean variable is not null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the variable is null
	     */
	    isNotNull(message?: string): IBooleanValidator;
	    /**
	     * isDefined checks if the boolean variable is defined
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the boolen variable is undefined
	     * @returns {IBooleanValidator}
	     */
	    isDefined(message?: string): IBooleanValidator;
	    /**
	     * isUndefined checks if the boolean variable is undefined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the boolean variable is defined
	     * @returns {IBooleanValidator}
	     */
	    isUndefined(message?: string): IBooleanValidator;
	    /**
	     * isNullOrUndefined checks if the boolean variable is not null or undefined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the boolean variable is null or undefined
	     * @returns {IBooleanValidator}
	     */
	    isNullOrUndefined(message?: string): IBooleanValidator;
	    /**
	     *
	     * isEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
	     * @param message is an optional message if validation fails
	     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    isEqualTo(compareTo: boolean, message?: string): IBooleanValidator;
	    /**
	     *
	     * isNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
	     * @param message is an optional message if validation fails
	     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    isNotEqualTo(compareTo: boolean, message?: string): IBooleanValidator;
	    /**
	     *
	     * isTrue checks if the boolean variable is true
	     * @param message is an optional message if validation fails
	     * @throws RangeError if the boolean variable is false
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    isTrue(message?: string): IBooleanValidator;
	    /**
	     *
	     * isFalse checks if the boolean variable is false
	     * @param message is an optional message if validation fails
	     * @throws RangeError if the boolean variable is alse
	     * @param compareTo
	     * @returns {IBooleanValidator}
	     */
	    isFalse(message?: string): IBooleanValidator;
	}

	export class NumberValidator extends BaseValidator<number> implements INumberValidator {
	    constructor(variableValue: number, variableName: string);
	    /**
	     * isNotNull checks if the type number variable is not null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the variable is null
	     * @returns {INumberValidator}
	     */
	    isNotNull(message?: string): INumberValidator;
	    /**
	     *
	     * isNull checks if the string variable is null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the variable is not null
	     * @returns {INumberValidator}
	     */
	    isNull(message?: string): INumberValidator;
	    /**
	     * isDefined checks if the number variable is defined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the number variable jis not defined
	     * @returns {INumberValidator}
	     */
	    isDefined(message?: string): INumberValidator;
	    /**
	     * isUndefined checks if the number variable is undefined
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the number variable is undefined
	     * @returns {INumberValidator}
	     */
	    isUndefined(message?: string): INumberValidator;
	    /**
	     * isNullOrUndefined checks if the number variable is not null or undefined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the number variable is null or undefined
	     * @returns {INumberValidator}
	     */
	    isNullOrUndefined(message?: string): INumberValidator;
	    /**
	     * isEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @throws RangeError if the number variable is not equal to the parameter passed into the function
	     * @returns {INumberValidator}
	     */
	    isEqualTo(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @returns {INumberValidator}
	     */
	    isNotEqualTo(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isGreaterThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isNotGreaterThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isGreaterOrEqualThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
	     * parameter passed into the function as an argument
	     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isNotGreaterOrEqualThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isLessThan checks if the number variable is less than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isLessThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater to the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isNotLessThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isLessOrEqualThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     *
	     * isNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
	     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns {INumberValidator}
	     */
	    isNotLessOrEqualThan(compareTo: number, message?: string): INumberValidator;
	    /**
	     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
	     * @param startRange
	     * @param endRange
	     * @param message is an optional message if validation fails
	     * @returns {NumberValidator}
	     */
	    isBetween(startRange: number, endRange: number, message?: string): INumberValidator;
	    /**
	     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
	     * @param startRange
	     * @param endRange
	     * @param message is an optional message if validation fails
	     * @returns {NumberValidator}
	     */
	    isNotBetween(startRange: number, endRange: number, message?: string): INumberValidator;
	}

	export class ArrayValidator extends BaseValidator<any[]> implements IArrayValidator {
	    constructor(variableValue: any[], variableName: string);
	    /**
	     * isNull Checks if the array variable is null
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the variable is not null
	     * @returns { IArrayValidator }
	     */
	    isNull(message?: string): IArrayValidator;
	    /**
	     * isNotNull checks if the array variable is not null
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the variable is null
	     * @returns { IArrayValidator }
	     */
	    isNotNull(message?: string): IArrayValidator;
	    /**
	     * isDefined checks if the array variable is defined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the array variable is undefined
	     * @returns { IArrayValidator }
	     */
	    isDefined(message?: string): IArrayValidator;
	    /**
	     * isUndefined checks if the array variable is undefined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the array variable is defined
	     * @returns { IArrayValidator }
	     */
	    isUndefined(message?: string): IArrayValidator;
	    /**
	     * isNullOrUndefined checks if the array variable is not null or undefined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the array variable is null or undefined
	     * @returns { IArrayValidator }
	     */
	    isNullOrUndefined(message?: string): IArrayValidator;
	    /**
	     *
	     * isEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
	     * @param message is an optional message if validation fails
	     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
	     * @param compareTo, index
	     * @returns { IArrayValidator }
	     */
	    isEqualTo(compareTo: any[], index: number, message?: string): IArrayValidator;
	    /**
	     *
	     * isNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
	     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
	     * @param compareTo, index
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isNotEqualTo(compareTo: any[], index: number, message?: string): IArrayValidator;
	    /**
	     *
	     * isLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
	     * @throws RangeError if the array is not greater than the parameter passed into the function
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthGreaterThan(compareTo: any[] | number, message?: string): IArrayValidator;
	    /**
	     *
	     * isLengthNotGreaterThan checks if the array variable"s length is not greater than the length of the contract precondition
	     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthNotGreaterThan(compareTo: any[] | number, message?: string): IArrayValidator;
	    /**
	     *
	     * isLengthGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is not
	     * greater or equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthGreaterOrEqualTo(compareTo: any[] | number, message?: string): IArrayValidator;
	    /**
	     *
	     * isLengthNotGreaterOrEqualTo checks if the array variable"s length is greater or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is not greater or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthNotGreaterOrEqualTo(compareTo: any[] | number, message?: string): ArrayValidator;
	    /**
	     *
	     * isLengthLessThan checks if the array variable"s length is less than the length of the contract precondition
	     * @throws RangeError if the array variable is greater or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthLessThan(compareTo: any[] | number, message?: string): ArrayValidator;
	    /**
	     *
	     * isLengthNotLessThan checks if the array variable"s length is not less than the length of the contract precondition
	     * @throws RangeError if the array variable is less than or
	     * equal than the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthNotLessThan(compareTo: any[] | number, message?: string): ArrayValidator;
	    /**
	     *
	     * isLengthLessOrEqualThan checks if the array variable"s length is less or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is greater than
	     * the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthLessOrEqualThan(compareTo: any[] | number, message?: string): ArrayValidator;
	    /**
	     *
	     * isLengthNotLessOrEqualThan checks if the array variable"s length is not less or equal than the length of the contract precondition
	     * @throws RangeError if the array variable is less or equal than
	     * the length of the precondition passed into the instance of the TypedContract
	     * @param compareTo is a number or another array
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    isLengthNotLessOrEqualThan(compareTo: any[] | number, message?: string): IArrayValidator;
	    /**
	     *
	     * contains checks if the array variable"s values contains one or more values
	     * with in the precondition of the TypedContract
	     * @throws RangeError if the array variable does not contain any of the values
	     *  passed into the instance of the TypedContract using the contains function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    contains(compareTo: any[], message?: string): IArrayValidator;
	    /**
	     *
	     * notContains checks if the array variable"s values does not contain any values
	     * with in the precondition of the TypedContract
	     * @throws RangeError if the array variable does contain any of the values
	     *  passed into the instance of the TypedContract using the notContains function
	     * @param compareTo
	     * @param message is an optional message if validation fails
	     * @returns { IArrayValidator }
	     */
	    notContains(compareTo: any[], message?: string): ArrayValidator;
	   
	}

	export class AnyValidator extends BaseValidator<any> implements IAnyValidator {
	    constructor(variableValue: any, variableName: string);
	    /**
	     *
	     * isNotNull checks if the type any variable is not null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the any is null
	     * @returns { IAnyValidator }
	     */
	    isNotNull(message?: string): IAnyValidator;
	    /**
	     *
	     * isNull checks if the any variable is null
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the variable is not null
	     * @returns { IAnyValidator }
	     */
	    isNull(message?: string): IAnyValidator;
	    /**
	     * isDefined checks if the any variable is defined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the any variable jis not defined
	     * @returns { IAnyValidator }
	     */
	    isDefined(message?: string): IAnyValidator;
	    /**
	     * isUndefined checks if the any variable is undefined
	     * @param message is an optional message if validation fails
	     * @throws a ReferenceError if the any variable is undefined
	     * @returns { IAnyValidator }
	     */
	    isUndefined(message?: string): IAnyValidator;
	    /**
	     * isNullOrUndefined checks if the any variable is not null or undefined
	     * @param message is an optional message if validation fails
	     * @throws ReferenceError if the any variable is null or undefined
	     * @returns { IAnyValidator }
	     */
	    isNullOrUndefined(message?: string): IAnyValidator;
	}

	export class Contract implements IContractStatic {
	    In(precondition: string): IStringValidator;
	    In(precondition: string, name: string): IStringValidator;
	    In(precondition: boolean): IBooleanValidator;
	    In(precondition: boolean, name: string): IBooleanValidator;
	    In(precondition: number): INumberValidator;
	    In(precondition: number, name: string): INumberValidator;
	    In(precondition: any[]): IArrayValidator;
	    In(precondition: any[], name: string): IArrayValidator;
	    In(precondition: any, name: string): IAnyValidator;
	    In(precondition: any): IAnyValidator;
	    Out(postcondition: string): IStringValidator;
	    Out(postcondition: string, name: string): IStringValidator;
	    Out(postcondition: boolean): IBooleanValidator;
	    Out(postcondition: boolean, name: string): IBooleanValidator;
	    Out(postcondition: number): INumberValidator;
	    Out(postcondition: number, name: string): INumberValidator;
	    Out(postcondition: any[]): IArrayValidator;
	    Out(postcondition: any[], name: string): IArrayValidator;
	    Out(postcondition: any, name: string): IAnyValidator;
	    Out(postcondition: any): IAnyValidator;
	}
	export var contract: IContractStatic;
}
