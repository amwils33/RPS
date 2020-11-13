let playerScore = 0;
let cpuScore = 0;


// CPU randomly picks Rock, Paper, or Scissors
function computerPlay(cpuPick){
    cpuPick = Math.floor(Math.random() * 3);

    if (cpuPick === 0){
        return 'rock'; 
    } else if (cpuPick === 1){
        return 'paper';
    }else{
        return 'scissors';
    }
   }

    //Defining function to play a single round and adding potential selections and outcomes
   function playRound(playerSelection, computerSelection){
     
        playerSelection = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
        computerSelection = computerPlay();
   
      
        if (playerSelection === 'rock' && computerSelection ==='paper'){
        console.log('You lose. Paper beats Rock');
        cpuScore++;
        }else if (playerSelection === 'rock' && computerSelection ==='scissors'){
        console.log('You win. Rock beats Scissors');
        playerScore++;
        }else if (playerSelection === 'rock' && computerSelection === 'rock'){
        console.log('Tie. You both picked Rock.');
        }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You win. Paper beats Rock.');
        playerScore++;
        }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        console.log('Tie. You both picked Paper.');
        }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose. Scissors beats Paper.');
        cpuScore++;
        }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose. Rock beats Scissors.');
        cpuScore++;
        }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You win. Scissors beats Paper.');
        playerScore++;
        }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        console.log('Tie. You both picked Scissors.');
        }else{
        console.log('Something went wrong. Please report the problem and refresh');
        }
    }

   
    
    
    //While player score and cpu score are both less than 5, playround runs until one of them reaches 5. Then a winner is declared. 
    function game(){
        while (playerScore < 5 && cpuScore < 5){
           playRound();
           }
       if(playerScore ==5){
       console.log("You Win! Refresh to Play Again. Player Score: " + playerScore + "   CPU Score: " +  cpuScore);
       }else {
        console.log("Computer Wins! Refresh to Play Again. Player Score: " + playerScore + "   CPU Score: " +  cpuScore);
       }
    }


  