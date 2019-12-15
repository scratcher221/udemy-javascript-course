/*****************************
* Variables and data types
*/
/*
var firstName = 'John'
console.log(firstName)

var lastName = 'Smith'
var age = 28

var fullAge = true
console.log(fullAge)

var job
console.log(job)

job = 'Teacher'
console.log(job)

// Variable naming rules
var $3years = 3
var johnMark = 'John and Mark'
*/

/********************************************
 * Variable mutation and type coercion
 */

/*
var firstName = 'John'
var age = 28

// Type coercion (age is converted to string)
console.log(firstName + ' ' + age)

var job, isMarried
job = 'Teacher'
isMarried = false
// JavaScript also does type coercion with booleans
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// Variable mutation
age = 'twenty eight'
job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last Name?')
console.log(firstName + ' ' + lastName)
*/

/*********************************************
 * Basic operators
*/
/*
var year, yearJohn, yearMark
currentYear = 2019
ageJohn = 28
ageMark = 33

// Math operators
yearJohn = currentYear - ageJohn
yearMark = currentYear - ageMark

console.log(yearJohn)

console.log(currentYear + 2)
console.log(currentYear * 2)
console.log(currentYear / 10)

// Logical operators
var johnOlder = ageJohn < ageMark
console.log(johnOlder)

// typeof operator
console.log(typeof johnOlder)
console.log(typeof ageJohn)
console.log(typeof 'Mark is older than John')
var x
console.log(typeof x)
*/

/********************************
 * Operator precedence
 */
/*
var now = 2019
var yearJohn = 1989
var fullAge = 18

// Multiple operators
var isFullAge = now - yearJohn >= fullAge // true
console.log(isFullAge)

// Grouping
var ageJohn = now - yearJohn
var ageMark = 35
var average = (ageJohn + ageMark) / 2
console.log(average)

// Multiple assignments
var x, y
// Assignment associativity is from right-to-left
x = y = (3 + 5) * 4 - 6 // 8 * 4 - 6 // 26
console.log(x, y)


// More operators
x = x * 2
x *= 2
console.log(x)
x += 10
console.log(x)
x = x + 1
x += 1
x++
console.log(x)
*/

/**************************
 * If / else statements
 */
/*
var firstName = 'John'
var civilStatus = 'single'

var isMarried = true
if (isMarried) {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}
*/

/**************************
 * Boolean logic
 */
/*
var firstName = 'John'
var age = 20

if (age < 13) {
    console.log(firstName + ' is a boy.')
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}
*/

/****************************
 * The Ternary Operator and Switch Statements
 */

/*
var firstName = 'John'
var age = 21

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice'
console.log(drink)
*/
/*if (age >= 18) {
    drink = 'beer'
} else {
    drink = 'juice'
}*/

// Switch statement
/*
var job = 'instructor'
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.')
        break
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.')
        break
    case 'designer':
        console.log(firstName + ' designs beautiful websites.')
        break
    default:
        console.log(firstName + ' does something else.')
}

age = 17
switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.')
        break
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.')
        break
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.')
        break
    default:
        console.log(firstName + ' is a man.')
}
*/

/***************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/* var height

height = 23
if (height || height === 0) {
    console.log('Variable is defined')
} else {
    console.log('Variable has NOT been defined')
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!')
}
*/

/*****************************
 * Functions
 */

 /* function calculateAge(birthYear) {
     return 2019 - birthYear
 }

 var ageJohn = calculateAge(1990)
 var ageMike = calculateAge(1948)
 var ageJane = calculateAge(1969)

 console.log(ageJohn, ageMike, ageJane)

 function yearsUntilRetirement(year, firstName) {
     var age = calculateAge(year)
     var retirement = 65 - age

     if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.')
     } else {
         console.log(firstName + ' is already retired.')
     }
 }

 yearsUntilRetirement(1990, 'John')
 yearsUntilRetirement(1948, 'Mike')
 yearsUntilRetirement(1969, 'Jane')
 */

/***************************************
 * Function Statements and Expressions
 */

/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites'
        default:
            return firstName + ' does something else'
    }
}

console.log(whatDoYouDo('teacher', 'John'))
console.log(whatDoYouDo('designer', 'Jane'))
console.log(whatDoYouDo('retired', 'Mark'))
*/

/**********************************
 * Arrays
 */

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane']
var years = new Array(1990, 1969, 1948)

console.log(names[2])
console.log(names.length)

// Mutate array data
names[1] = 'Ben'
names[names.length] = 'Mary'
console.log(names)

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false]

john.push('blue')
john.unshift('Mr.')
console.log(john)

john.pop()
john.pop()
john.shift()
console.log(john)

console.log(john.indexOf(23))

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer'
console.log(isDesigner)
*/

/***************************
 * Objects and properties
 */
/*
 // Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john.firstName)
console.log(john['lastName'])
var x = 'birthYear'
console.log(john[x])

john.job = 'designer'
john['isMarried'] = true
console.log(john)

var jane = new Object()
jane.firstName = 'Jane'
jane.birthYear = 1969
jane['lastName'] = 'Smith'
console.log(jane)
*/

/***************************
 * Objects and methods
 */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calculateAge: function() {
        this.age = 2019 - this.birthYear
    }
}

john.calculateAge()
console.log(john)
*/

/********************************
 * Loops and iteration
 */
/*
// For loop
for (var i = 1; i <= 20; i+=2) {
    console.log(i)
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue']
for (var i = 0; i < john.length; i++) {
    console.log(john[i])
}

// While loop
var i = 0
while(i < john.length) {
    console.log(john[i])
    i++
}
*/

// continue and break statements

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue']
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue
    console.log(john[i])
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break
    console.log(john[i])
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i])
}
*/