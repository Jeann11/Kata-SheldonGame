const play = require("../src/SheldonGame");

describe('Sheldon Game', () => {

    test('Player 1 Win: scissors cuts paper', () => {
        expect(play("scissors", "paper")).toBe("Player 1 Win");
    });

    test('Player 2 Win: scissors cuts paper', () => {
        expect(play("paper", "scissors")).toBe("Player 2 Win");
    });

    test('Player 1 Win: paper covers rock', () => {
        expect(play("paper", "rock")).toBe("Player 1 Win");
    });

    test('Player 2 Win: paper covers rock', () => {
        expect(play("rock", "paper")).toBe("Player 2 Win");
    });


});


//game.die(tiradaDelPlayer1, tiradaDelPlayer2)