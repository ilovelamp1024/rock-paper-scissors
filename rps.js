
// Returns rock, paper or scissors at random.
function computerPlay() {
    var i;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            i = "rock";
            break;
        case 1:
            i = "paper";
            break;
        case 2:
            i = "scissors";
            break;
    }
    return i;
}

// Returns win, lose or tie.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock"){
        if (computerSelection == "rock") {
            console.log("Rock cancels out rock.");
            return "tie";
        }
        else if (computerSelection == "paper") {
            console.log("Paper beats rock.")
            return "lose";
        }
        else if (computerSelection == "scissors") {
            console.log("Rock beats scissors.")
            return "win";
        }
        else {
            return "lose";
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock") {
            console.log("Paper beats rock.")
            return "win";
        }
        else if (computerSelection == "paper") {
            console.log("Paper cancels out paper.")
            return "tie";
        }
        else if (computerSelection == "scissors") {
            console.log("Scissors beats paper.")
            return "lose";
        }
        else {
            return "lose";
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            console.log("Rock beats scissors.")
            return "lose";
        }
        else if (computerSelection == "paper") {
            console.log("Scissors beats paper.")
            return "win";
        }
        else if (computerSelection == "scissors") {
            console.log("Scissors cancels out scissors.")
            return "tie";
        }
        else {
            return "lose";
        }
    
    }
    else {
        console.log("Player forfeits.");
        return "lose";
    }
}


function game() {
    var rounds = 1;
    var playerSelection;
    var wins = 0;

    for (var i = 0; i < rounds; i++) {
        var playerSelection = prompt(`Round ${i + 1}: \nRock, paper, scissors?`);
        //console.log("Human selects", playerSelection);
    
        var computerSelection = computerPlay();
        console.log(`Human selects ${playerSelection}. Computer selects ${computerSelection}`)

        var result = playRound(playerSelection, computerSelection)
            if (result == "win") {
                wins++;
                console.log("Win")
            }
            else if (result == "lose") {
                console.log("Lose")
            }
            else {
                wins += 0.5;
                console.log("Tie")
            }

        console.log(`Current score\nHuman: ${wins}\nComputer: ${(i + 1) - wins}`)
            
        }

    //console.log(playRound(playerSelection, computerSelection));
    
    if (wins == 1) {
        console.log(`Human loses at 1 game to 5!`)
    }
    else if (wins > 2.5) {
        console.log(`Human wins at ${wins} games to ${rounds - wins}`)
    }
    else if (wins == 2.5) {
        console.log(`Draw with 2.5 wins.`)
    }
    else {
        console.log(`Human loses at ${wins} games to ${rounds - wins}`)
    }

}

//game()