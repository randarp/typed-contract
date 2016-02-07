/// <reference path="../typed-contract.d.ts" />
export declare module Contract {
    function In(precondition: string): StringValidator;
    function In(precondition: boolean): BooleanValidator;
    function Out(postcondition: any): boolean;
}
