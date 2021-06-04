# The this keyword

### Wrong assumptions
- The first common temptation is to assume this refers to the function itself.
- It somehow refers to the function's scope.

## What is `this`
- `this` is not an author-time binding but a runtime binding.
- `this` binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.

### call site
The location in code where a function is called (not where it's declared).

## Rules 
There are 4 rules applied on `this`.

### Implicit Binding
if the call-site has a context object,

```js

function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2

```
Regardless of whether `foo()` is initially declared on `obj`, or is added as a reference later (as this snippet shows), in neither case is the function really "owned" or "contained" by the `obj` object. However, the call-site uses the `obj` context to reference the function, so you could say that the `obj` object "owns" or "contains" the function reference at the time the function is called

#### Implicity lost

when an implicitly bound function loses that binding, which usually means it falls back to the default binding, of either the `global` object or `undefined`, depending on `strict mode`

```js
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object

bar(); // "oops, global"

```

### Explicit Binding
To force a function call to use a particular object for the this binding, without putting a property function reference on the object, functions have call(..) and apply(..) methods. Technically, JavaScript host environments sometimes provide functions which are special enough (a kind way of putting it!) that they do not have such functionality. But those are few. The vast majority of functions provided, and certainly all functions you will create, do have access to call(..) and apply(..). They both take, as their first parameter, an object to use for the this, and then invoke the function with that this specified. Since you are directly stating what you want the this to be, we call it explicit binding.

```js 
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

foo.call( obj ); // 2
```
Invoking `foo` with explicit binding by `foo.call(..)` allows us to force its this to be `obj`.

**Note:** With respect to this binding, call(..) and apply(..) are identical. They do behave differently with their additional parameters, but that's not something we care about presently.

#### Hard Binding

```js
function foo() {
	console.log( this.a );
}

var obj = {
	a: 2
};

var bar = function() {
	foo.call( obj );
};

bar(); // 2
setTimeout( bar, 100 ); // 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 2
```

We create a function bar() which, internally, manually calls foo.call(obj), thereby forcibly invoking foo with obj binding for this. No matter how you later invoke the function bar, it will always manually invoke foo with obj. This binding is both explicit and strong, so we call it hard binding.

Another way to express this pattern is to create a re-usable helper:

```js
function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

// simple `bind` helper
function bind(fn, obj) {
	return function() {
		return fn.apply( obj, arguments );
	};
}

var obj = {
	a: 2
};

var bar = bind( foo, obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5: Function.prototype.bind, and it's used like this:

```js
function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = foo.bind( obj );

var b = bar( 3 ); // 2 3
console.log( b ); // 5
```

bind(..) returns a new function that is hard-coded to call the original function with the this context set as you specified.

### New Keyword

When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:

- a brand new object is created (aka, constructed) out of thin air
- the newly constructed object is `[[Prototype]]`-linked
- the newly constructed object is set as the this binding for that function call
- unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.

```js
function foo(a) {
	this.a = a;
}

var bar = new foo( 2 );
console.log( bar.a ); // 2
```