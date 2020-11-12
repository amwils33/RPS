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
        return 'You lose. Paper beats Rock'
        }else if (playerSelection === 'rock' && computerSelection ==='scissors'){
        return 'You win. Rock beats scissors';
        }else if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 'Tie. You both picked Rock.'
        }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win. Paper beats Rock.';
        }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'Tie. You both picked Paper.';
        }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose. Scissors beats Paper.';
        }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You lose. Rock beats Scissors.';
        }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win. Scissors beats Paper.';
        }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'Tie. You both picked Scissors.';
        }else{
        return 'Something went wrong. Please report the problem and refresh';
        }
    }

   
    
    
    //need to add functionality to keep score and declare a winner at the end.
    //See if return statements can be added between rounds. 
    function game(){
       
    }


  