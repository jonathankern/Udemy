/**********************************
Variables and data types
**********************************/

/* var firstName = 'Jonathan';
console.log(firstName);

var lastName = 'Kern';
var age = 40;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job); */


/**********************************
Variable mutation and type coercion
**********************************/

/*
var firstName = 'Jonathan';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + 'years old ' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + 'years old ' + job + '. Is he married? ' + isMarried);

// store variable from prompt input
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/**********************************
Basic operators
**********************************/

/*
var now, yearJonathan, yearMark, ageJonathan, ageMark;

ageJonathan = 28;
ageMark = 33;

// Math operators
now = 2020;
yearJonathan = now - 28;
yearMark = now - 33;

console.log(yearJonathan);

console.log(now +2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var jonathanOlder = ageJonathan > ageMark;
console.log(jonathanOlder);


// typeof operator - find out type of operator
console.log(typeof jonathanOlder);
console.log(typeof ageJonathan);
console.log(typeof 'Mark is older than Jonathan');

var x;
console.log(typeof x);
*/


/**********************************
Operator precedence
**********************************/

/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

// multiple assignments
var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// more operators
x *= 2;
console.log(x);

x += 10;
console.log(x);

x++
console.log(x);

x--
console.log(x);
*/


/**********************************
Code Challenge 1
**********************************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).
*/

var markMass,
    johnMass,
    markHeight,
    johnHeight,
    markBMI,
    johnBMI;

markMass = 50;
johnMass = 60;
markHeight = 1.69;
johnHeight = 1.79;
markBMI = markMass / markHeight^2;
johnBMI = johnMass / johnHeight^2;
isMarkBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMI);
