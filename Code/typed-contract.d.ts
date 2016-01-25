declare class TestClass {
    Method1(): boolean;
}
declare module Contract {
    function In(precondition: any): boolean;
    function Out(postcondition: any): boolean;
}
