This section of documentation outlines the purpose and functionality of each function built into the library <em>regardless</em> of data type or class. But if there is a function (which there is) that has the same name but different implementation based on the data type, both examples and documentation will be listed accordingly.

**IsTrue** - Checks if the variable passed into the	Contract is true and will throw an error if it is false.

	myVar: boolean = false;
	Contract.In(myVar).IsTrue();
  	// throws a ReferenceError

**IsFalse** - Checks if the variable passed into the	Contract is false and will throw an error if it's true.

	myVar: boolean = false;
	Contract.In(myVar).IsFalse();
 	// returns true, no error thrown

**IsNotNull** - Checks if any variable as a pre or post condition passed into the TypedContract is null and if the variable is null a ReferenceError is thrown.

	myVar: string = null;
	Contract.In(myVar,"my var").IsNotNull();
	// throws a ReferenceError`

**IsNull** - Checks if any variable in the pre or post condition passed into the TypedContract is null. The TypedContract will throw an error if the variable is not null

	myVar: number =  1;
	Contract.In(myVar,"my var").IsNull();
	// throws a ReferenceError	`

**IsDefined** - Checks if any variable passed into the TypedContract as a pre or post condition is defined with a value. The TypedContract will throw an error if the variable is not defined.

	myVar: any[];
	Contract.In(myVar).IsDefined();
	// throws a ReferenceError`

**IsNotDefined** - Checks if any variable passed into the TypedContract as a pre or post condition is not defined with a value. The TypedContract will throw an error if the variable is defined.

	myVar: any[] = [1, 2, 3];
	Contract.In(myVar).IsNotDefined();
	// throws a ReferenceError`

**IsNullOrUndefined** - Checks if any variable passed into the TypedContract as a pre or post condition is not null or undefined. The TypedContract will throw an error if the variable is null or undefined.

	myVar: any = null;  // or	myVar: any;
	Contract.In(myVar).IsNullOrUndefined();
	// throws a ReferenceError`

**IsEqualTo** - Checks if the variable passed into the TypedContract as a pre or post condition equals the same value as the argument passed into the "IsEqualTo" function. The TypedContract will throw an error if the variable is not equal to the argument passed into this function.

<strong><em>The IsEqualTo function's implementation varies based on the data type </em></strong>

	// For data types of String, Number, Boolean
	myVar: string = "TypedContract";
	Contract.In(myVar).IsEqualTo("TypedContract");
	// will return true, no error will be thrown`

<strong>For the array data type, an array index must be specified when comparing array's with the "IsEqualTo" function</strong>

	// For the data type of array (Number, String, Boolean etc.)
	myVar: any[] = [1, 2, 3];
	compareTo: number[] = [5, 2, 9];
	// take note of the second argument that is required, an array index.
	Contract.In(myVar).IsEqualTo(compareTo, 0); 
	// throws a RangeError`

**IsNotEqualTo** - Checks if the variables passed into the values compared is not equal to the argument passed into the function. The TypedContract will thrown an error if both of the values passed into the TypedContract are equal.

	myVar: number = 4;
	compareTo: number = 4;
	Contract.In(myVar).IsNotEqualTo(compareTo);
	// throws a RangeError`

<strong>For the array data type, an array index must be specified when comparing array's with the "IsNotEqualTo" function</strong>

	myVar: any[] = [1, 2, 3];
	compareTo: number[] = [5, 2, 9];
	Contract.In(myVar).IsNotEqualTo(compareTo, 0); // take note of the second argument that is required, an array index.
	// returns true, no error thrown`

**IsLessThan** - Checks if the variables passed into the TypedContract as a pre or post condition is less than the	Contract pre or post condition passed into the TypedContract. The TypedContract will throw an error if the Contract is equal or greater than the argument passed into the function.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).IsLessThan(compareTo);
	// returns true`

**IsNotLessThan** - Checks if the variables passed into the TypedContract as a pre or post condition is not less than the	Contract pre or post condition passed into the TypedContract. The TypedContract will throw an error if the Contract is equal or less than the argument passed into the function.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).IsNotLessThan(compareTo);
	// throws a RangeError`

