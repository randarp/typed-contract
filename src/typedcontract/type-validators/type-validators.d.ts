interface IBaseValidator<T> {
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
     * @throws a ReferenceError if the any is null
     * @returns {IAnyValidator}
     */
    isNotNull(): IAnyValidator;

    /**
     *
     * isNull checks if the any variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {IAnyValidator}
     */
    isNull(): IAnyValidator;


    /**
     * isDefined checks if the any variable is defined
     * @throws ReferenceError if the any variable jis not defined
     * @returns {IAnyValidator}
     */
    isDefined(): IAnyValidator;

    /**
     * isUndefined checks if the any variable is undefined
     * @throws a ReferenceError if the any variable is undefined
     * @returns {IAnyValidator}
     */
    isUndefined(): IAnyValidator;

    /**
     * isNullOrUndefined checks if the any variable is not null or undefined
     * @throws ReferenceError if the any variable is null or undefined
     * @returns {IAnyValidator}
     */
    isNullOrUndefined(): IAnyValidator;
}

interface IArrayValidator extends IBaseValidator<any[]> {
    /**
     *
     * isNull Checks if the array variable is null
     * @throws ReferenceError if the variable is not null
     * @returns { IArrayValidator}
     */
    isNull(): IArrayValidator;


    /**
     *
     * isNotNull checks if the array variable is not null
     * @throws ReferenceError if the variable is null
     * @returns { IArrayValidator}
     */

    isNotNull(): IArrayValidator;

    /**
     * isDefined checks if the array variable is defined
     * @throws ReferenceError if the array variable is undefined
     * @returns { IArrayValidator}
     */
    isDefined(): IArrayValidator;

    /**
     * isUndefined checks if the array variable is undefined
     * @throws ReferenceError if the array variable is defined
     * @returns { IArrayValidator}
     */

    isUndefined(): IArrayValidator;

    /**
     * isNullOrUndefined checks if the array variable is not null or undefined
     * @throws ReferenceError if the array variable is null or undefined
     * @returns { IArrayValidator}
     */

    isNullOrUndefined(): IArrayValidator;

    /**
     *
     * isEqualTo checks if the array variable is equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is not equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator}
     */
    isEqualTo(compareTo: any[], index: number): IArrayValidator;

    /**
     *
     * isNotEqualTo checks if the array variable is not equal to the index of the parameter passed into the function as an argument
     * @throws RangeError if the array variable is equal to the index given parameter passed into the function
     * @param compareTo, index
     * @returns { IArrayValidator}
     */
    isNotEqualTo(compareTo: any[], index: number): IArrayValidator;

    /**
     *
     * isLengthGreaterThan checks if the array variable length is greater than the parameter passed into the function as an argument
     * @throws RangeError if the array is not greater than the parameter passed into the function
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */
    isLengthGreaterThan(compareTo: any[] | number): IArrayValidator;

    /**
     *
     * isLengthNotGreaterThan checks if the array variable's length is not greater than the length of the contract precondition
     * @throws RangeError if the array variable is greater than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */
    isLengthNotGreaterThan(compareTo: any[] | number): IArrayValidator;

    /**
     *
     * isLengthGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not
     * greater or equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */

    isLengthGreaterOrEqualTo(compareTo: any[] | number): IArrayValidator;

    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the array variable's length is greater or equal than the length of the contract precondition
     * @throws RangeError if the array variable is not greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */
    isLengthNotGreaterOrEqualTo(compareTo: any[] | number):  IArrayValidator;

    /**
     *
     * isLengthLessThan checks if the array variable's length is less than the length of the contract precondition
     * @throws RangeError if the array variable is greater or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */
    isLengthLessThan(compareTo: any[] | number):  IArrayValidator;

    /**
     *
     * isLengthNotLessThan checks if the array variable's length is not less than the length of the contract precondition
     * @throws RangeError if the array variable is less than or
     * equal than the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */

    isLengthNotLessThan(compareTo: any[] | number):  IArrayValidator;

    /**
     *
     * isLengthLessOrEqualThan checks if the array variable's length is less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is greater than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */
    isLengthLessOrEqualThan(compareTo: any[] | number):  IArrayValidator;

    /**
     *
     * isLengthNotLessOrEqualThan checks if the array variable's length is not less or equal than the length of the contract precondition
     * @throws RangeError if the array variable is less or equal than
     * the length of the precondition passed into the instance of the TypedContract
     * @param compareTo is a number or another array
     * @returns { IArrayValidator}
     */
    isLengthNotLessOrEqualThan(compareTo: any[] | number): IArrayValidator;

    /**
     *
     * contains checks if the array variable's values contains one or more values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does not contain any of the values
     *  passed into the instance of the TypedContract using the contains function
     * @param compareTo
     * @returns { IArrayValidator}
     */

