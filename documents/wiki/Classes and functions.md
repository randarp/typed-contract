This section of documentation outlines the purpose and functionality of each function built into the library <em>regardless</em> of data type or class. But if there is a function (which there is) that has the same name but different implementation based on the data type, both examples and documentation will be listed accordingly.

**isTrue** - Checks if the variable passed into the	Contract is true and will throw an error if it is false.

	myVar: boolean = false;
	Contract.In(myVar).isTrue();
  	// throws a ReferenceError

**isFalse** - Checks if the variable passed into the	Contract is false and will throw an error if it's true.

	myVar: boolean = false;
	Contract.In(myVar).isFalse();
 	// returns true, no error thrown

**isNotNull** - Checks if any variable as a pre or post condition passed into the TypedContract is null and if the variable is null a ReferenceError is thrown.

	myVar: string = null;
	Contract.In(myVar,"my var").isNotNull();
	// throws a ReferenceError`

**isNull** - Checks if any variable in the pre or post condition passed into the TypedContract is null. The TypedContract will throw an error if the variable is not null

	myVar: number =  1;
	Contract.In(myVar,"my var").isNull();
	// throws a ReferenceError	`

**isDefined** - Checks if any variable passed into the TypedContract as a pre or post condition is defined with a value. The TypedContract will throw an error if the variable is not defined.

	myVar: any[];
	Contract.In(myVar).isDefined();
	// throws a ReferenceError`

**isNotDefined** - Checks if any variable passed into the TypedContract as a pre or post condition is not defined with a value. The TypedContract will throw an error if the variable is defined.

	myVar: any[] = [1, 2, 3];
	Contract.In(myVar).isNotDefined();
	// throws a ReferenceError`

**isNullOrUndefined** - Checks if any variable passed into the TypedContract as a pre or post condition is not null or undefined. The TypedContract will throw an error if the variable is null or undefined.

	myVar: any = null;  // or	myVar: any;
	Contract.In(myVar).isNullOrUndefined();
	// throws a ReferenceError`

**isEqualTo** - Checks if the variable passed into the TypedContract as a pre or post condition equals the same value as the argument passed into the "isEqualTo" function. The TypedContract will throw an error if the variable is not equal to the argument passed into this function.

<strong><em>The iEqualTo function's implementation varies based on the data type </em></strong>

	// For data types of String, Number, Boolean
	myVar: string = "TypedContract";
	Contract.In(myVar).isEqualTo("TypedContract");
	// will return true, no error will be thrown`

<strong>For the array data type, an array index must be specified when comparing array's with the "isEqualTo" function</strong>

	// For the data type of array (Number, String, Boolean etc.)
	myVar: any[] = [1, 2, 3];
	compareTo: number[] = [5, 2, 9];
	// take note of the second argument that is required, an array index.
	Contract.In(myVar).isEqualTo(compareTo, 0); 
	// throws a RangeError`

**isNotEqualTo** - Checks if the variables passed into the values compared is not equal to the argument passed into the function. The TypedContract will thrown an error if both of the values passed into the TypedContract are equal.

	myVar: number = 4;
	compareTo: number = 4;
	Contract.In(myVar).isNotEqualTo(compareTo);
	// throws a RangeError`

<strong>For the array data type, an array index must be specified when comparing array's with the "isNotEqualTo" function</strong>

	myVar: any[] = [1, 2, 3];
	compareTo: number[] = [5, 2, 9];
	Contract.In(myVar).isNotEqualTo(compareTo, 0); // take note of the second argument that is required, an array index.
	// returns true, no error thrown`

**isLessThan** - Checks if the variables passed into the TypedContract as a pre or post condition is less than the	Contract pre or post condition passed into the TypedContract. The TypedContract will throw an error if the Contract is equal or greater than the argument passed into the function.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).isLessThan(compareTo);
	// returns true`