**IsLessOrEqualTo** - Checks if the variables passed into the TypedContract as a pre or post condition is less or equal to the pre or post condition passed into the	Contract. The TypedContract will throw an error if the argument passed into the function is greater than the	Contract pre or post condition.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).IsLessOrEqualThan(compareTo);
	// returns true, no error thrown`

**IsNotLessOrEqualTo** - Checks if the variables passed into the TypedContract as a pre or post condition is not less or equal to the pre or post condition passed into the	Contract. The TypedContract will throw an error if the argument passed into the function is less or equal than the Contract pre or post condition.

	myVar: number = 3;
	compareTo: number = 5;
	Contract.In(myVar).IsNotLessOrEqualThan(compareTo);
	// throws a RangeError`

**IsGreaterThan** - Checks if the variables passed into the TypedContract as a pre or post condition is greater than the variables passed into the Contract. The TypedContract will throw an error if the values passed into the function is less or equal than the	Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 5;
	Contract.In(myVar).IsGreaterThan(compareTo);
	// returns true, no error thrown`

**IsNotGreaterThan** -  Checks if the variable passed into the TypedContract as a pre or post condition is not greater than the variables passed into the Contract. The TypedContract will throw an error if the values passed into the function is greater than the	Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 7;
	Contract.In(myVar).IsGreaterThan(compareTo);
	// throws a RangeError`

**IsGreaterOrEqualThan** - Checks if the variable passed into the TypedContract as a pre or post condition is greater or equal than the variables passed into the	Contract. The TypedContract will throw an error if the values passed into the function are less than the	Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 5;
	Contract.In(myVar).IsGreaterOrEqualThan(compareTo);
	// returns true`

**IsNotGreaterOrEqualThan** - Checks if the variable passed into the TypedContract as a pre or post condition is not greater or equal than the variables passed into the	Contract. The TypedContract will throw an error if the values passed into the function are greater or equal than the Contract pre or post condition.

	myVar: number = 6;
	compareTo: number = 5;
	Contract.In(myVar).IsNotGreaterOrEqualThan(compareTo);
	// throws a RangeError`

**IsLengthGreaterThan** - Checks if the variable value that is passed into the TypedContract as a pre or post condition is length is greater than the argument passed into the function. The TypedContract will throw an error if the	Contract length is not greater than the pre or post condition Contract.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthGreaterThan(compareTo);
	// returns true, no error thrown`

**IsLengthNotGreaterThan** - Checks if the variable value that is passed into the TypedContract as a pre or post condition is length is not greater than the argument passed into the function. The TypedContract will throw an error if the	Contract length is greater than the pre or post conditio 	Contract.

	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthNotGreaterThan(compareTo);
	// throws a RangeError`

**IsLengthGreaterOrEqualThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is greater or equal than the argument passed into the function. The TypedContract will throw an error if the pre or postconditions length is less than the argument value.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthGreaterOrEqualThan(compareTo);
	// returns true, no error thrown`

**IsLengthNotGreaterOrEqualThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not greater or equal than  the argument passed into the function. The TypedContract will throw an error if the pre or postconditions length is equal or greater than the argument value.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthGreaterOrEqualThan(compareTo);
	// throws a RangeError`

**IsLengthLessThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is less than the argument passed into the function. The TypedContract will thrown an error if the length of the pre or post condition is equal or greater than the argument passed into the function.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthLessThan(compareTo);
	// throws a RangeError`

**IsLengthNotLessThan** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not less than the argument passed into the function. The TypedContract will thrown an error if the length of the pre or post condition is less or equal than the argument passed into the function.
	
	myVar: string = "TypedContract";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthNotLessThan(compareTo);
	// returns true, no error thrown`

**IsLengthLessOrEqualTo** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is less or equal to the argument passed into the function. The TypedContract will throw an error if the length of the pre or post condition is greater than the argument passed into the function.
	
	myVar: string = "TypedScript";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthLessOrEqual(compareTo);
	// returns true, no error thrown`