    contains(compareTo: any[]): IArrayValidator;

    /**
     *
     * notContains checks if the array variable's values does not contain any values
     * with in the precondition of the TypedContract
     * @throws RangeError if the array variable does contain any of the values
     *  passed into the instance of the TypedContract using the notContains function
     * @param compareTo
     * @returns { IArrayValidator}
     */

    notContains(compareTo: any[]): IArrayValidator;
}

interface IBooleanValidator extends IBaseValidator<boolean> {

    /**
     *
     * isNull checks if the boolean variable is null
     * @throws a ReferenceError if the variable is not null
     */
    isNull(): IBooleanValidator;

    /**
     *
     * isNotNull checks if the boolean variable is not null
     * @throws a ReferenceError if the variable is null
     */
    isNotNull(): IBooleanValidator;

    /**
     * isDefined checks if the boolean variable is defined
     * @throws a ReferenceError if the boolen variable is undefined
     * @returns {IBooleanValidator}
     */
    isDefined(): IBooleanValidator;

    /**
     * isUndefined checks if the boolean variable is undefined
     * @throws ReferenceError if the boolean variable is defined
     * @returns {IBooleanValidator}
     */
    isUndefined(): IBooleanValidator;

    /**
     * isNullOrUndefined checks if the boolean variable is not null or undefined
     * @throws ReferenceError if the boolean variable is null or undefined
     * @returns {IBooleanValidator}
     */
    isNullOrUndefined(): IBooleanValidator;

    /**
     *
     * isEqualTo checks if the boolean variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    isEqualTo(compareTo: boolean): IBooleanValidator;

    /**
     *
     * isNotEqualTo checks if the boolean variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the boolean variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    isNotEqualTo(compareTo: boolean): IBooleanValidator;

    /**
     *
     * isTrue checks if the boolean variable is true
     * @throws RangeError if the boolean variable is false
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    isTrue(): IBooleanValidator;

    /**
     *
     * isFalse checks if the boolean variable is false
     * @throws RangeError if the boolean variable is alse
     * @param compareTo
     * @returns {IBooleanValidator}
     */
    isFalse(): IBooleanValidator;
}

interface INumberValidator extends IBaseValidator<number> {

    /**
     *
     * isNotNull checks if the type number variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {INumberValidator}
     */
    isNotNull(): INumberValidator;

    /**
     *
     * isNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {INumberValidator}
     */
    isNull(): INumberValidator;


    /**
     * isDefined checks if the number variable is defined
     * @throws ReferenceError if the number variable jis not defined
     * @returns {INumberValidator}
     */
    isDefined(): INumberValidator;

    /**
     * isUndefined checks if the number variable is undefined
     * @throws a ReferenceError if the number variable is undefined
     * @returns {INumberValidator}
     */
    isUndefined(): INumberValidator;

    /**
     * isNullOrUndefined checks if the number variable is not null or undefined
     * @throws ReferenceError if the number variable is null or undefined
     * @returns {INumberValidator}
     */
    isNullOrUndefined(): INumberValidator;

    /**
     *
     * isEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isEqualTo(compareTo: number): INumberValidator;

    /**
     *
     * isNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isNotEqualTo(compareTo: number): INumberValidator;

    /**
     *
     * isGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is less or equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isGreaterThan(compareTo: number): INumberValidator;

    /**
     *
     * isNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isNotGreaterThan(compareTo: number): INumberValidator;

    /**
     *
     * isGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isGreaterOrEqualThan(compareTo: number): INumberValidator;

    /**
     *
     * isNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
     * parameter passed into the function as an argument
     * @throws RangeError if the number variable is equal or greater than parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isNotGreaterOrEqualThan(compareTo: number): INumberValidator;

    /**
     *
     * isLessThan checks if the number variable is less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isLessThan(compareTo: number): INumberValidator;

    /**
     *
     * isNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isNotLessThan(compareTo: number): INumberValidator;

    /**
     *
     * isLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isLessOrEqualThan(compareTo: number): INumberValidator;

    /**
     *
     * isNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {INumberValidator}
     */
    isNotLessOrEqualThan(compareTo: number): INumberValidator;

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     * @constructor
     */
    isBetween(startRange: number, endRange: number): INumberValidator;

    /**
     * Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
     * @param startRange
     * @param endRange
     * @returns {NumberValidator}
     */
    isNotBetween(startRange: number, endRange: number): INumberValidator;
}

interface IStringValidator extends IBaseValidator<string> {

    /**
     *
     * isNotNull checks if the string variable is not null
     * @throws a ReferenceError if the variable is null
     * @returns {IStringValidator}
     */
    isNotNull(): IStringValidator;

    /**
     *
     * isNull checks if the string variable is null
     * @throws a ReferenceError if the variable is not null
     * @returns {IStringValidator}
     */
    isNull(): IStringValidator;

