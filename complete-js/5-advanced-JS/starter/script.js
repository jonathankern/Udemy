// Function constructor

// object literal
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// function constructor pattern for writing a blue print
// these should always be capitalized
// pass in the parameters that are the variables that you want to set

/* var Person = function(name, yearOfBirth, job) {
    // this.name equals the name, which is a parameter of the function
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
*/

// instead of adding a method inside of the Person constructor, you can create it using the prototype property. This way the methods are pulled out of the constructor and kept separate. Easier to maintain, understand, read, use. The instances won't have the calculateAge method attached to them but they will have ACCESS to it via the prototype property.

/*
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}
*/

// instantiation
// create new objects using a constructor. instances of the Person object
// new keyword creates an empty function, then the constructor function is called, point the 'this' keyword to the new instance
// if constructor function does not return anything, the result is the object that was created in the first step... now has the properties that we defined then assigned to john variable.
/*var john = new Person('John', 1990, 'teacher');

// more people
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// INHERITANCE
// add method to object
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// can do the same thing for properties as methods but not as common.. not directly in constructor but can access through prototype property
Person.prototype.lastName = 'Smith';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// create constructor object
var Outfit = function(top, bottom, underwear, socks, shoes) {
    this.top = top;
    this.bottom = bottom;
    this.underwear = underwear;
    this.socks = socks;
    this.shoes = shoes;
}

// create a prototype for method
Outfit.prototype.calculateAccessory = function() {
    if (this.top === 'shirt') {
        this.accessory = 'hat';
        console.log(this.accessory);
    } else {
        this.accessory = 'necklace';
        console.log(this.accessory);
    }
}

// create a prototype for property
Outfit.prototype.outerwear = 'jacket';

// create 3 instances of the constructor object
var jonathan = new Outfit('shirt', 'pants', 'boxer briefs', 'black', 'chukka boots');

var charly = new Outfit('blouce', 'jeans', 'lace', 'none', 'sandals');

jonathan.calculateAccessory();
console.log(jonathan);

charly.calculateAccessory();
console.log(charly);

console.log(jonathan.outerwear);
console.log(charly.outerwear);

console.log(charly);
*/

/*************************************
Section 5, lesson 63
Creating Objects: Object.create
*************************************/

// Object.create
// Define an object that will act as prototype then create an object based on that prototype

// Object.create builds an object that inherits directly from the one we passed into the first argument. You can directly specify which object should be a prototype.

// Whereas the function constructor pattern, the newly created object inherits from the constructor's prototype property

// write protoype as simple object

/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

// manually add each property
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

/*************************************
Section 5, lesson 64
Primitives vs. Objects
*************************************/

// variables containing primitives hold data inside of var itself
// primitives
/*var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);


// vars associated w objects don't contain the object, they contain a reference to the place in memory to where the object is stored. Does not have a real copy of the object, just points to the object

// objects

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age); // 30
console.log(obj2.age); // 26


// functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age); // 27, primitive remained unchanged
console.log(obj.city); // San Francisco, object changed to new city
*/


/*************************************
Section 5, lesson 65
First class functions: passing
functions as arguments
*************************************/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, callback) {
    // loop over array and return a result
    // create new empty array
    var arrayResult = [];

    for (var i = 0; i < array.length; i++) {
        // push into array - result of invoking callback function and pass current element array[i]
        // callback is a callback function
        arrayResult.push(callback(array[i]));
    }
    // return result of array
    return arrayResult;
}

function calculateAge(element) {
    return 2016 - element;
}

// is someone full age
function isFullAge(element) {
    // return true or false
    return element >= 18;
}

// max heart rate
function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        // round to nearest integer
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

// pass "calculateAge" callback function as parameter
// but we are not invoking it now (or else it would have "()")
var ages = arrayCalc(years, calculateAge);
// check to see if someone is full age
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(rates);
*/
