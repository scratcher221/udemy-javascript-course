var teamJohnAvg = (93 + 137 + 103) / 3
var teamMikeAvg = (116 + 94 + 123) / 3
var teamMaryAvg = (97 + 122 + 105) / 3
var winner
console.log(teamJohnAvg, teamMikeAvg, teamMaryAvg)
if (teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg) {
    winner = 'John\'s Team'
    console.log('Winner: ' + winner + ', with an average score of: ' + teamJohnAvg)
} else if (teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg) {
    winner = 'Mike\'s Team'
    console.log('Winner: ' + winner + ', with an average score of: ' + teamMikeAvg)
} else if (teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg) {
    winner = 'Mary\'s Team'
    console.log('Winner: ' + winner + ', with an average score of: ' + teamMaryAvg)
} else {
    console.log('It\'s a draw.')
}


