var billsJohn = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalAmounts: [],
    calculateTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i]
            if (bill < 50) var tip = 0.2 * bill
            else if (bill >= 50 && bill < 200) var tip = 0.15 * bill
            else var tip = 0.1 * bill
            this.tips.push(tip)
            this.finalAmounts.push(bill + tip)
        }
        var tips = this.tips
        var finalAmounts = this.finalAmounts
        return {tips, finalAmounts}
    }
}

var billsMark = {
    bills: [77, 5, 110, 45],
    tips: [],
    finalAmounts: [],
    calculateTips: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i]
            if (bill < 100) var tip = 0.2 * bill
            else if (bill >= 100 && bill < 300) var tip = 0.1 * bill
            else var tip = 0.25 * bill
            this.tips.push(tip)
            this.finalAmounts.push(tip + bill)
        }
        var tips = this.tips
        var finalAmounts = this.finalAmounts
        return {tips, finalAmounts}
    }
}

function calculateAverageTip(tips) {
    var sumOfTips = 0
    for (var i = 0; i < tips.length; i++) {
        sumOfTips += tips[i]
    }
    return sumOfTips / tips.length
}

var {tips, finalAmounts} = billsJohn.calculateTips()
var johnsTips = tips
var johnsFinalAmounts = finalAmounts
var {tips, finalAmounts} = billsMark.calculateTips()
var marksTips = tips
var marksFinalAmounts = finalAmounts
console.log(johnsTips, johnsFinalAmounts)
console.log(marksTips, marksFinalAmounts)
johnsAverageTip = calculateAverageTip(billsJohn.tips)
marksAverageTip = calculateAverageTip(billsMark.tips)

johnsAverageTip > marksAverageTip ? console.log('John\'s family paid the highest tip on average, with a value of: ' + johnsAverageTip + '.')
: console.log('Mark\'s family paid the highest tip on average, with a value of: ' + marksAverageTip + '.')