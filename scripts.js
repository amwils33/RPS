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
