"use strict";

// Pig game

// Two players playing in rounds.
// In each turn, a player rolls a dice as many times as he wishes. 
// Each result gets added to his round score.
// BUT, if the player rolls a 1, all his round score gets lost.
// After that, it's the next player's turn.
// The player can choose to 'Hold', which means that his round score gets added to his global score.
// After that, it's the next player's turn.
// The first player to reach 100 points on global score wins the game.

let scores;
let roundScore;
let activePlayer;
let gameOver = true;

const startGame = () => {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameOver = false;
}

const rollDice = (roundScore, activePlayer) => {
    if (!gameOver) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        if (dice !== 1) {
            roundScore += dice;
        } else {
            roundScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
        }
    }
}

const hold = (scores, roundScore, activePlayer) => {
    if (!gameOver) {
        scores[activePlayer] += roundScore;
        if (scores[activePlayer] >= 100) {
            gameOver = true;
        } else {
            roundScore = 0; 
            activePlayer = activePlayer === 0 ? 1 : 0;
        }
    }
}

