// Search Index for JavaScript Master Guide
window.DOCS_SEARCH_INDEX = [
  // Chapter 1: Variables
  { title: "Variables Overview", chapter: "01. Variables", url: "01-variables.html#overview", snippet: "Understanding JavaScript variables, declaration vs initialization, and the role of the identifier in memory." },
  { title: "var vs let vs const Comparison", chapter: "01. Variables", url: "01-variables.html#comparison", snippet: "Differences in scope, reassignment, redeclaration, and hoisting between var, let, and const." },
  { title: "Temporal Dead Zone (TDZ)", chapter: "01. Variables", url: "01-variables.html#tdz", snippet: "Why accessing let and const before declaration results in a ReferenceError." },
  { title: "Variable Lifecycle & Memory", chapter: "01. Variables", url: "01-variables.html#lifecycle", snippet: "Declaration phase, Initialization phase, and Assignment phase in the V8 engine." },
  
  // Chapter 2: Data Types
  { title: "JavaScript Type System Overview", chapter: "02. Data Types", url: "02-data-types.html#overview", snippet: "Dynamically typed nature of JS, 8 data types categorized into Primitive and Non-Primitive." },
  { title: "The typeof Operator & Quirks", chapter: "02. Data Types", url: "02-data-types.html#typeof", snippet: "Historical bug typeof null === 'object', typeof NaN === 'number', and function typeof." },
  { title: "Type Coercion: Implicit vs Explicit", chapter: "02. Data Types", url: "02-data-types.html#coercion", snippet: "Truthy/Falsy values, Number coercion, String coercion, and Boolean conversion rules." },
  
  // Chapter 3: Primitive Types
  { title: "7 Primitive Data Types", chapter: "03-primitive.html#overview", snippet: "Number, BigInt, String, Boolean, Null, Undefined, and Symbol." },
  { title: "Memory Allocation in Stack", chapter: "03-primitive.html#memory", snippet: "Why primitives are stored by value directly on the call stack and accessed fast." },
  { title: "Immutability of Primitives", chapter: "03-primitive.html#immutability", snippet: "Understanding why primitive values cannot be mutated, only reassigned." },
  { title: "Autoboxing & Wrapper Objects", chapter: "03-primitive.html#autoboxing", snippet: "How primitives temporarily become objects when calling methods like .toUpperCase()." },

  // Chapter 4: Non-Primitive Types
  { title: "Reference Types in Heap Memory", chapter: "04-non-primitive.html#overview", snippet: "Objects, Arrays, Functions, Dates, Maps, and Sets stored in Heap with Stack pointers." },
  { title: "Pass by Value vs Pass by Reference", chapter: "04-non-primitive.html#pass-by-ref", snippet: "Why modifying an object parameter in a function alters the original caller object." },
  { title: "Shallow Copy vs Deep Copy", chapter: "04-non-primitive.html#cloning", snippet: "Object.assign, Spread operator vs structuredClone() and JSON.parse(JSON.stringify())." },
  { title: "Map, Set, WeakMap, WeakSet", chapter: "04-non-primitive.html#collections", snippet: "Modern ES6 keyed collections and automatic garbage collection with weak references." },

  // Chapter 5: Operators
  { title: "Arithmetic & Assignment Operators", chapter: "05-operators.html#arithmetic", snippet: "Exponentiation **, modulo %, increment/decrement ++/--, and compound assignments." },
  { title: "Loose (==) vs Strict (===) Equality", chapter: "05-operators.html#equality", snippet: "Detailed type coercion algorithm table, Object.is() for NaN and -0 comparisons." },
  { title: "Logical Operators & Short-Circuiting", chapter: "05-operators.html#logical", snippet: "AND (&&), OR (||), and NOT (!) short-circuit evaluation patterns and fallback assignment." },
  { title: "Nullish Coalescing (??) & Optional Chaining (?.)", chapter: "05-operators.html#modern-ops", snippet: "Safe navigation and differentiating null/undefined from 0 and false." },
  { title: "Ternary & Bitwise Operators", chapter: "05-operators.html#bitwise", snippet: "Conditional expressions, bitwise shifts, bitwise AND/OR/XOR and bit masks." },

  // Chapter 6: Scope
  { title: "Global, Function, and Block Scope", chapter: "06-scope.html#scope-types", snippet: "Lexical boundaries defined by curly braces {}, functions, and global window/globalThis." },
  { title: "Lexical Scope & Scope Chain", chapter: "06-scope.html#scope-chain", snippet: "How JavaScript engines resolve variable identifiers by walking upward in scope chain." },
  { title: "Variable Shadowing & Illegal Shadowing", chapter: "06-scope.html#shadowing", snippet: "Shadowing outer variables and why let cannot shadow var in the same block." },
  { title: "Closures Deep Dive", chapter: "06-scope.html#closures", snippet: "Functions bundled with their lexical environment. Use cases: data privacy, factories, memoization." },

  // Chapter 7: Hoisting
  { title: "Execution Context & Creation Phase", chapter: "07-hoisting.html#execution-context", snippet: "Memory creation phase vs Code execution phase in JavaScript execution engine." },
  { title: "Variable Hoisting (var vs let/const)", chapter: "07-hoisting.html#var-hoisting", snippet: "var initialized to undefined, let/const allocated in uninitialized TDZ state." },
  { title: "Function Declaration vs Expression Hoisting", chapter: "07-hoisting.html#func-hoisting", snippet: "Function declarations hoisted with body, function expressions hoisted as undefined variable." },
  { title: "Tricky Hoisting Interview Questions", chapter: "07-hoisting.html#interview-puzzles", snippet: "Complex puzzles with overlapping function declarations, variables, and arguments." },

  // Chapter 8: ES6+ Features
  { title: "Arrow Functions & Lexical `this`", chapter: "08-es6-features.html#arrow-functions", snippet: "Concise syntax, implicit returns, and how arrow functions inherit this from parent scope." },
  { title: "Destructuring (Objects & Arrays)", chapter: "08-es6-features.html#destructuring", snippet: "Pattern matching, default values, property renaming, nested destructuring." },
  { title: "Rest & Spread Operators (...)", chapter: "08-es6-features.html#spread-rest", snippet: "Gathering arguments into arrays vs expanding iterables into elements or object properties." },
  { title: "Template Literals & Tagged Templates", chapter: "08-es6-features.html#template-literals", snippet: "String interpolation, multiline strings, and tagged template functions for sanitization." },
  { title: "ES6 Classes & Inheritance", chapter: "08-es6-features.html#classes", snippet: "Syntactic sugar over prototypes, constructor, static methods, extends, and super." },
  { title: "Promises & Async / Await", chapter: "08-es6-features.html#async-await", snippet: "Asynchronous programming, Promise chaining, Promise.all, try/catch with async functions." }
];
