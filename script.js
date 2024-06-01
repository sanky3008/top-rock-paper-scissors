// Create a function that returns rock, paper or scissors at random

function getComputerChoice() {
    let random = Math.random();
    let computerChoice;
    if (Math.floor((random*100)%3) == 0) {
        computerChoice = 'rock';
    } else if (Math.floor((random*100)%3) == 1) {
        computerChoice = 'paper';
    } else if (Math.floor((random*100)%3) == 2){
        computerChoice = 'scissors';
    }
    return computerChoice;
}

// Create a function that can take input from the user

function getHumanChoice() {
    let humanChoice = prompt("Please choose one among rock, paper and scissors");
    return humanChoice;
}

// Create variables to keep score

let humanScore = 0;
let computerScore = 0;

// Create a function to play a single round

// Create a function to play a single round
function playRound(humanchoice, computerChoice) {
    let humanChoice = humanchoice.toLowerCase();
    let winner;

    if (humanChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log('Its a tie!');
            winner = 'none';
        } else if (computerChoice == 'paper') {
            console.log("You lose! Paper beats Rock!");
            winner = 'computer';
        } else if (computerChoice == 'scissors') {
            console.log("You win! Rock beats Scissors!");
            winner = 'human';
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log("You win! Paper beats Rock!");
            winner = 'human';
        } else if (computerChoice == 'paper') {
            console.log('Its a tie!');
            winner = 'none';
        } else if (computerChoice == 'scissors') {
            console.log("You lose! Scissors beats Paper!");
            winner = 'computer';
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log("You lose! Rock beats Scissors!");
            winner = 'computer';
        } else if (computerChoice == 'paper') {
            console.log("You win! Scissors beats Paper!");
            winner = 'human';
        } else if (computerChoice == 'scissors') {
            console.log('Its a tie!');
            winner = 'none';
        }
    }

    if (winner == 'human') {
        ++humanScore;
        // console.log(humanScore + "in playground")
    } else if (winner == 'computer') {
        ++computerScore;
        // console.log(computerScore + "in playground")
    }

    return winner;
}

// Create a function to play the game

function playGame() {
    console.log("let's start!");
    console.log("your score is: " + humanScore);
    console.log("computer's score is: " + computerScore);

    // Round 1
    playRound(getHumanChoice(), getComputerChoice());
    console.log("End of Round 1!")
    console.log("your score is: " + humanScore);
    console.log("computer's score is: " + computerScore);

    // Round 2
    playRound(getHumanChoice(), getComputerChoice());
    console.log("End of Round 2!")
    console.log("your score is: " + humanScore);
    console.log("computer's score is: " + computerScore);

    // Round 3
    playRound(getHumanChoice(), getComputerChoice());
    console.log("End of Round 3!")
    console.log("your score is: " + humanScore);
    console.log("computer's score is: " + computerScore);

    // Round 4
    playRound(getHumanChoice(), getComputerChoice());
    console.log("End of Round 4!")
    console.log("your score is: " + humanScore);
    console.log("computer's score is: " + computerScore);

    // Round 5
    playRound(getHumanChoice(), getComputerChoice());
    console.log("End of Round 5!")
    console.log("your score is: " + humanScore);
    console.log("computer's score is: " + computerScore);
}

playGame(humanScore, computerScore);