declare class BaseValidator<T> {
    protected _variableValue: T;
    protected _variableName: string;
    constructor(variableValue: T, variableName: string);
    Value(): T;
    Name(): string;
}
declare class StringValidator extends BaseValidator<string> {
    constructor(variableValue: string, variableName: string);
    IsNotNull(): StringValidator;
    IsNull(): StringValidator;
    IsDefined(): StringValidator;
    IsUndefined(): StringValidator;
    IsNullOrUndefined(): StringValidator;
    IsEqualTo(compareTo: string): StringValidator;
    IsNotEqualTo(compareTo: string): StringValidator;
    IsLessThan(compareTo: string): StringValidator;
    IsNotLessThan(compareTo: string): StringValidator;
    IsLengthGreaterThan(compareTo: string): StringValidator;
    IsLengthGreaterOrEqualTo(compareTo: string): StringValidator;
    IsLengthNotGreaterThan(compareTo: string): StringValidator;
    IsLengthNotGreaterOrEqualTo(compareTo: string): StringValidator;
    IsLengthLessThan(compareTo: string): StringValidator;
    IsLengthNotLessThan(compareTo: string): StringValidator;
    IsLengthLessOrEqualThan(compareTo: string): StringValidator;
    IsLengthNotLessOrEqualThan(compareTo: string): StringValidator;
    ToMatch(regExp: any): StringValidator;
    ToNotMatch(regExp: any): StringValidator;
    Contains(compareTo: string): StringValidator;
    NotContains(compareTo: string): StringValidator;
    StartsWith(compareTo: string): StringValidator;
    NotStartsWith(compareTo: string): StringValidator;
    EndsWith(compareTo: string): StringValidator;
    NotEndsWith(compareTo: string): StringValidator;
    IsBetween(startRange: string, endRange: string): StringValidator;
    IsNotBetween(startRange: string, endRange: string): StringValidator;
}
declare class BooleanValidator extends BaseValidator<boolean> {
    constructor(variableValue: boolean, variableName: string);
    IsNull(): BooleanValidator;
    IsNotNull(): BooleanValidator;
    IsDefined(): BooleanValidator;
    IsUndefined(): BooleanValidator;
    IsNullOrUndefined(): BooleanValidator;
    IsEqualTo(compareTo: boolean): BooleanValidator;
    IsNotEqualTo(compareTo: boolean): BooleanValidator;
    IsTrue(): BooleanValidator;
    IsFalse(): BooleanValidator;
}
declare class NumberValidator extends BaseValidator<number> {
    constructor(variableValue: number, variableName: string);
    IsNotNull(): NumberValidator;
    IsNull(): NumberValidator;
    IsDefined(): NumberValidator;
    IsUndefined(): NumberValidator;
    IsNullOrUndefined(): NumberValidator;
    IsEqualTo(compareTo: number): NumberValidator;
    IsNotEqualTo(compareTo: number): NumberValidator;
    IsGreaterThan(compareTo: number): NumberValidator;
    IsNotGreaterThan(compareTo: number): NumberValidator;
    IsGreaterOrEqualThan(compareTo: number): NumberValidator;
    IsNotGreaterOrEqualThan(compareTo: number): NumberValidator;
    IsLessThan(compareTo: number): NumberValidator;
    IsNotLessThan(compareTo: number): NumberValidator;
    IsLessOrEqualThan(compareTo: number): NumberValidator;
    IsNotLessOrEqualThan(compareTo: number): NumberValidator;
    IsBetween(startRange: number, endRange: number): NumberValidator;
    IsNotBetween(startRange: number, endRange: number): NumberValidator;
}
declare class ArrayValidator extends BaseValidator<any[]> {
    private count;
    constructor(variableValue: any[], variableName: string);
    IsNull(): ArrayValidator;
    IsNotNull(): ArrayValidator;
    IsDefined(): ArrayValidator;
    IsUndefined(): ArrayValidator;
    IsNullOrUndefined(): ArrayValidator;
    IsEqualTo(compareTo: any[], index: number): ArrayValidator;
    IsNotEqualTo(compareTo: any[], index: number): ArrayValidator;
    IsLengthGreaterThan(compareTo: any[]): ArrayValidator;
    IsLengthNotGreaterThan(compareTo: any[]): ArrayValidator;
    IsLengthGreaterOrEqualTo(compareTo: any[]): ArrayValidator;
    IsLengthNotGreaterOrEqualTo(compareTo: any[]): ArrayValidator;
    IsLengthLessThan(compareTo: any[]): ArrayValidator;
    IsLengthNotLessThan(compareTo: any[]): ArrayValidator;
    IsLengthLessOrEqualThan(compareTo: any[]): ArrayValidator;
    IsLengthNotLessOrEqualThan(compareTo: any[]): ArrayValidator;
    Contains(compareTo: any[]): ArrayValidator;
    NotContains(compareTo: any[]): ArrayValidator;
}
declare class AnyValidator extends BaseValidator<any> {
    constructor(variableValue: any, variableName: string);
    IsNotNull(): AnyValidator;
    IsNull(): AnyValidator;
    IsDefined(): AnyValidator;
    IsUndefined(): AnyValidator;
    IsNullOrUndefined(): AnyValidator;
}
declare class HTMLValidator extends BaseValidator<HTMLElement> {
    constructor(variableValue: HTMLElement, variableName: string);
    IsNotNull(): HTMLValidator;
    IsNull(): HTMLValidator;
    IsDefined(): HTMLValidator;
    IsUndefined(): HTMLValidator;
    IsNullOrUndefined(): HTMLValidator;
    HasAttribute(attributeName: string): HTMLValidator;
    NotHasAttribute(attributeName: string): HTMLValidator;
}
declare module Contract {
    function In(precondition: string): StringValidator;
    function In(precondition: string, name: string): StringValidator;
    function In(precondition: boolean): BooleanValidator;
    function In(precondition: boolean, name: string): BooleanValidator;
    function In(precondition: number): NumberValidator;
    function In(precondition: number, name: string): NumberValidator;
    function In(precondition: any[]): ArrayValidator;
    function In(precondition: any[], name: string): ArrayValidator;
    function In(precondition: HTMLElement): HTMLValidator;
    function In(precondition: HTMLElement, name: string): HTMLValidator;
    function In(precondition: any, name: string): AnyValidator;
    function In(precondition: any): AnyValidator;
    function Out(postcondition: string): StringValidator;
    function Out(postcondition: string, name: string): StringValidator;
    function Out(postcondition: boolean): BooleanValidator;
    function Out(postcondition: boolean, name: string): BooleanValidator;
    function Out(postcondition: number): NumberValidator;
    function Out(postcondition: number, name: string): NumberValidator;
    function Out(postcondition: any[]): ArrayValidator;
    function Out(postcondition: any[], name: string): ArrayValidator;
    function Out(postcondition: any, name: string): AnyValidator;
    function Out(postcondition: any): AnyValidator;
    function Out(postcondition: HTMLElement): HTMLValidator;
    function Out(postcondition: HTMLElement, name: string): HTMLValidator;
}
