// CPU randomly picks Rock, Paper, or Scissors
function computerPlay(cpuPick){
    let x = Math.floor(Math.random() * 3);

    if (x === 0){
        return 'rock'; 
    } else if (x ===1){
        return 'paper';
    }else{
        return 'scissors';
    }
   }

   //Defining potential Selections and Outcomes
   function playRound(playerSelection, computerSelection){

      
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