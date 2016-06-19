// array deconstructing
var myArray = [1, 2, 3, 4, 5, 6, 7, 8];

var [x,y, ...rest] = myArray;  // x, y are set to myArray[0], myArray[1]

console.log(x, y, rest);

// object deconstructing
var myObject = {
    lastname: 'Chirgwin',
    firstname: 'Brian',
    address: {
        street: '123 Main St.',
        city: 'Anywhere',
        state: 'US',
        zip: '00000'
    }
};

var {lastname, firstname, address} = myObject;

console.log('lastname', lastname);
console.log('firstname', firstname);
console.log('address', address);
