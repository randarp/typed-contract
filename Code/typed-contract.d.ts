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
    ToNotMatch(regExp: RegExp): StringValidator;
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
interface IContractStatic {
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
    In(precondition: any, name: string): any;
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
    Out(postcondition: any, name: string): any;
}
declare class Contract implements IContractStatic {
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
declare var contract: IContractStatic;
