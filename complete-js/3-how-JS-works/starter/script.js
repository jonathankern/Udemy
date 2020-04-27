///////////////////////////////////////
// Lecture: Hoisting

/*
Hoisting: available before execution starts
only works for function declarations, not function expressions
*/

calculateAge(1990);

function calculateAge(year) {
    console.log(2016 - year);
}

// won't work bc hoisting does not work with function expression
// retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);


// variables set to undefined when code is scanned. variables that are not defined yet will have undefined data type

// var age = 23; // undefined
console.log(age);
var age = 23; // global execution object

function foo() {
    var age = 65;
    console.log(age); // will return 65 bc var defined in function
}

foo();
console.log(age); // will return 23 because it's using the global variable
















///////////////////////////////////////
// Lecture: Scoping

// Lexical scoping: a function that is lexically within another function gets access to the scope of the outer function.

// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// Regular function call: the this keyword points at the global object which by default is the window object in the browser.

// Method call: the this variable points to the object that is calling the method.

// The this keyword is not assigned a value until a function where it is defined is actually called.

// The this variable is only assigned a value when the object calls a method

// console.log(this); // window object

/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); // will point to window object because it is not a method
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() { // method
        console.log(this); // john object
        console.log(2016 - this.yearOfBirth);

        // function innerFunction() { // regular function
        //     console.log(this); // window object
        // }

        // innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing...borrow john's method and use it on mike...treat as a variable so don't use parenthesis
// store value in mike object
mike.calculateAge = john.calculateAge;

// call function
mike.calculateAge();



