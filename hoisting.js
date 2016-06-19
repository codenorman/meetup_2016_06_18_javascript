// Hoisting
// the defining of a variable is hoisted
// to the top of scope
// js var uses scoping of global or function
//    it is not block scoping
// ES2015 (Ecma Scripting) added let
// let has block scoping

var x = 42; // global

//
for (var i = 0; i < 10; i++) {
    console.log('for ', i)
}
// i is defined, at the global level
// i is = 10
console.log('outside for', i)

for (let j = 0; j < 10; j++) {
    console.log(j)
}
// j is undefined outside the for loop
//console.log(j)

function foo() {

    if (true) {
        let x = 10; // a block scope version of x defined
        console.log('foo.if =', x);
    }
    // x defined inside if block is not defined here
}

foo();

console.log(x);  // global x = 42;