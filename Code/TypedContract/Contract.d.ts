/// <reference path="../typed-contract.d.ts" />

export declare function Out(postcondition: string): StringValidator;
export declare function Out(postcondition: string, name: string): StringValidator;
export declare function Out(postcondition: boolean): BooleanValidator;
export declare function Out(postcondition: boolean, name: string): BooleanValidator;
export declare function Out(postcondition: number): NumberValidator;
export declare function Out(postcondition: number, name: string): NumberValidator;
export declare function Out(postcondition: any[]): ArrayValidator;
export declare function Out(postcondition: any[], name: string): ArrayValidator;
export declare function Out(postcondition: any, name: string): AnyValidator;
export declare function Out(postcondition: any): AnyValidator;