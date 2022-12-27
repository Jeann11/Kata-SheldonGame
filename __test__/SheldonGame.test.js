const play = require("../src/SheldonGame");

describe('Sheldon Game - Player 1', () => {

    test('Player 1 Win: scissors cuts paper', () => {
        expect(play("scissors", "paper")).toBe("Player 1 Win");
    });

    test('Player 1 Win: paper covers rock', () => {
        expect(play("paper", "rock")).toBe("Player 1 Win");
    });

    test('Player 1 Win: rock cruches lizard', () => {
        expect(play("rock", "lizard")).toBe("Player 1 Win");
    });

    test('Player 1 Win: lizard poisons Spock', () => {
        expect(play("lizard", "Spock")).toBe("Player 1 Win");
    });

    test('Player 1 Win: Spock smashes scissors', () => {
        expect(play("Spock", "scissors")).toBe("Player 1 Win");
    });

    test('Player 1 Win: scissors decapitates lizard', () => {
        expect(play("scissors", "lizard")).toBe("Player 1 Win");
    });

    test('Player 1 Win: lizard eats paper', () => {
        expect(play("lizard", "paper")).toBe("Player 1 Win");
    });

    test('Player 1 Win: paper disproves Spock', () => {
        expect(play("paper", "Spock")).toBe("Player 1 Win");
    });

    test('Player 1 Win: Spock vaporizes rock', () => {
        expect(play("Spock", "rock")).toBe("Player 1 Win");
    });
});


describe('Sheldon Game - Player 2', () => {

    test('Player 2 Win: scissors cuts paper', () => {
        expect(play("paper", "scissors")).toBe("Player 2 Win");
    });

    test('Player 2 Win: paper covers rock', () => {
        expect(play("rock", "paper")).toBe("Player 2 Win");
    });

    test('Player 2 Win: rock cruches lizard', () => {
        expect(play("lizard", "rock")).toBe("Player 2 Win");
    });

    test('Player 2 Win: lizard poisons spock', () => {
        expect(play("Spock", "lizard")).toBe("Player 2 Win");
    });

    test('Player 2 Win: Spock smashes scissors', () => {
        expect(play("scissors", "Spock")).toBe("Player 2 Win");
    });

    test('Player 2 Win: scissors decapitates lizard', () => {
        expect(play("lizard", "scissors")).toBe("Player 2 Win");
    });

    test('Player 2 Win: lizard eats paper', () => {
        expect(play("paper", "lizard")).toBe("Player 2 Win");
    });

    test('Player 2 Win: paper disproves Spock', () => {
        expect(play("Spock", "paper")).toBe("Player 2 Win");
    });

    test('Player 2 Win: Spock vaporizes rock', () => {
        expect(play("rock", "Spock")).toBe("Player 2 Win");
    });

});