declare class BaseValidator<T> {
    protected _variableValue: T;
    protected _variableName: string;
    constructor(variableValue: T, variableName: string);
}
declare class StringValidator extends BaseValidator<string> {
    constructor(variableValue: string, variableName: string);
    IsNotNull(): StringValidator;
}
declare class BooleanValidator extends BaseValidator<boolean> {
    constructor(variableValue: boolean, variableName: string);
    IsTrue(): BooleanValidator;
}
declare class NumberValidator extends BaseValidator<number> {
    constructor(variableValue: number, variableName: string);
    IsGreaterThan(compareTo: number): NumberValidator;
}
declare class ArrayValidator extends BaseValidator<any[]> {
    constructor(variableValue: any[], variableName: string);
    IsEmpty(): ArrayValidator;
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
    function Out(postcondition: any): boolean;
}
