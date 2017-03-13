declare interface IContractStatic {
    checks(precondition:string):IStringValidator;
    checks(precondition:string, name:string):IStringValidator;
    checks(precondition:boolean):IBooleanValidator;
    checks(precondition:boolean, name:string):IBooleanValidator;
    checks(precondition:number):INumberValidator;
    checks(precondition:number, name:string):INumberValidator;
    checks(precondition:any[]):IArrayValidator;
    checks(precondition:any[], name:string):IArrayValidator;
    checks(precondition:any, name:string):IAnyValidator;
    checks(precondition:any):IAnyValidator;
    checks(precondition:any, name:string):any;

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