**isNotLessThan** - Checks if the variables passed into the TypedContract as a pre or post condition is not less than the	Contract pre or post condition passed into the TypedContract. The TypedContract will throw an error if the Contract is equal or less than the argument passed into the function.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).isNotLessThan(compareTo);
	// throws a RangeError`

**isLessOrEqualTo** - Checks if the variables passed into the TypedContract as a pre or post condition is less or equal to the pre or post condition passed into the	Contract. The TypedContract will throw an error if the argument passed into the function is greater than the	Contract pre or post condition.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).isLessOrEqualThan(compareTo);
	// returns true, no error thrown`

**isNotLessOrEqualTo** - Checks if the variables passed into the TypedContract as a pre or post condition is not less or equal to the pre or post condition passed into the	Contract. The TypedContract will throw an error if the argument passed into the function is less or equal than the Contract pre or post condition.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).isNotLessOrEqualThan(compareTo);
	// throws a RangeError`

**isGreaterThan** - Checks if the variables passed into the TypedContract as a pre or post condition is greater than the variables passed into the Contract. The TypedContract will throw an error if the values passed into the function is less or equal than the	Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 5;
	Contract.In(myVar).isGreaterThan(compareTo);
	// returns true, no error thrown`

**isNotGreaterThan** -  Checks if the variable passed into the TypedContract as a pre or post condition is not greater than the variables passed into the Contract. The TypedContract will throw an error if the values passed into the function is greater than the	Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 7;
	Contract.In(myVar).isGreaterThan(compareTo);
	// throws a RangeError`

**isGreaterOrEqualThan** - Checks if the variable passed into the TypedContract as a pre or post condition is greater or equal than the variables passed into the	Contract. The TypedContract will throw an error if the values passed into the function are less than the	Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 5;
	Contract.In(myVar).isGreaterOrEqualThan(compareTo);
	// returns true`

**isNotGreaterOrEqualThan** - Checks if the variable passed into the TypedContract as a pre or post condition is not greater or equal than the variables passed into the	Contract. The TypedContract will throw an error if the values passed into the function are greater or equal than the Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 5;
	Contract.In(myVar).isNotGreaterOrEqualThan(compareTo);
	// throws a RangeError`

**isLengthGreaterThan** - Checks if the variable value that is passed into the TypedContract as a pre or post condition is length is greater than the argument passed into the function. The TypedContract will throw an error if the	Contract length is not greater than the pre or post condition Contract.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthGreaterThan(compareTo);
	// returns true, no error thrown`

**isLengthNotGreaterThan** - Checks if the variable value that is passed into the TypedContract as a pre or post condition is length is not greater than the argument passed into the function. The TypedContract will throw an error if the	Contract length is greater than the pre or post conditio 	Contract.

	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthNotGreaterThan(compareTo);
	// throws a RangeError`

**isLengthGreaterOrEqualThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is greater or equal than the argument passed into the function. The TypedContract will throw an error if the pre or postconditions length is less than the argument value.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthGreaterOrEqualThan(compareTo);
	// returns true, no error thrown`

**isLengthNotGreaterOrEqualThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not greater or equal than  the argument passed into the function. The TypedContract will throw an error if the pre or postconditions length is equal or greater than the argument value.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthGreaterOrEqualThan(compareTo);
	// throws a RangeError`

**isLengthLessThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is less than the argument passed into the function. The TypedContract will thrown an error if the length of the pre or post condition is equal or greater than the argument passed into the function.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthLessThan(compareTo);
	// throws a RangeError`

**isLengthNotLessThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not less than the argument passed into the function. The TypedContract will thrown an error if the length of the pre or post condition is less or equal than the argument passed into the function.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthNotLessThan(compareTo);
	// returns true, no error thrown`

**isLengthLessOrEqualTo** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is less or equal to the argument passed into the function. The TypedContract will throw an error if the length of the pre or post condition is greater than the argument passed into the function.
	
	myVar: string = "TypedScript";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthLessOrEqual(compareTo);
	// returns true, no error thrown`

