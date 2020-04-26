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


/**********************************
Functions
**********************************/

/*
function calculateAge(birthYear) {
    // return results so you can use the value later
    return 2018 - birthYear;
}

// create var to store result of return
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


// calculate how many years until retirement
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

// nothing to return so don't need to store value in variable
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


/**********************************
Function statements and expressions
**********************************/

// function declaration
/*
function whatDoYouDo(job, firstName) {

}
*/

// function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            // return value and ends statement, exits function
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.'
    }
}

// log return results to console
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/


// expressions are pieces of code that always produce a result

// whenever JavaScript expects a value, we always have to write an expression

// statements/declarations perform actions if/else or while loops
// does not return anything



/**********************************
Arrays
**********************************/
/*
// initialize new array
var names = ['John', 'Mark', 'Jane'];
// don't use new Array as often but can be used
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// different data types
var john = ['John', 'Smith', 1990, 'designer', false];

// add element to end of array
john.push('blue');
// add to beginning of array
john.unshift('Mr.');
console.log(john);

// remove element from end
john.pop();
john.pop();
// remove element from beginning
john.shift();
console.log(john);

// return position of argument that is passed into array
// test if element is in array, if it is not then it will return -1
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);

*/


/**********************************
Code challenge 3
**********************************/

// tip calculator function

// if bill < 50, tip 20%
// if bill >= 50 && <= 200, tip 15%
// if bill > 200, tip 10%

/*
var calculateTip = function(bill) {
    var tip;

    if (bill < 50) {
        tip = .20;
    } else if (bill >= 50 && bill <= 200) {
        tip = .15;
    } else {
        tip = .10;
    }

    return bill * tip;
}

var billsArray = [124, 48, 268];

// tip array
var tipArray = [calculateTip(billsArray[0]), calculateTip(billsArray[1]), calculateTip(billsArray[2])];
console.log(tipArray);

// final amount (bill + tip)
var totalBillArray = [billsArray[0] + tipArray[0], billsArray[1] + tipArray[1], billsArray[2] + tipArray[2]];
console.log(totalBillArray);
*/


/**********************************
Objects and properties
**********************************/

// can create using object literal
// firstName is a property of the john object
/*
var john = {
    // key: value pair
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
// use dot notation
console.log(john.lastName);
// use brackets with string
console.log(john['lastName']);
// use variable
var x = 'birthYear';
console.log(john[x]);

// mutate data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// or can create with new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/


/**********************************
Objects and methods
**********************************/

// only objects have methods, array is also an object

// method: function inside of object

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    // function expression assigning to calcAge method
    calcAge: function() {
        // "this" is the current object
        // store result directly in object by defining this.age which is then displayed in object when you call calcAge
        this.age = 2018 - this.birthYear;
    }
};

// access calcAge from the john object
john.calcAge();
console.log(john);
*/


/**********************************
Code challenge 4
**********************************/
/*
var john = {
    fullName: 'John Smith',
    mass: 70,
    height: 1.69,
    calculateBMI: function() {
        this.bmi = this.mass / this.height^2;

        return this.bmi;
    }
}

// john.calculateBMI();
// console.log(john);

var mark = {
    fullName: 'Mark Smithers',
    mass: 50,
    height: 1.69,
    calculateBMI: function() {
        this.bmi = this.mass / this.height^2;

        return this.bmi;
    }
}

// mark.calculateBMI();
// console.log(mark);

// calculate and read at the same time bc we returned the result so you can access it directly
if (john.calculateBMI() > mark.calculateBMI()) {
    console.log(john.fullName + ' has the highest bmi: ' + john.bmi);
} else if (mark.calculateBMI() > john.calculateBMI()) {
    console.log(mark.fullName + ' has the highest bmi: ' + mark.bmi);
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same bmi: ' + john.bmi);
}
*/




/**********************************
Loops and iteration
**********************************/

// for loop
/*for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// while loop , run while condition is true
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

/*
// continue and break statements.. use to break out of a loop and continue to next one
var john = ['John', 'Smith', 1990, 'designer', false];

// continue
for (var i = 0; i < john.length; i++) {
    // if it's NOT a string, break out of loop and continue to next one
    if (typeof john[i] !== 'string') continue;

    console.log(john[i]);
}

// break
for (var i = 0; i < john.length; i++) {
    // if it's NOT a string, break out of loop and does NOT continue to next one
    if (typeof john[i] !== 'string') break;

    console.log(john[i]);
}

// reverse loop
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/


/**********************************
Code challenge 5, lesson 2, section 29
**********************************/
/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calculateTipAmount: function() {
        // put tips and bill totals inside method to prevent empty arrays if calculateTipAmount is not used
        this.tips = [];
        this.billTotals = [];

        for (var i = 0; i < this.bills.length; i++) {
            var tip;
            var bill = this.bills[i];
            // if / else determine percentage based on tipping rules
            if (bill < 50) {
                tip = .2;
            } else if (bill >= 50 && bill < 200) {
                tip = .15;
            } else {
                tip = .10;
            }

            // add results to corresponding arrays
            this.tips[i] = bill * tip;
            this.billTotals[i] = bill + (bill * tip);
        }
    }
}

var mark = {
    fullName: 'Mark Johnson',
    bills: [77, 5, 110, 45],
    calculateTipAmount: function() {
        this.tips = [];
        this.billTotals = [];

        for (var i = 0; i < this.bills.length; i++) {
            var tip;
            var bill = this.bills[i];
            // if / else
            if (bill < 100) {
                tip = .2;
            } else if (bill >= 100 && bill < 300) {
                tip = .10;
            } else {
                tip = .25;
            }

            // add results to corresponding arrays
            // calculate tip amount, update this.tips arr
            this.tips[i] = bill * tip;
            // add tip amount to bill to get total bill, update this.billTotals arr
            this.billTotals[i] = bill + (bill * tip);
        }
    }
}

// calculate average of tips
function averageTip (tips) {
    // set sum to 0 to begin
    var sum = 0;

    // get average tip from tips arr
    for (var i = 0; i < tips.length; i++) {
        // update sum to sum plus current tip
        sum = sum + tips[i];
    }

    return sum / tips.length;
}

john.calculateTipAmount();
console.log(john);
mark.calculateTipAmount();
console.log(mark);

// calculate average tip amount and store in object
john.average = averageTip(john.tips);
mark.average = averageTip(mark.tips);

console.log(john.average);
console.log(mark.average);

if (john.average > mark.average) {
    // johns family is greater
    console.log(john.fullName + ' \'s family paid more in tips with an average of: ' + john.average);
} else if (mark.average > john.average) {
    // marks family is greater
    console.log(mark.fullName + ' \'s family paid more in tips with an average of: ' + mark.average);
} else {
    // they are the same
    console.log('both family\'s paid the same in average tips');
}

*/

/**********************************

**********************************/


