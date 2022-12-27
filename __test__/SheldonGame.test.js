const play = require("../src/SheldonGame");

describe('Sheldon Game', () => {

    test('Player 1 Win: scissors cut paper', () => {
        expect(play("scissors", "paper")).toBe("Player 1 Win");
    });

    test('Player 2 Win: paper loose scissors', () => {
        expect(play("paper", "scissors")).toBe("Player 2 Win");
    });

    test('Player 1 Win: paper beats rock', () => {
        expect(play("paper", "rock")).toBe("Player 1 Win");
    });


});


//game.die(tiradaDelPlayer1, tiradaDelPlayer2)