**isLengthNotLessOrEqualTo** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not less or equal to the argument passed into the function. The TypedContract will throw an error if the length of the pre or post condition is less or equal than the argument passed into the function.
	
	myVar: string = "TypedScript";
	compareTo: string = "TypeScript";
	Contract.In(myVar).isLengthNotLessOrEqual(compareTo);
	// throws a RangeError`

**toMatch** - Checks if the variable passed into the TypedContract as a pre or post condition matches the value passed into the function using a <strong><em>regular expression</em></strong> as an argument. The TypedContract will throw an error if the <strong> <em>regular expression</em> </strong> does not match the	Contract pre or post condition.
	
	myVar: any = "This is a TypeScript library";
	compareTo: string = /TypeScript/g;
	Contract.In(myVar).toMatch(compareTo);
	// returns true, no error thrown`

**toNotMatch** - Checks if the variable passed into the TypedContract as a pre or post condition does not match the value passed into the function using a <strong><em>regular expression</em></strong> as an argument. The TypedContract will throw an error if the <strong> <em>regular expression</em> </strong> does match the	Contract pre or post condition.
	
	myVar: any = "This is a TypeScript library";
	compareTo: string = /TypeScript/g;
	Contract.In(myVar).toNotMatch(compareTo);
	// throws a RangeError`

**contains** - Checks if the variable passed into the TypedContract as a pre or post condition contains any value passed into the function as an argument. The TypedContract will throw an error if the pre or post condition does not contain any values in the argument passed into the function.
	
	myVar: any = "I am typing this documentation";
	compareTo: string = "typing";
	Contract.In(myVar).contains(compareTo);
	// returns true, no error thrown`<br/>
<strong>Or if you are checking for an array ...</strong><br/>
 	
	myVar: any[] = [1, 2, 3];
	compareTo: any[] = [3, 5, 7];
	Contract.In(myVar).Contains(compareTo);
	// returns true, no error thrown`

**notContains** - Checks if the variable passed into the TypedContract as a pre or post condition does not contain the value passed into the function as an argument. The TypedContract will throw an error if the pre or post condition does contain any values in the argument passed into the function.

	myVar: any = "I am typing this documentation";
	compareTo: string = "typing";
	Contract.In(myVar).notContains(compareTo);
	// throws a RangeError`

**isBetween** - Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the	Contract is not in the range as specified.

	startRange: number = 1;
	endRange: number = 10;
	myVar: number = 5;
	Contract.In(myVar).inBetween(startRange,	endRange);
	// returns true, no error thrown`

**isNotBetween** - Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the Contract is in the range as specified.

	startRange: number = 1;
	endRange: number = 10;
	myVar: number = 5;
	Contract.In(myVar).inBetween(startRange, endRange);
	// throws a RangeError`

**startsWith** - Checks if the variable passed into the TypedContract as a pre or post condition starts with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does not start with the value passed into the function as an argument.

	myVar: string = "This is a TypeScript Library";
	compareTo: string= "TypeScript";
	Contract.In(myVar).startsWith(compareTo);
	// returns true, no error thrown`

**notStartsWith** - Checks if the variable passed into the TypedContract as a pre or post condition does not start with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does start with the value passed into the function as an argument.

	myVar: string = "This is a TypeScript Library";
	compareTo: string= "TypeScript";
	Contract.In(myVar).notStartsWith(compareTo);
	// throws a RangeError`

**endsWith** - Checks if the variable passed into the TypedContract as a pre or post condition ends with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does not end with the value passed into the function as an argument.

	myVar: string = "This is a TypeScript Library";
	compareTo: string= "Library";
	Contract.In(myVar).endsWith(compareTo);
	// returns true, no error thrown`


	myVar: string = "This is a TypeScript Library";
	compareTo: string= "Library";
	Contract.In(myVar).endsWith(compareTo);
	// throws a RangeError`