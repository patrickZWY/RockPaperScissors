let yourScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let player = button.id.toLowerCase();
        let computer = getComputerChoice().toLowerCase();
        let res = oneRound(player, computer);
        if (res == "You win!") {
            yourScore += 1;
        } else if (res == "You lose!") {
            compScore += 1;
        }
        endLogic();
    })
})


function getComputerChoice() {
    let randNumber = Math.floor(Math.random()* 3);
    if (randNumber == 0) {
        return "Rock";
    }
    else if (randNumber == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function oneRound(playerSelection, computerSelection) {
    if (computerSelection == "Paper") {
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


function endLogic() {
    console.log(`Your wins: ${yourScore}`);
    console.log(`Computer wins: ${compScore}`);

    if (yourScore == 5 || compScore == 5) {
        if (yourScore == 5) {
            console.log("WINNER WINNER, CHICKEN DINNER!");
        } else {
            console.log("ROBOTS WIN!");
        }
        yourScore = 0;
        compScore = 0;
    }
};
