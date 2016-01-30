declare class StringValidator {
    IsNotNull(): StringValidator;
}
declare class BooleanValidator {
    IsTrue(): BooleanValidator;
}
declare module Contract {
    function In(precondition: string): StringValidator;
    function In(precondition: boolean): BooleanValidator;
    function Out(postcondition: any): boolean;
}
