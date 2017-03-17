# Breaking Changes #
There are a number of breaking changes from 1.x to 2.x

- The biggest change is in many cases, we've changed how you access TypedContract from "typed-contract" to "typedcontract".  There were just too many issues trying to make it work as a UMD, global variable, etc.
	- If you installed this via NPM, your steps are to:	

    npm uninstall typed-contract

	npm install typedcontract --save

	- *Warning*: There will be breaking changes with the function names. See next line...  

- Function names are camelCase instead of PascalCase to be more consistent with JavaScript standards.  The only exceptions are the contract methods *In* and *Out*. The reason was partially for backwards compatibility, but also because we really liked how concise they were.  But we couldn't use *in*, because it's a reserved word.

# Enhancements #

- All validators take in an optional message.  You can also use *$var* to reference the variable name. e.g.
	- contract.In("foo").isNull("foo should not have been null") will return "foo should not have been null" if the validation fails.
	- contract.In("foo", "fubar").isNull("$var should not have been null") will return "fubar should not have been null" if the validation fails.
- When comparing length with the array validator, it supports either a number or comparing against another array.  e.g.
	- contract.In(["a"]).isLengthGreaterThan(["a","b"]) and contract.In.isLengthGreaterThan(["a"]).isLengthGreaterThan(2) are equivalent.
- Added isWhitespace and isNotWhitespace to the string validator
- Uses TypeScript 2.x



