function getComputerChoice() {
    let randNumber = Math.floor(Math.random()* 3);
    if (randNumber == 1) {
        return "Rock";
    }
    else if (randNumber == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function oneRound(playerSelection, computerSelection) {
    if ((computerSelection) == playerSelection) {
        game();
    }
    else if (computerSelection == "Paper") {
        if (playerSelection == "rock") {
            return ("You lose!");
        }
        else {
            return ("You win!");
        }
    }
    else if (computerSelection == "Rock") {
        if (playerSelection == "paper") {
            return ("You win!");
        } else {
            return ("You lose!");
        }
    }
    else {
        if (playerSelection == "paper") {
            return ("You lose!");
        } else {
            return ("You win!");
        }
    }
}

function game() {
    let player = prompt("Your choice (Rock/Paper/Scissors): ").toLowerCase();
    let computer = getComputerChoice().toLowerCase();
    let res = oneRound(player, computer);
    return res;
}

let current = 0;
let win = 0;
let loss = 0;
while (current < 5) {
    let result = game();
    current += 1;
    if (result === "You win!") {
        win += 1;
    } else {
        loss += 1;
    }
}
console.log(`Your wins: ${win}`);
console.log(`Your losses: ${loss}`);

if (win > loss) {
    console.log("WINNER WINNER, CHICKEN DINNER!");
} else {
    console.log("YOU LOST!");
}