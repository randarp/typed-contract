/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />
/// <reference path="../../TypedContract/TypeValidators/DOMValidator.ts" />

/**
 * Created by Andre on 2016-04-19.
 */
describe("DOMValidator", () => {

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
        }).toThrowError(<any>ReferenceError);
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
        }).toThrowError(<any>ReferenceError);
    });

    it("Returns true, when checking if the innerHTML of an element has the same contents as the argument passed", () => {

        let divElem: HTMLElement = document.createElement("div");
        divElem.innerHTML = "TypedContract rocks!";

        let result: DOMValidator = Contract.In(divElem).HasInnerHTML("TypedContract rocks!");

        expect(result);
    });

    it("Throws error, when checking if the innerHTML of an element does not have the same contents as the argument passed",() => {

        let divElem: HTMLElement = document.createElement("div");
        divElem.innerHTML = "TypeScript rocks!";

        expect( () => {
            Contract.In(divElem).HasInnerHTML("TypedContract rocks!");
        }).toThrowError(<any>ReferenceError);
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
        }).toThrowError(<any>ReferenceError);
    });

    it("Returns true when given a Regular Expression that does not match the pattern for the HTML element innerHTML string contents", () => {
        let divElem: HTMLElement = document.createElement("h1");
        divElem.innerHTML = "This is a sentence for TypedContract";

        expect( () => {
            Contract.In(divElem).NotToMatchInnerHTML(/TypeScript/);
        }).not.toThrowError(<any>ReferenceError);
    });
});