**IsLengthNotLessOrEqualTo** - Checks if the variable value passed into the TypedContract as a pre or postconditions length is not less or equal to the argument passed into the function. The TypedContract will throw an error if the length of the pre or post condition is less or equal than the argument passed into the function.
	
	myVar: string = "TypedScript";
	compareTo: string = "TypeScript";
	Contract.In(myVar).IsLengthNotLessOrEqual(compareTo);
	// throws a RangeError`

**ToMatch** - Checks if the variable passed into the TypedContract as a pre or post condition matches the value passed into the function using a <strong><em>regular expression</em></strong> as an argument. The TypedContract will throw an error if the <strong> <em>regular expression</em> </strong> does not match the	Contract pre or post condition.
	
	myVar: any = "This is a TypeScript library";
	compareTo: string = /TypeScript/g;
	Contract.In(myVar).ToMatch(compareTo);
	// returns true, no error thrown`

**ToNotMatch** - Checks if the variable passed into the TypedContract as a pre or post condition does not match the value passed into the function using a <strong><em>regular expression</em></strong> as an argument. The TypedContract will throw an error if the <strong> <em>regular expression</em> </strong> does match the	Contract pre or post condition.
	
	myVar: any = "This is a TypeScript library";
	compareTo: string = /TypeScript/g;
	Contract.In(myVar).ToNotMatch(compareTo);
	// throws a RangeError`

**Contains** - Checks if the variable passed into the TypedContract as a pre or post condition contains any value passed into the function as an argument. The TypedContract will throw an error if the pre or post condition does not contain any values in the argument passed into the function.
	
	myVar: any = "I am typing this documentation";
	compareTo: string = "typing";
	Contract.In(myVar).Contains(compareTo);
	// returns true, no error thrown`<br/>
<strong>Or if you are checking for an array ...</strong><br/>
 	
	myVar: any[] = [1, 2, 3];
	compareTo: any[] = [3, 5, 7];
	Contract.In(myVar).Contains(compareTo);
	// returns true, no error thrown`

**NotContains** - Checks if the variable passed into the TypedContract as a pre or post condition does not contain the value passed into the function as an argument. The TypedContract will throw an error if the pre or post condition does contain any values in the argument passed into the function.

	myVar: any = "I am typing this documentation";
	compareTo: string = "typing";
	Contract.In(myVar).NotContains(compareTo);
	// throws a RangeError`

**IsBetween** - Checks if the variable passed into the TypedContract as a pre or post condition is between certain a range of values. The TypedContract will throw an error if the pre or post condition in the	Contract is not in the range as specified.

	startRange: number = 1;
	endRange: number = 10;
	myVar: number = 5;
	Contract.In(myVar).InBetween(startRange,	endRange);
	// returns true, no error thrown`

**IsNotBetween** - Checks if the variable passed into the TypedContract as a pre or post condition is not in between certain a range of values. The TypedContract will throw an error if the pre or post condition in the Contract is in the range as specified.

	startRange: number = 1;
	endRange: number = 10;
	myVar: number = 5;
	Contract.In(myVar).InBetween(startRange, endRange);
	// throws a RangeError`

**StartsWith** - Checks if the variable passed into the TypedContract as a pre or post condition starts with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does not start with the value passed into the function as an argument.

	myVar: string = "This is a TypeScript Library";
	compareTo: string= "TypeScript";
	Contract.In(myVar).StartsWith(compareTo);
	// returns true, no error thrown`

**NotStartsWith** - Checks if the variable passed into the TypedContract as a pre or post condition does not start with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does start with the value passed into the function as an argument.

	myVar: string = "This is a TypeScript Library";
	compareTo: string= "TypeScript";
	Contract.In(myVar).NotStartsWith(compareTo);
	// throws a RangeError`

**EndsWith** - Checks if the variable passed into the TypedContract as a pre or post condition ends with a certain value, which is specified in the argument passed into the function. The TypedContract will throw an error if the pre or post condition does not end with the value passed into the function as an argument.

	myVar: string = "This is a TypeScript Library";
	compareTo: string= "Library";
	Contract.In(myVar).EndsWith(compareTo);
	// returns true, no error thrown`


	myVar: string = "This is a TypeScript Library";
	compareTo: string= "Library";
	Contract.In(myVar).EndsWith(compareTo);
	// throws a RangeError`