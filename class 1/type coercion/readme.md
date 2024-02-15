### Type coercion refers to the automatic conversion of values from one data type to another, typically performed during operations or comparisons involving different data types. By using Type Coercion, JavaScript attempts to make the data types compatible to complete the operation or comparison.
 # Evaluating "33" + 44 and "33" - 44 in JavaScript

This repository explores how JavaScript evaluates the expressions `"33" + 44` and `"33" - 44`, leading to surprising results due to implicit type conversions.

## Code:

```javascript
let a = "33";
let b = 44;

console.log(a + b); // Output: "3344"
console.log(typeof (a + b)); // Output: "string"
console.log(a - b); // Output: -11
console.log(typeof (a - b)); // Output: "number"
```

## Understanding the Outputs:

- **"33" + 44:**
  - JavaScript treats "33" as a string, not a number.
  - The + operator concatenates strings, resulting in "3344".

- **typeof (a + b):**
  - `typeof` reveals the data type of "3344", which is "string".

- **"33" - 44:**
  - JavaScript implicitly converts "33" to a number (33) before subtraction.
  - The expression evaluates as 33 - 44, resulting in -11.

- **typeof (a - b):**
  - -11 is a number, so `typeof` outputs "number".


## Key Takeaways:

* **Data Type Awareness**: Be mindful of data types in JavaScript, especially when mixing strings and numbers.
* **Implicit Conversions**: Understand how JavaScript implicitly converts data types, which can lead to unexpected results.
* **Explicit Type Conversion**: Use methods like `parseInt()` to ensure desired operations.
