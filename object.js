// Person is a function that creates an object

var Person = function (name) {
    // name is added as a property of Person object
    // each object has a name property
    this.name = name;
    // sayHello is a property of the Person object
    // each object has a copy of this function
    // 1000 Person objects = 1000 copies of sayHello()
    this.sayHello = function () {
        console.log('Hello my name is', name)
    }
};

// add function sayGoodbye to Person prototype
// there is one copy of this function
// 1000 Person objects = 1 sayGoodbye function
Person.prototype.sayGoodbye = function () {
    console.log('goodbye')
};

// create a Person object set name to Brian
var brian = new Person('Brian');
// create a Person object set name to tim
var tim = new Person('tim');

tim.name = 'Timothy'; // change the name of tim to Timothy
// change sayHello function in tim object to perform something different
tim.sayHello = function () {
    console.log("Hi There. I'm ", this.name)
}

// write out names
console.log(brian.name);
console.log(tim.name);

// sayHello
brian.sayHello();
tim.sayHello();

// all objects are decended from an Object
console.log(brian.sayHello.toString())

// Types
console.log('Person:', typeof Person); // function
console.log('brian: ', typeof brian);  // Object

// define a new definition for sayGoodbye in the tim object
tim.sayGoodbye = function () {
    console.log('see ya later');
}

// brian object has no sayGoodBye function
// brian was created from Person
// Check if Person has a sayGoodBye() function
// it does so this version is executed
brian.sayGoodbye();

// tim object HAS a sayGoodBye function
// this function is executed

tim.sayGoodbye();