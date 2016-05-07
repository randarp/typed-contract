# typed-contract

As the size and complexity of your JavaScript and TypeScript projects continues to grow, edge cases and regressions will occur. Help find them quickly before your users do!

<h3>TypeScript, what is it and why would I ever want to use it ?</h3>
 (Clears *throat*)

 <em>The simple definition of what TypeScript is, is this.... </em><br/>
 "TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. This allows much more insightful and transparent JavaScript and TypeScript application development. Allowing Integrated Development Environments to provide a richer environment for spotting common errors as you type and build your application." - <em> Andre Fischbacher</em>

<h3> What is a Code Contract anyways, and why would I want to use one ? </h3>

Code contracts allow you to ensure that your intentions for any property or method are ensured using a code contract. When you are developing an application you can list and specify as many preconditions and postconditions in your code as needed. In TypedContract preconditions are strict requirements that must be met when entering executing an application at runtime. Postconditions describe expectations at the time the method or property code exits at runtime.

TypedContract allows you to set pre and postconditions in your code to check for certain invariants that you set while writing out a TypedContract. Once you execute a project, a set of classes or functions, the TypedContract can then check that every condition successfully passes, which allows your intentions when building your app to run as smooth as butter.

TypedContract will allow you and your projects to have more descriptive syntax for your variables, functions, interfaces and classes
<h3> How to implement into your project </h3>
TypedContract can be used in either JavaScript or TypeScript environments so the freedom of choice is always yours.
Just open your BASH, Command Line or Terminal and type in
<code> npm install -g typed-contract --save-dev</code> to get it into your current project or....
 you can use any variation of commands to get it into your project as long as you include <code>npm install -g typed-contract</code>

<h3> How do I use a code contract in TypeScript ?</h3>
It's pretty simple really, once it is in your project and it's included in you node modules folder. You then should be able to use it in almost any function or class as you code your way through your project.

Here is an example of what a TypedContract looks like...
<code>
myVar: number = 3.14159265359;
Contract.In(myVar, "PI").
IsNotNull().
IsDefined().
IsGreaterThan(3.13).
IsNotLessThan(3);
</code>

and the same goes for postconditions as well

<code>myVar: number = 3.14159265359;
...... // code being written
Contract.Out(myVar, "PI").
IsNotNull().
IsDefined().
IsGreaterThan(3.13).
IsNotLessThan(3);
</code>

As you can see we can use something known as <a href="https://en.wikipedia.org/wiki/Method_chaining" target="_blank">Function/Method chaining</a> to allow any TypedContract to check for many conditions in one instance of a contract. Each contract that is created will have specific functions based on the data type passed in as a pre or post condition in, making good use of TypeScripts static typing. Here is an example.

<code>varArray: any[] = [1, 2, 3];
varNumber: number = 100;
varString: string = "Hello World";
varBoolean: boolean = true;<br/>
Contract.In(varNumber).
IsLessThan(101).
IsNotNull().
IsGreaterThan(99);<br/>
Contract.In(varArray).
IsDefined().
IsEqualTo([1, 2, 3], 1);<br/>
Contract.In(varString).
Contains("Hello").
NotContains("Goodbye");
etc...
</code>
If you would like to see all of the documentation click <a href="#docs">me</a>
<h3> Would you like to contribute to this project ? </h3>
Check out the GitHub repository to see where we can make TypedContract even better <a href="https://github.com/randarp/typed-contract/">Here</a>
<h3> Class and Function Documentation </h3>

Of course you would like to know what is included in this wonderful code contract library so you can utilize it to the best of it's ability.

Here are the list of the classes that are included in this npm module, and were always thinking of adding more to make the experience even better!
<h4>Classes </h4>
<ul>
<li>BaseValidator</li>
<li>NumberValidator</li>
<li>ArrayValidator</li>
<li>NumberValidator</li>
<li>StringValidator</li>
</ul>

<h4 id="docs"> Functions </h4>
<h5><strong>This section of documentation outlines the purpose and functionality of each function built into the library <em>regardless</em> of data type or class. But if there is a function (which there is) that has the same name but different implementation based on the data type, both examples and documentation will be listed accordingly. </strong></h5>

