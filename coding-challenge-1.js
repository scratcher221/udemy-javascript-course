// BMI = mass / height^2
// mass in kg, height in meter
var massMark = 60
var massJohn = 95
var heightMark = 170
var heightJohn = 190

var bmiMark = massMark / heightMark**2
var bmiJohn = massJohn / heightJohn**2

var markHigherBMI = bmiMark > bmiJohn
var johnHigherBMI = bmiJohn > bmiMark

console.log('Mark has a higher BMI than John: ' + markHigherBMI)
console.log('John has a higher BMI than Mark: ' + johnHigherBMI)
console.log(`Mark's BMI: ${bmiMark}, John's BMI: ${bmiJohn}`)
