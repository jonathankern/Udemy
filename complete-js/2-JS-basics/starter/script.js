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

/* var markMass,
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

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMI); */


/**********************************
If/else statements
**********************************/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is single');
}

var isMarried = false;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is single');
}


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

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than John\'s');
}
*/

/**********************************
Boolean logic
**********************************/
/*
var firstName = 'John';
var age = 16;

if (age < 13) { // younger than 13
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 - 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { // between 20 - 30
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/


/**********************************
Ternary (aka conditional) operator and switch statements
**********************************/

/*
var firstName = 'John';
var age = 14;

// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// switch statement
var job = 'designer';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// translate to switch from if/else comparison
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


/**********************************
Truthy and Falsy values and equality operators
**********************************/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: everything that is not a falsy value

var height;

height = 23;

if (height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable has not been defined');
}

// equality operators
if (height == '23') {
    console.log('The == operator does type coercion and is non-strict!');
}
*/



/**********************************
Code challenge 2
**********************************/
/*
// 1. calculate average score for each team
var johnTeamAverage = (89 + 120 + 103) / 3;
var mikeTeamAverage = (116 + 94 + 123) / 3;
*/
// 2. decide which team has the highest average score and print the winner to the console
/*
if (johnTeamAverage > mikeTeamAverage) {
    console.log('John is the winner with an average of ' + johnTeamAverage);
} else if (mikeTeamAverage > johnTeamAverage) {
    console.log('Mike is the winner with an average of ' + mikeTeamAverage);
} else {
    console.log('John and Mike tied');
}
*/

// 3. change scores to test

// 4. add in mary
/*
var johnTeamAverage = (89 + 120 + 103) / 3;
var mikeTeamAverage = (116 + 94 + 123) / 3;
var maryTeamAverage = (97 + 134 + 105) / 3;

if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
    console.log('John is the winner with an average of ' + johnTeamAverage);
} else if (mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage) {
    console.log('Mike is the winner with an average of ' + mikeTeamAverage);
} else if (maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage) {
    console.log('Mary is the winner with an average of ' + maryTeamAverage);
} else if (maryTeamAverage === johnTeamAverage && maryTeamAverage === mikeTeamAverage && johnTeamAverage === mikeTeamAverage) {
    console.log('John, Mike, and Mary tied, they all have an average of ' + johnTeamAverage);
} else {
    console.log('There is not a clear winner but 2 teams tied.');
}
*/
