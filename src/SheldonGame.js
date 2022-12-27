module.exports = play

function play(handPlayer1, handPlayer2) {
    let result

    if (handPlayer1 == "scissors" && handPlayer2 == "paper" ||
        handPlayer1 == "paper" && handPlayer2 == "rock" ||
        handPlayer1 == "rock" && handPlayer2 == "lizard" ||
        handPlayer1 == "lizard" && handPlayer2 == "Spock" ||
        handPlayer1 == "Spock" && handPlayer2 == "scissors" ||
        handPlayer1 == "scissors" && handPlayer2 == "lizard" ||
        handPlayer1 == "lizard" && handPlayer2 == "paper" ||
        handPlayer1 == "paper" && handPlayer2 == "Spock" ||
        handPlayer1 == "Spock" && handPlayer2 == "rock"
        
    ) {
        result = "Player 1 Win"
    }

    if (handPlayer2 == "scissors" && handPlayer1 == "paper" ||
        handPlayer2 == "paper" && handPlayer1 == "rock" ||
        handPlayer2 == "rock" && handPlayer1 == "lizard" ||
        handPlayer2 == "lizard" && handPlayer1 == "Spock" ||
        handPlayer2 == "Spock" && handPlayer1 == "scissors" ||
        handPlayer2 == "scissors" && handPlayer1 == "lizard" ||
        handPlayer2 == "lizard" && handPlayer1 == "paper" ||
        handPlayer2 == "paper" && handPlayer1 == "Spock" ||
        handPlayer2 == "Spock" && handPlayer1 == "rock"
        
    ) {
        result = "Player 2 Win"
    }

    return result
}
