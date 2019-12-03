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