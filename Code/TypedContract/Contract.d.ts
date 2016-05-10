/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
/// <reference path="TypeValidators\NumberValidator.ts" />
/// <reference path="TypeValidators\ArrayValidator.ts" />
/// <reference path="TypeValidators\AnyValidator.ts" />

declare interface IContractStatic {
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

