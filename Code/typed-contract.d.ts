declare class BaseValidator {
}
declare class StringValidator extends BaseValidator {
    IsNotNull(): StringValidator;
}
declare class BooleanValidator extends BaseValidator {
    IsTrue(): BooleanValidator;
}
declare class NumberValidator extends BaseValidator {
    IsGreaterThan(compareTo: number): NumberValidator;
}
declare class ArrayValidator extends BaseValidator {
    IsEmpty(): ArrayValidator;
}
declare module Contract {
    function In(precondition: string): StringValidator;
    function In(precondition: boolean): BooleanValidator;
    function In(precondition: number): BooleanValidator;
    function In(precondition: any[]): BooleanValidator;
    function Out(postcondition: any): boolean;
}