* IsTrue - Checks if the variable passed into the contract is true and will throw an error if it is false.
` myVar: boolean = false;
  Contract.In(myVar).IsTrue();
  // throws a ReferenceError
`

* IsFalse - Checks if the variable passed into the contract is false and will throw an error if it's true.
` myVar: boolean = false;
  Contract.In(myVar).IsFalse();
  // returns true, no error thrown
`

* IsNotNull - Checks if any variable as a pre or post condition passed into the TypedContract is null and if the variable is null a ReferenceError is thrown.
`myVar: string = null;
Contract.In(myVar,"my var").IsNotNull();
// throws a ReferenceError`

* IsNull - Checks if any variable in the pre or post condition passed into the TypedContract is null. The TypedContract will throw an error if the variable is not null
`myVar: number =  1;
Contract.In(myVar,"my var").IsNull();
// throws a ReferenceError	`

* IsDefined - Checks if any variable passed into the TypedContract as a pre or post condition is defined with a value. The TypedContract will throw an error if the variable is not defined.
`myVar: any[];
Contract.In(myVar).IsDefined();
// throws a ReferenceError`

* IsNotDefined - Checks if any variable passed into the TypedContract as a pre or post condition is not defined with a value. The TypedContract will throw an error if the variable is defined.
 `myVar: any[] = [1, 2, 3];
Contract.In(myVar).IsNotDefined();
// throws a ReferenceError`

* IsNullOrUndefined - Checks if any variable passed into the TypedContract as a pre or post condition is not null or undefined. The TypedContract will throw an error if the variable is null or undefined.
 `myVar: any = null;  // or myVar: any;
Contract.In(myVar).IsNullOrUndefined();
// throws a ReferenceError`

* IsEqualTo - Checks if the variable passed into the TypedContract as a pre or post condition equals the same value as the argument passed into the "IsEqualTo" function. The TypedContract will throw an error if the variable is not equal to the argument passed into this function.

<strong><em>The IsEqualTo function's implementation varies based on the data type </em></strong>

`// For data types of String, Number, Boolean
myVar: string = "TypedContract";
Contract.In(myVar).IsEqualTo("TypedContract");
// will return true, no error will be thrown`

`<strong>For the array data type, an array index must be specified when comparing array's with the "IsEqualTo" function</strong>

`// For the data type of array (Number, String, Boolean etc.)
myVar: any[] = [1, 2, 3];
compareTo: number[] = [5, 2, 9];
Contract.In(myVar).IsEqualTo(compareTo, 0); // take note of the second argument that is required, an array index.
// throws a RangeError`

* IsNotEqualTo - Checks if the variables passed into the values compared is not equal to the argument passed into the function. The TypedContract will thrown an error if both of the values passed into the TypedContract are equal.
`myVar: number = 4;
compareTo: number = 4;
 Contract.In(myVar).IsNotEqualTo(compareTo);
// throws a RangeError`

<strong>For the array data type, an array index must be specified when comparing array's with the "IsNotEqualTo" function</strong>

 myVar: any[] = [1, 2, 3];
compareTo: number[] = [5, 2, 9];
Contract.In(myVar).IsNotEqualTo(compareTo, 0); // take note of the second argument that is required, an array index.
// returns true, no error thrown`

* IsLessThan - Checks if the variables passed into the TypedContract as a pre or post condition is less than the contract pre or post condition passed into the TypedContract. The TypedContract will throw an error if the contract is equal or greater than the argument passed into the function.
`myVar: number = 3;
compareTo: number = 5;
 Contract.In(myVar).IsLessThan(compareTo);
// returns true`

* IsNotLessThan - Checks if the variables passed into the TypedContract as a pre or post condition is not less than the contract pre or post condition passed into the TypedContract. The TypedContract will throw an error if the contract is equal or less than the argument passed into the function.
`myVar: number = 3;
compareTo: number = 5;
 Contract.In(myVar).IsNotLessThan(compareTo);
// throws a RangeError`

