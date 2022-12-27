module.exports = play

function play(handPlayer1, handPlayer2) {
    let result

    if (handPlayer1 == "scissors" && handPlayer2 == "paper" ||
        handPlayer1 == "paper" && handPlayer2 == "rock" ||
        handPlayer1 == "rock" && handPlayer2 == "lizard"
    ) {
        result = "Player 1 Win"
    }

    if (handPlayer2 == "scissors" && handPlayer1 == "paper" ||
        handPlayer2 == "paper" && handPlayer1 == "rock" ||
        handPlayer2 == "rock" && handPlayer1 == "lizard"
    ) {
        result = "Player 2 Win"
    }

    return result
}
