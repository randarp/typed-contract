declare interface IContractStatic {
    pre(precondition:string):IStringValidator;
    pre(precondition:string, name:string):IStringValidator;
    pre(precondition:boolean):IBooleanValidator;
    pre(precondition:boolean, name:string):IBooleanValidator;
    pre(precondition:number):INumberValidator;
    pre(precondition:number, name:string):INumberValidator;
    pre(precondition:any[]):IArrayValidator;
    pre(precondition:any[], name:string):IArrayValidator;
    pre(precondition:any, name:string):IAnyValidator;
    pre(precondition:any):IAnyValidator;
    pre(precondition:any, name:string):any;

    ensures(postcondition:string):IStringValidator;
    ensures(postcondition:string, name:string):IStringValidator;
    ensures(postcondition:boolean):IBooleanValidator;
    ensures(postcondition:boolean, name:string):IBooleanValidator;
    ensures(postcondition:number):INumberValidator;
    ensures(postcondition:number, name:string):INumberValidator;
    ensures(postcondition:any[]):IArrayValidator;
    ensures(postcondition:any[], name:string):IArrayValidator;
    ensures(postcondition:any, name:string):IAnyValidator;
    ensures(postcondition:any):IAnyValidator;
    ensures(postcondition:any, name:string):any;
}