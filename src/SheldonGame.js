module.exports = play

function play(handPlayer1, handPlayer2) {
    let result

    if (handPlayer1 == "scissors" && handPlayer2 == "paper" ||
        handPlayer1 == "paper" && handPlayer2 == "rock"
    ) {
        result = "Player 1 Win"
    }

    if (handPlayer2 == "scissors" && handPlayer1 == "paper") {
        result = "Player 2 Win"
    }

    return result
}
