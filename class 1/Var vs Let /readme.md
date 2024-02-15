# Understanding Variable Scope in JavaScript

This repository explores the differences in variable scope between using `var` and `let` in JavaScript, along with their respective outputs and explanations.

## Code 1 (using var):

```javascript
var c = " ok";
{
  var c = "okk";
  console.log(c); // Prints "okk"
}
console.log(c); // Prints "okk" again
```
output: 
```
okk
okk
```
## Explanation (var):

- `var` has function scope, meaning it's accessible anywhere within the same function, regardless of nesting.
- Inside the block, another `var c = "okk";` declares a variable with the same name, shadowing the global `c` within the block.
- This means the inner `console.log` prints the value of the inner `c`, which is `"okk"`.
- After the block ends, the inner `c` goes out of scope. However, due to `var`'s function scope, the global `c`'s value is still `"okk"`, so the second `console.log` prints `"okk"` again.
## Code 2 (using let) :
```javascript
let c = " ok";
{
  let c = "okk";
  console.log(c); // Prints "okk"
}
console.log(c); // Prints " ok"
```
output: 
```
okk
ok
```
## Explanation (let):

- `let` has block scope, meaning it's only accessible within the block where it's declared.
- Inside the block, another `let c = "okk";` creates a new variable local to the block, not shadowing the global `c`.
- So, the inner `console.log` prints `"okk"`, but after the block ends, the inner `c` goes out of scope.
- The outer `console.log` now accesses the original global `c`, which prints `"ok"`.
## Feature Comparison:

## Feature Comparison:

| Feature     | var                               | let                                            |
|-------------|-----------------------------------|------------------------------------------------|
| Scope       | Function scope                    | Block scope                                    |
| Shadowing   | Can shadow outer variables        | Does not shadow outer variables                |
| When to use | Avoid using var in modern JavaScript due to potential scoping issues and confusion. | Use let for most variable declarations in modern JavaScript to avoid unexpected behavior and improve code clarity. |
|redeclaration | can b redeclare or updated , effectively hiding the previous one within the same funtion scope   | can only updated not redeclared within the same block scope              |

# Understanding Shadowing in JavaScript with var and let

## Shadowing:

When a variable with the same name is declared within a smaller scope (e.g., a function or block) as a variable in a larger scope (e.g., the entire program), the inner variable is said to shadow the outer variable. This means that within the inner scope, any references to the variable name will refer to the inner variable, essentially hiding the outer variable from view.

## Cannot Shadow:

If a variable declared within a specific scope cannot hide a variable with the same name in a wider scope, then it means that both variables remain accessible within their respective scopes. Each reference to the variable name will be resolved based on where it is used in the code.

## Application to var and let:

- **var**: In JavaScript, variables declared with `var` have function scope. This means they are accessible anywhere within the same function, regardless of nesting. Therefore, `var` variables can shadow outer variables, leading to potential confusion and unexpected behavior.

- **let**: On the other hand, variables declared with `let` have block scope. This means they are only accessible within the block where they are declared (e.g., `if...else` block, `for` loop). As a result, `let` variables cannot shadow outer variables, ensuring that each variable name refers to the intended value within its scope.