* IsLessOrEqualTo - Checks if the variables passed into the TypedContract as a pre or post condition is less or equal to the pre or post condition passed into the contract. The TypedContract will throw an error if the argument passed into the function is greater than the contract pre or post condition.
`myVar: number = 3;
compareTo: number = 5;
 Contract.In(myVar).IsLessOrEqualThan(compareTo);
// returns true, no error thrown`

* IsNotLessOrEqualTo - Checks if the variables passed into the TypedContract as a pre or post condition is not less or equal to the pre or post condition passed into the contract. The TypedContract will throw an error if the argument passed into the function is less or equal than the contract pre or post condition.
`myVar: number = 3;
compareTo: number = 5;
 Contract.In(myVar).IsNotLessOrEqualThan(compareTo);
// throws a RangeError`

* IsGreaterThan - Checks if the variables passed into the TypedContract as a pre or post condition is greater than the variables passed into the contract. The TypedContract will throw an error if the values passed into the function is less or equal than the contract pre or post condition.
`myVar: number = 6;
compareTo: number = 5;
 Contract.In(myVar).IsGreaterThan(compareTo);
// returns true, no error thrown`

* IsNotGreaterThan -  Checks if the variable passed into the TypedContract as a pre or post condition is not greater than the variables passed into the contract. The TypedContract will throw an error if the values passed into the function is greater than the contract pre or post condition.
`myVar: number = 6;
compareTo: number = 7;
 Contract.In(myVar).IsGreaterThan(compareTo);
// throws a RangeError`

* IsGreaterOrEqualThan - Checks if the variable passed into the TypedContract as a pre or post condition is greater or equal than the variables passed into the contract. The TypedContract will throw an error if the values passed into the function are less than the contract pre or post condition.
`myVar: number = 6;
compareTo: number = 5;
 Contract.In(myVar).IsGreaterOrEqualThan(compareTo);
// returns true`

* IsNotGreaterOrEqualThan - Checks if the variable passed into the TypedContract as a pre or post condition is not greater or equal than the variables passed into the contract. The TypedContract will throw an error if the values passed into the function are greater or equal than the contract pre or post condition.
`myVar: number = 6;
compareTo: number = 5;
 Contract.In(myVar).IsNotGreaterOrEqualThan(compareTo);
// throws a RangeError`

* IsLengthGreaterThan - Checks if the variable value that is passed into the TypedContract as a pre or post condition is length is greater than the argument passed into the function. The TypedContract will throw an error if the contract length is not greater than the pre or post condition contract.
`myVar: string = "TypedContract";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthGreaterThan(compareTo);
// returns true, no error thrown`

* IsLengthNotGreaterThan - Checks if the variable value that is passed into the TypedContract as a pre or post condition is length is not greater than the argument passed into the function. The TypedContract will throw an error if the contract length is greater than the pre or post condition contract.
`myVar: string = "TypedContract";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthNotGreaterThan(compareTo);
// throws a RangeError`

* IsLengthGreaterOrEqualThan - Checks if the variable value passed into the TypedContract as a pre or postconditions length is greater or equal than the argument passed into the function. The TypedContract will throw an error if the pre or postconditions length is less than the argument value.
`myVar: string = "TypedContract";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthGreaterOrEqualThan(compareTo);
// returns true, no error thrown`

* IsLengthNotGreaterOrEqualThan - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not greater or equal than  the argument passed into the function. The TypedContract will throw an error if the pre or postconditions length is equal or greater than the argument value.
`myVar: string = "TypedContract";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthGreaterOrEqualThan(compareTo);
// throws a RangeError`

* IsLengthLessThan - Checks if the variable value passed into the TypedContract as a pre or postconditions length is less than the argument passed into the function. The TypedContract will thrown an error if the length of the pre or post condition is equal or greater than the argument passed into the function.
`myVar: string = "TypedContract";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthLessThan(compareTo);
// throws a RangeError`

* IsLengthNotLessThan - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not less than the argument passed into the function. The TypedContract will thrown an error if the length of the pre or post condition is less or equal than the argument passed into the function.
`myVar: string = "TypedContract";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthNotLessThan(compareTo);
// returns true, no error thrown`

