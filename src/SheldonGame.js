module.exports = play

function play(player1Object, player2Object) {

    const player1Wins = checkIfPlayerOneWin(player1Object, player2Object)
    const isDraw = checkIfIsDraw(player1Object,player2Object)

    if (player1Wins) return "Player 1 Win"
    if (isDraw) return "Draw"

    return "Player 2 Win"
}

function checkIfPlayerOneWin(player1Object, player2Object) {
    if (player1Object == "scissors" && (player2Object == "paper" || player2Object == "lizard") ||
        player1Object == "paper" && (player2Object == "rock" || player2Object == "Spock") ||
        player1Object == "rock" && (player2Object == "lizard" || player2Object == "scissors") ||
        player1Object == "lizard" && (player2Object == "Spock" || player2Object == "paper") ||
        player1Object == "Spock" && (player2Object == "scissors" || player2Object == "rock")
    ) {
        return true
    }

    return false
}

function checkIfIsDraw(player1Object, player2Object) {
    if (player1Object == player2Object) return true

    return false
}
