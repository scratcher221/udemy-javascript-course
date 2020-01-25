/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevDice
gamePlaying = false
init()

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Generate random number
        var dice = Math.ceil(Math.random() * 6)
        var twoSix = (prevDice && prevDice === 6 && dice === 6)
        if (twoSix) {
            console.log('Rolled two 6\'s in a row!')
            scores[activePlayer] = 0
            // Update the UI
            document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]
        }
        prevDice = dice
        // 2. Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src = `dice-${dice}.png`
        document.querySelector(`#current-${activePlayer}`).textContent = dice

        // 3. Update the round score IF the rolled number was NOT a 1 and not two 6's in a row
        if (dice > 1 && !twoSix) {
            // Add score
            roundScore += dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        } else {
            resetRoundScore()
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore
        // Update the UI
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]
        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            gamePlaying = false
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
        } else {
            resetRoundScore()
        }
    }
})

function init() {
    gamePlaying = true
    scores = [0, 0]
    roundScore = 0
    activePlayer = 0

    document.querySelector('.dice').style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}

function resetRoundScore() {
    roundScore = 0
    document.querySelector('#current-' + activePlayer).textContent = roundScore
    // Next player
    nextPlayer()
}

function nextPlayer() {
    prevDice = undefined
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('active')
    // Hide the dice
    document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init)

/*
Coding Challenges
1. A player looses their entire score when they roll two 6 in a row. After that, it's the next player's turn.
2. Allow the players to change the winning score from 100 to an arbitrary value via an HTML input field.
3. Add a second dice to the game. When one of them is 1, the current player loses their current score.
*/