    /**
     * isDefined checks if the string variable is defined
     * @throws ReferenceError if the string is not defined
     * @returns {IStringValidator}
     */
    isDefined(): IStringValidator;

    /**
     * isNotDefined checks if the string variable is not defined
     * @throws ReferenceError if variable is defined
     * @returns {IStringValidator}
     */
    isUndefined(): IStringValidator;


    /**
     * isNullOrUndefined checks if a string variable is not null or undefined
     * @throws ReferenceError if a string variable is null or not undefined
     * @returns {IStringValidator}
     */
    isNullOrUndefined(): IStringValidator;

    /**
     *
     * isEqualTo cecks if the string variable is equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isEqualTo(compareTo: string): IStringValidator;

    /**
     *
     * isNotEqualTo checks if the string variable is not equal to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is equal to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isNotEqualTo(compareTo: string): IStringValidator;

    /**
     *
     * isLessThan checks if the string variable is less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isLessThan(compareTo: string): IStringValidator;

    /**
     *
     * isNotLessThan checks if the string variable is not less than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not less than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isNotLessThan(compareTo: string): IStringValidator;

    /**
     *
     * isLengthGreaterThan checks if the string variable length is greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isLengthGreaterThan(compareTo: string): IStringValidator;

    /**
     *
     * isLengthGreaterOrEqualTo checks if the string variable length is greater or equal than
     * to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is not greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isLengthGreaterOrEqualTo(compareTo: string): IStringValidator;

    /**
     *
     * isLengthNotGreaterThan checks if the string variable length is not greater than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is less or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isLengthNotGreaterThan(compareTo: string): IStringValidator;

    /**
     *
     * isLengthNotGreaterOrEqualTo checks if the string variable length is not greater or equal than to the parameter passed into the function as an argument
     * @throws RangeError if the string variable is greater or equal than to the parameter passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     */
    isLengthNotGreaterOrEqualTo(compareTo: string): IStringValidator;

    /**
     * isLengthLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    isLengthLessThan(compareTo: string): IStringValidator;

    /**
     * isLengthNotLessThan checks if length of the string is less than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater or equal to the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    isLengthNotLessThan(compareTo: string): IStringValidator;

    /**
     * isLengthLessOrEqualThan checks if length of the string is less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is greater than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    isLengthLessOrEqualThan(compareTo: string): IStringValidator;

    /**
     * isLengthNotLessOrEqualThan checks if length of the string is not less or equal than the comparable passed into the TypedContract
     * @throws RangeError if the string length is less or equal than the comparable passed into the function
     * @param compareTo
     * @returns {IStringValidator}
     *
     */
    isLengthNotLessOrEqualThan(compareTo: string): IStringValidator;

    /**
     *
     * toMatch checks if the regular expression passed into the function matches the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    toMatch(regExp: any): IStringValidator;

    /**
     *
     * toNotMatch checks if the regular expression passed into the function does not match the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param regExp
     * @returns {IStringValidator}
     */
    toNotMatch(regExp: RegExp): IStringValidator;

    /**
     *
     * contains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    contains(compareTo: string): IStringValidator;

    /**
     *
     * notContains checks if the string passed into the function contains a match of the string
     * precondition in the TypedContract
     * @throws RangeError if the regular expression does not match the values in the precondition
     * @param compareTo
     * @returns {IStringValidator}
     */
    notContains(compareTo: string): IStringValidator;

    /**
     *
     * startsWith checks if the precondition in the TypedContract has the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    startsWith(compareTo: string): IStringValidator;

    /**
     *
     * notStartsWith checks if the precondition in the TypedContract does not have the same starting string
     * value as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same starting values
     * @param compareTo
     * @returns {IStringValidator}
     */
    notStartsWith(compareTo: string): IStringValidator;

    /**
     *
     * endsWith checks if the precondition in the TypedContract has the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the compareTo argument passed into TypedContract does not contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    endsWith(compareTo: string): IStringValidator;

    /**
     *
     * notEndsWith checks if the precondition in the TypedContract does not have the same ending string
     * values as the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract does contain the same ending values
     * @param compareTo
     * @returns {IStringValidator}
     */
    notEndsWith(compareTo: string): IStringValidator;

    /**
     *
     * isBetween checks if the precondition in the TypedContract is in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is not in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    isBetween(startRange: string, endRange: string): IStringValidator;

    /**
     *
     * isNotBetween checks if the precondition in the TypedContract is not in between the starting and ending string range
     * and are compared against the comparable variable passed into the function
     * @throws RangeError if the comparable argument passed into TypedContract is in between the
     * starting and ending range
     * @param startRange, endRange
     * @returns {IStringValidator}
     */
    isNotBetween(startRange: string, endRange: string): IStringValidator;
}
