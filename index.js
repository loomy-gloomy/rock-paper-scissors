function getComputerChoice(){
    let random_numeber = Math.floor(Math.random() * 3);
    switch (random_numeber){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    let choice = (prompt("Enter your choice: Rock, Paper, Scissors")).toLowerCase();
    for (;;){
        if(choice == "rock" || choice == "paper" || choice == "scissors"){
            return choice;
        }else {
            alert('"' + choice + '"' + " is not a vaild option");
            choice = (prompt("Enter your choice: Rock, Paper, Scissors")).toLowerCase();
        }
    }
}


function displayResult(humanScore, computerScore, ties){
    console.log("***********************************************");
    console.log("Your Score: " + humanScore + "   =========   " + " Computer Score: " + computerScore + " Ties: " + ties);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++")
    if(humanScore == computerScore){
        console.log("It was a TIE :-|");
    }else if( humanScore > computerScore){
        console.log("HURRAY *\\0/*! you WON ^_^");
    }else{
        console.log("You Lost :'( try again")
    }
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    function playRound(computerChoice, humanChoice){
        if (computerChoice == humanChoice){
            ties++;
            console.log("It's a TIE!");
        }else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock"){
            humanScore++;
            console.log("Your choice: " + humanChoice + "   +++++++++   " +" Computer Choice: " + computerChoice + " YOU WON!")
        }else {
            computerScore++;
            console.log("Your choice: " + humanChoice + "   +++++++++   " + " Computer Choice: " + computerChoice + " COMPUTER WON!")
        }
    }

    for (let i =0; i <5; i++){
        console.log("Round: " + (i + 1));
        playRound(getComputerChoice(), getHumanChoice());
    }

    displayResult(humanScore, computerScore, ties);
}

playGame()