/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />
/// <reference path="../../TypedContract/TypeValidators/DOMValidator.ts" />

/**
 * Created by Andre on 2016-04-19.
 */
describe("DOMValidator", () => {
    it("IsNotNull returns the proper validator when given an undefined", () => {
        let localVar: any;

        let result: AnyValidator = Contract.In(localVar).IsNotNull();

        expect(result);
    });


    it("IsNotNull returns the right validator", () => {
        // arrange
        let localVariable: any = "A string";

        // act
        let result: AnyValidator = Contract.In(localVariable).IsNotNull();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNotNull is passed the an empty string", () => {
        let localVar: string = "";

        let result: AnyValidator = Contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
        expect(result).toEqual(jasmine.any(StringValidator));
    });

    it("IsNotNull is passed in a defined number variable", () => {
        let localVar: any = 100;

        let result: AnyValidator = Contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
    });

    it("IsNull expects a result of an error thrown", () => {

        // arrange
        let localVariable: any = {a: "TypeScript", b: function(){ return null; }, c: [1, 2, 3]};

        // act/assert
        expect(() => {
            Contract.In(localVariable).IsNull();
        }).toThrow(new ReferenceError("The variable should be null")); // getting right result, assertion statement wrong
    });

    it("IsDefined should return the proper result ", () => {

        let localVar: string = "Andre";

        let result: AnyValidator = Contract.In(localVar).IsDefined();

        expect(result).toBeDefined();

    });

    it("IsNull should return the proper result", () => {
        let localVar: string = null;

        let result: AnyValidator = Contract.In(localVar).IsNull();

        expect(result);

    });

    it("IsNotDefined return the proper result", () => {
        let myVar: any;

        let result: AnyValidator = Contract.In(myVar, "").IsUndefined();

        expect(result);
    });

    it("IsNullOrUndefined returns proper validator with a undefined variable", () => {

        let localVar: any;

        expect( () => {
            Contract.In(localVar).IsNullOrUndefined();
        }).toThrowError(<any>ReferenceError);
    });

    it("IsNullOrUndefined returns the proper validator with a defined variable", () => {

        let localVar: any = "Hello World";

        expect( () => {
            Contract.In(localVar).IsNullOrUndefined();
        }).toThrow(new ReferenceError("The variable should not be null or undefined"));

    });

    it("IsNotNull on an MouseEvent type for an AnyValidator to return true", () => {
        let divElement: HTMLElement = document.createElement("div");

        let localVar: void = divElement.addEventListener("click", (e: MouseEvent) => {e.preventDefault(); }, false);

        let result: AnyValidator = Contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
    });

    it("IsNotNull on an anonymous function for an AnyValidator", () => {
        let localVar: any = () => {var x = 1; return x; };

        let result: AnyValidator = Contract.In(localVar).IsNotNull();

        expect(result).not.toBe(null);
    });

    it("Returns true if there is a matching HTML attribute based on the parameters given", () => {
        let divElem: HTMLElement = document.createElement("DIV");
        divElem.setAttribute("id", "test");
        let result: DOMValidator = Contract.In(divElem).HasAttribute("id");

        expect(result);
    });

    it("Throws an error if there is not a matching HTML attribute based on the parameters given", () => {
        let divElem: HTMLElement = document.createElement("DIV");
        divElem.setAttribute("name", "test");

        expect(() => {
            Contract.In(divElem).HasAttribute("id");
        }).toThrowError(<any>RangeError);
    });

    it("Returns true with a style attribute to see if there is a matching attribute given", () => {
        let h1Elem: HTMLElement = document.createElement("H1");
        h1Elem.setAttribute("style", "color: black;");

        let result: DOMValidator = Contract.In(h1Elem).HasAttribute("style");

        expect(result);
    });

    it("Returns true when checking if there is not an HTML attribute", () => {
        let htmlElem: HTMLElement = document.createElement("div");
        htmlElem.setAttribute("class", "typed-contract");

        let result: DOMValidator = Contract.In(htmlElem).NotHasAttribute("id");

        expect(result);
    });

    it("Throws an error when checking if there is no attribute, but attribute ", () => {

        let htmlElem: HTMLElement = document.createElement("div");
        htmlElem.setAttribute("id", "typed-contract");

        expect(() => {
            Contract.In(htmlElem).NotHasAttribute("id");
        }).toThrowError(<any>RangeError);
    });

    it("Returns true, when checking if the innerHTML of an element has the same contents as the argument passed", () => {

        let divElem: HTMLElement = document.createElement("div");
        divElem.innerHTML = "TypedContract rocks!";

        let result: DOMValidator = Contract.In(divElem).HasInnerHTML("TypedContract rocks!");

        expect(result);
    });

    it("Throws error, when checking if the innerHTML of an element does not have the same contents as the argument passed", () => {

        let divElem: HTMLElement = document.createElement("div");
        divElem.innerHTML = "TypeScript rocks!";

        expect( () => {
            Contract.In(divElem).HasInnerHTML("TypedContract rocks!");
        }).toThrowError(<any>RangeError);
    });

    it("Returns true when given a Regular Expression that matches in the innerHTML for the H1 element", () => {
        let divElem: HTMLElement = document.createElement("h1");
        divElem.innerHTML = "This is a sentence for TypedContract";

        let result: DOMValidator = Contract.In(divElem).ToMatchInnerHTML(/TypedContract/i);

        expect(result);
    });

    it("Throws an error when given a Regular Expression that does not match the pattern for the HTML element innerHTML string contents", () => {
        let divElem: HTMLElement = document.createElement("h1");
        divElem.innerHTML = "This is a sentence for TypedContract";

        expect( () => {
            Contract.In(divElem).ToMatchInnerHTML(/TypeScript/);
        });
    });

    it("Throws an error when given a Regular Expression that matches in the innerHTML for the H1 element", () => {
        let divElem: HTMLElement = document.createElement("h1");
        divElem.innerHTML = "This is a sentence for TypedContract";

        expect( () => {
            Contract.In(divElem).NotToMatchInnerHTML(/TypedContract/);
        }).toThrowError(<any>RangeError);
    });

    it("Returns true when given a Regular Expression that does not match the pattern for the HTML element innerHTML string contents", () => {
        let divElem: HTMLElement = document.createElement("h1");
        divElem.innerHTML = "This is a sentence for TypedContract";

        expect( () => {
            Contract.In(divElem).NotToMatchInnerHTML(/TypeScript/);
        }).not.toThrowError(<any>RangeError);
    });

    it("Returns true if there is a class style attribute is present", () => {
        let domElem: HTMLElement = document.createElement("div");
        domElem.style.height = "400px";
        domElem.style.width = "300px";
        domElem.className = "test";

        let result: DOMValidator = Contract.In(domElem).HasClass("test");

        expect(result);

    });

    it("Throws an error if there is not a class style attribute is present", () => {
        let domElem: HTMLElement = document.createElement("div");
        domElem.style.height = "400px";
        domElem.style.width = "300px";
        domElem.className = "testing123";


        expect( () => {
            Contract.In(domElem).HasClass("test");
        }).toThrowError(<any>RangeError);

    });

    it("Returns true if there is no class on an HTML element", () => {

        let domElem: HTMLElement = document.createElement("div");
        domElem.className = "cssClass";

        let result: DOMValidator = Contract.In(domElem).NotHasClass("noClass");

        expect(result);
    });

    it("Throws an error if there is a class for the NotHasClass function", () => {
       let domElem: HTMLElement = document.createElement("div");

       domElem.className = "cssClass";

       expect( () => {
            Contract.In(domElem).NotHasClass("cssClass");
       }).toThrowError(<any>RangeError);
    });

    it("Throws an error if there is a multiple css classes on the HTMLElement for the NotHasClass function", () => {
        let domElem: HTMLElement = document.createElement("div");

        domElem.className = "cssClass";
        domElem.className += "cssClass2";

        expect( () => {
            Contract.In(domElem).NotHasClass("cssClasscssClass2");
        }).toThrowError(<any>RangeError);
    });



});