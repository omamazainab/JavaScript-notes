In classic compiler theory, a program is processed by a compiler in three basic stages:

### Tokenizing
The process in which code is broken into small chunks and converted into meaningful tokens.

### Parsing 
Takes a string of tokens and converts them into a tree of elements representing the gramatical structure of that program. This is called an Abstract Syntax Tree (AST).

### Execution
Taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, and other factors.


# Hoisting in JavaScript

Usually a strict defination of hoisting suggests that Javascript physically moves the functions and the variable declariations at the top of the code. It says that anytime the JavaScript execution engine enters a scope, it finds all the declearations in that scope and makes variables for them. But, that's not a real thing, JavaScript engine does not hoist. Declarations stay where you typed them but they are put into the memory at compile phase. People usually think it is a one pass process but it's not, you have to pass through it twice one for the compilation and then for the execution.

So, how are we going to figure out how does it happen where all the declarations occur? By the observations we can make, JavaScript engine requires at least two phases to process a program, which are parsing/ compilation and execution. So, the processing on the tokens that come later on that block until you find the end of that block and theoretically pull all the delclarations out and rearrange them is nothing but parsing.

### Example


```js
console.log(testVar); // undefined
console.log(anotherTestVar); //undefined
var testVar = 1;
var anotherTestVar = 0;
```

We will first pass through this code as compiler and then pass through it for execution, 

In the compilation phase of JavaScript, Compiler sets up the declaration of the variable if it was not declared in that scope before. 

In the execution phase, JavaScript engine assigns initial value `undefined` to that variable and then later assigns any value to it.

See [Kyle's Marbles and buckets analogy](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#marbles-and-buckets-and-bubbles-oh-my) for better understanding of how compiler and JS engine work. 

## Variable hoisting

### Using var keyword

JavaScript engine treats all variables declared using a `var` as if they were declared at the top of function scope (if they are in a function) or global scope. JavaScript engine assigns initial value `undefined` to that variable and then later assigns any value to it.

```js
function getPerson(condition) {    
    
    // person exists here with a value of undefined
    console.log(person); // undefined

    if (condition) {   

        var person = "Omama";
        console.log(person); // Omama

    } else{        
        // person exists here with a value of undefined        
        console.log(person);  // undefined
    }
}
```

### Using let or const

When we used var keyword, the variab;e got hoisted at the top of the scope and initialized to `undefined` so we could use it throughout the entire scope. But `let` and `const` are different
we might have heard that "let does not hoist" let see an example. The difference between `var` and, `let` and `const` is, `var` is function scoped and, `let` and `const` are block scoped. Variables when using var are declared, they are initialized with a value `undefined` where as, let and const allocate memory but, remain uninitialized i.e, remain in temporal dead zone.

```js
{
    console.log(person); // TDZ error
    let person = "Omama"
}
```

Temporal Dead Zone (TDZ) is a state where a variable exists but uninitialized, and therefore cannot be accessed in any way. Only the execution of the instructions left by Compiler at the point of the original declaration can do that initialization. when the variable is initilized the temporal deadzone ends and the variable can be accessed.

But if let does not hoist then the output here must be `"Zainab"`, because it will find the person variable in the global scope but it shows same error which means it gets hoisted but is initialized so it gives TDZ error. 

```js
var person = "Zainab";
{
    console.log(person); // TDZ error
    let person = "Omama"
}
```

## Function hoisting

There are two ways of creating functions in JavaScript, function declaration and function expressions. Function hoisting only applies to formal function declarations, not to function expression assignments. 

### Function declaration

```js
function testFunc(param1,param2){
    /*statements*/
}
```

A function declaration is always executed when entering its scope, regardless of where it is located within the scope, which enables us to call a function before it was declared.

### Example


```js

var person = 'Omama';

greeting(); // Hello Omama

function greeting(){
    console.log(`Hello  ${person}`)
}

```

