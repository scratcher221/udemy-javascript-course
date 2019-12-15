john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 79,
    height: 1.7,
    calculateBMI: function() {
        var bmi = this.mass / this.height**2
        this.bmi = bmi
        return bmi
    }
}

mark = {
    firstName: 'Mark',
    lastName: 'Wahlmann',
    mass: 93,
    height: 1.95,
    calculateBMI: function() {
        var bmi = this.mass / this.height**2
        this.bmi = bmi
        return bmi
    }
}

var johnBMI = john.calculateBMI()
var markBMI = mark.calculateBMI()

if (johnBMI > markBMI) {
    console.log(john.firstName + ' ' + john.lastName + ' has the higher BMI with a value of: ' + john.bmi)
} else if (markBMI > johnBMI) {
    console.log(mark.firstName + ' ' + mark.lastName + ' has the higher BMI with a value of: ' + mark.bmi)
} else {
    console.log('Both have the same BMI with a value of: ' + john.bmi)
}