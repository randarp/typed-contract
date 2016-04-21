/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />
/// <reference path="..\..\TypedContract\TypeValidators\HTMLValidator.ts" />

/**
 * Created by Andre on 2016-04-19.
 */
describe("HTMLValidator", () => {

    it("Returns true if there is a matching HTML attribute based on the parameters given", () => {
        let divElem: HTMLElement = document.createElement("DIV");
        divElem.setAttribute("id", "test");
        let result: HTMLValidator = Contract.In(divElem).HasAttribute("id");

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

        let result: HTMLValidator = Contract.In(h1Elem).HasAttribute("style");

        expect(result);
    });

    it("Returns true when checking if there is not an HTML attribute", () => {
        let htmlElem: HTMLElement = document.createElement("div");
        htmlElem.setAttribute("class", "typed-contract");

        let result: HTMLValidator = Contract.In(htmlElem).NotHasAttribute("id");

        expect(result);
    });

    it("Throws an error when checking if there is no attribute, but attribute ", () => {

        let htmlElem: HTMLElement = document.createElement("div");
        htmlElem.setAttribute("id", "typed-contract");

        expect(() => {
            Contract.In(htmlElem).NotHasAttribute("id");
        }).toThrowError(<any>ReferenceError);
    });
});