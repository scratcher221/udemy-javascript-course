// BMI = mass / height^2
// mass in kg, height in meter
var massMark = 60
var massJohn = 70
var heightMark = 1.7
var heightJohn = 1.9

var bmiMark = massMark / heightMark**2
var bmiJohn = massJohn / heightJohn**2

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.')
} else {
    console.log('John\'s BMI is higher than Mark\'s.')
}
