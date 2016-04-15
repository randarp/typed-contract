/// <reference path="../typed-contract.d.ts" />
declare module Contract {
    function In(precondition: string): StringValidator;
    function In(precondition: string, name: string): StringValidator;
    function In(precondition: boolean): BooleanValidator;
    function In(precondition: boolean, name: string): BooleanValidator;
    function In(precondition: number): NumberValidator;
    function In(precondition: number, name: string): NumberValidator;
    function In(precondition: any[]): ArrayValidator;
    function In(precondition: any[], name: string): ArrayValidator;
    function Out(precondition: string): StringValidator;
    function Out(precondition: string, name: string): StringValidator;
    function Out(precondition: boolean): BooleanValidator;
    function Out(precondition: boolean, name: string): BooleanValidator;
    function Out(precondition: number): NumberValidator;
    function Out(precondition: number, name: string): NumberValidator;
    function Out(precondition: any[]): ArrayValidator;
    function Out(precondition: any[], name: string): ArrayValidator;
}
export = Contract;
