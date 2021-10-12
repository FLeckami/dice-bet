// button elements

let btnNewGame = document.getElementById("newGame")
let btnRollDice = document.getElementById("rollDice")
let btnHold = document.getElementById("hold")

// scores element

let globalScoreElmt = document.getElementsByClassName('global-score')
let currentScoreElmt = document.getElementsByClassName('current-score')

// dice image

let imgDice = document.getElementById("dice")

// scores variables

let globalScore  = [0, 0]
let currentScore = [0, 0]

// 

let players = document.querySelectorAll('.p1, .p2')
let currentTurn = 0

// button click event

btnNewGame.addEventListener('click', newGame)

btnRollDice.addEventListener('click', (e) => {
    let resultDice = Math.round(Math.random() * 5 + 1)

    imgDice.setAttribute("src", "images/d"+resultDice+".png")

    if (resultDice != 1) {
        currentScore[currentTurn] += resultDice
        currentScoreElmt[currentTurn].textContent = currentScore[currentTurn]
    } else {
        currentScore[currentTurn] = 0
        currentScoreElmt[currentTurn].textContent = currentScore[currentTurn]
        currentTurn = (currentTurn + 1) % 2
        changeTurn(currentTurn)
    }

})

btnHold.addEventListener('click', (e) => {
    globalScore[currentTurn] += currentScore[currentTurn]
    globalScoreElmt[currentTurn].textContent = globalScore[currentTurn]

    currentScore[currentTurn] = 0
    currentScoreElmt[currentTurn].textContent = currentScore[currentTurn]

    if (globalScore[currentTurn] >= 100) {
        alert("Player " + (currentTurn+1) + " win !")
        newGame()
        return
    }


    currentTurn = (currentTurn + 1) % 2
    changeTurn(currentTurn)
})

// functions

function newGame() {
    // reset scores

    globalScore = [0, 0]
    currentScore = [0, 0]

    currentScoreElmt[0].textContent = currentScore[0]
    currentScoreElmt[1].textContent = currentScore[1]

    globalScoreElmt[0].textContent = globalScore[0]
    globalScoreElmt[1].textContent = globalScore[1]

    // player 1 play first
    currentTurn = 0
    changeTurn(currentTurn)
}

function changeTurn(player) {
    players[(player+1)%2].classList.remove('player-turn')
    players[player].classList.add('player-turn')
}