* IsLengthLessOrEqualTo - Checks if the variable value passed into the TypedContract as a pre or postconditions length is less or equal to the argument passed into the function. The TypedContract will throw an error if the length of the pre or post condition is greater than the argument passed into the function.
`myVar: string = "TypedScript";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthLessOrEqual(compareTo);
// returns true, no error thrown`

* IsLengthNotLessOrEqualTo - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not less or equal to the argument passed into the function. The TypedContract will throw an error if the length of the pre or post condition is less or equal than the argument passed into the function.
`myVar: string = "TypedScript";
compareTo: string = "TypeScript";
 Contract.In(myVar).IsLengthNotLessOrEqual(compareTo);
// throws a RangeError`

* ToMatch - Checks if the variable passed into the TypedContract as a pre or post condition matches the value passed into the function using a <strong><em>regular expression</em></strong> as an argument. The TypedContract will throw an error if the <strong> <em>regular expression</em> </strong> does not match the contract pre or post condition.
`myVar: any = "This is a TypeScript library";
compareTo: string = /TypeScript/g;
 Contract.In(myVar).ToMatch(compareTo);
// returns true, no error thrown`

* ToNotMatch - Checks if the variable passed into the TypedContract as a pre or post condition does not match the value passed into the function using a <strong><em>regular expression</em></strong> as an argument. The TypedContract will throw an error if the <strong> <em>regular expression</em> </strong> does match the contract pre or post condition.
`myVar: any = "This is a TypeScript library";
compareTo: string = /TypeScript/g;
 Contract.In(myVar).ToNotMatch(compareTo);
// throws a RangeError`

* Contains - Checks if the variable passed into the TypedContract as a pre or post condition contains any value passed into the function as an argument. The TypedContract will throw an error if the pre or post condition does not contain any values in the argument passed into the function.
`myVar: any = "I am typing this documentation";
compareTo: string = "typing";
 Contract.In(myVar).Contains(compareTo);
// returns true, no error thrown`<br/>
<strong>Or if you are checking for an array ...</strong><br/>
 ` myVar: any[] = [1, 2, 3];
 compareTo: any[] = [3, 5, 7];
 Contract.In(myVar).Contains(compareTo);
 // returns true, no error thrown`

* NotContains - Checks if the variable passed into the TypedContract as a pre or post condition does not contain the value passed into the function as an argument. The TypedContract will throw an error if the pre or post condition does contain any values in the argument passed into the function.
`myVar: any = "I am typing this documentation";
compareTo: string = "typing";
 Contract.In(myVar).NotContains(compareTo);
// throws a RangeError`

* IsBetween - Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is not in the range as specified.
`startRange: number = 1;
 endRange: number = 10;
 myVar: number = 5;
 Contract.In(myVar).InBetween(startRange, endRange);
// returns true, no error thrown`

* IsNotBetween - Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the contract is in the range as specified.
`startRange: number = 1;
 endRange: number = 10;
 myVar: number = 5;
 Contract.In(myVar).InBetween(startRange, endRange);
// throws a RangeError`

* StartsWith - Checks if the variable passed into the TypedContract as a pre or post condition starts with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does not start with the value passed into the function as an argument.
`myVar: string = "This is a TypeScript Library";
 compareTo: string= "TypeScript";
 Contract.In(myVar).StartsWith(compareTo);
// returns true, no error thrown`

* NotStartsWith - Checks if the variable passed into the TypedContract as a pre or post condition does not start with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does start with the value passed into the function as an argument.
`myVar: string = "This is a TypeScript Library";
 compareTo: string= "TypeScript";
 Contract.In(myVar).NotStartsWith(compareTo);
// throws a RangeError`

* EndsWith - Checks if the variable passed into the TypedContract as a pre or post condition ends with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does not end with the value passed into the function as an argument.
`myVar: string = "This is a TypeScript Library";
 compareTo: string= "Library";
 Contract.In(myVar).EndsWith(compareTo);
// returns true, no error thrown`

* NotEndsWith - Checks if the variable passed into the TypedContract as a pre or post condition does not end with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does end with the value passed into the function as an argument.
`myVar: string = "This is a TypeScript Library";
 compareTo: string= "Library";
 Contract.In(myVar).EndsWith(compareTo);
// throws a RangeError`
