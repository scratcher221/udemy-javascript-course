function calculateTip(bill) {
    switch(true) {
        case bill < 50:
            return 0.2 * bill
        case bill >= 50 && bill <= 200:
            return 0.15 * bill
        case bill > 200:
            return 0.1 * bill
        default:
            return 0
    }
}

var tips = [calculateTip(124), calculateTip(48), calculateTip(268)]
var finalAmounts = [124 + tips[0], 48 + tips[1], 268 + tips[2]]

console.log(tips, finalAmounts)