# typed-contract

<h3> Why use typed-contract ? </h3>

typed-contract is a library to help guard against invalid function inputs and outputs. Using a fluent syntax, it allows a short and descriptive way to protect the system and return useful error messages.

Our goals are:

<ul>
  <li>Provide a consistent way of defining pre and post conditions for functions</li>
  <li>Describe to other developers what the code expects in and what will be returned</li>
</ul>

As the size and complexity of your JavaScript and TypeScript projects continues to grow, edge cases and regressions will occur. Help find them quickly before your users do!

<h3>TypeScript, what is it and why would I ever want to use it ?</h3>
 (Clears *throat*)

 <em>The simple definition of what TypeScript is, is this.... </em><br/>
 "TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. This allows much more insightful and transparent JavaScript and TypeScript application development. Allowing Integrated Development Environments to provide a richer environment for spotting common errors as you type and build your application." - <em> Andre Fischbacher</em>

<h3> What is a Code Contract anyways, and why would I want to use one ? </h3>

Code contracts allow you to ensure that your intentions for any property or method are ensured using a code contract. When you are developing an application you can list and specify as many preconditions and postconditions in your code as needed. pre typed-contract preconditions are strict requirements that must be met when entering executing an application at runtime. Postconditions describe expectations at the time the method or property code exits at runtime.

Typed-contract allows you to set pre and postconditions in your code to check for certain invariants that you set while writing out a typed-contract. Once you execute a project, a set of classes or functions, the typed-contract can then check that every condition successfully passes, which allows your intentions when building your app to run as smooth as butter.

Typed-contract will allow you and your projects to have more descriptive syntax for your variables, functions, interfaces and classes
<h3> How to implement into your project </h3>

typed-contract can be used in either JavaScript or TypeScript environments so the freedom of choice is always yours.  See [https://github.com/randarp/typed-contract/wiki/Setup-typed-contract](https://github.com/randarp/typed-contract/wiki/Setup-typed-contract).

<h3> How do I use a code contract in TypeScript ?</h3>
It's pretty simple really, once it is in your project and it's included in you node modules folder. You then should be able to use it in almost any function or class as you code your way through your project.

Here is an example of what a typed-contract looks like...
	myVar: number = 3.14159265359;
	Contract.pre(myVar, "PI").
		isNotNull().
		isDefined().
		isGreaterThan(3.13).
		isNotLessThan(3);

and the same goes for postconditions as well

	myVar: number = 3.14159265359;

	Contract.ensures(myVar, "PI").
		isNotNull().
		isDefined().
		isGreaterThan(3.13).
		isNotLessThan(3);

As you can see we can use something known as <a href="https://en.wikipedia.org/wiki/Method_chaining" target="_blank">Function/Method chaining</a> to allow any typed-contract to check for many conditions in one instance of a contract. Each contract that is created will have specific functions based on the data type passed in as a pre or post condition in, making good use of TypeScripts static typing. Here is an example.

	varArray: any[] = [1, 2, 3];
	varNumber: number = 100;
	varString: string = "Hello World";
	varBoolean: boolean = true;<br/>

	Contract.pre(varNumber).
		isLessThan(101).
		isNotNull().
		isGreaterThan(99);<br/>

	Contract.pre(varArray).
		isDefined().
		isEqualTo([1, 2, 3], 1);<br/>

	Contract.pre(varString).
		contains("Hello").
		notContains("Goodbye");

If you would like to see all of the documentation click here [https://github.com/randarp/typed-contract/wiki](https://github.com/randarp/typed-contract/wiki)

<h3> Would you like to contribute to this project ? </h3>
Check out the GitHub repository to see where we can make typed-contract even better <a href="https://github.com/randarp/typed-contract/">Here</a>
<h3> Class and Function Documentation </h3>

Of course you would like to know what is included in this wonderful code contract library so you can utilize it to the best of it's ability.

Here are the list of the classes that are included in this npm module, and were always thinking of adding more to make the experience even better!
<h4>Classes </h4>


* [AnyValidator](https://github.com/randarp/typed-contract/wiki/Classes-and-functions)
* [ArrayValidator](https://github.com/randarp/typed-contract/wiki/Classes-and-functions)
* [BooleanValidator](https://github.com/randarp/typed-contract/wiki/Classes-and-functions)
* [NumberValidator](https://github.com/randarp/typed-contract/wiki/Classes-and-functions)
* [StringValidator](https://github.com/randarp/typed-contract/wiki/Classes-and-functions)