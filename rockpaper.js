let gameLOG = JSON.parse(localStorage.getItem('gameLOG')) || { wins: 0, loses: 0, ties: 0 };

function ComputerMove(){
    let result ='';
    let move = Math.random();
    if(move <=1/3 && move >0  ){
        result = 'rock';
    }

    else if(move > 1/3 && move <=2/3){
        result = 'paper';       
    }

    else{
        result = 'scissors';        
    }
    return result;
}


function GameLogic(UserChoice){
    
    result = ComputerMove();
    let ans='';
    const resultOutput=document.querySelector('.js-result');
    resultOutput.classList.add('custom-style');
   

    if(UserChoice === 'rock'){
        
        if(result === 'rock'){
            
            ans='TIE';
            gameLOG.ties +=1;
        }
    
        else if(result === 'paper'){
            ans='LOOSE';
            gameLOG.loses +=1;
        }
    
        else{
            ans='WIN';
            gameLOG.wins +=1;
        }
        
        resultOutput.innerHTML = `You ${ans}. <br><br> You <img class="finalclass" src = "./images/rock_files/${UserChoice}.png"> - <img class="finalclass" src = "./images/rock_files/${result}.png"> Computer <br><br>wins : ${gameLOG.wins} loses : ${gameLOG.loses}  ties : ${gameLOG.ties}`;
        localStorage.setItem('gameLOG',JSON.stringify(gameLOG));
    }

    else if(UserChoice === 'paper'){

        if(result === 'scissors'){
            ans='LOOSE';
            gameLOG.loses +=1;
        }
    
        else if(result === 'rock'){
            ans='WIN';
            gameLOG.wins +=1;
        }
    
        else{
            ans='TIE';
            gameLOG.ties +=1;
        }
        resultOutput.innerHTML = `You ${ans}. <br><br> You <img class="finalclass" src = "./images/rock_files/${UserChoice}.png"> - <img class="finalclass" src = "./images/rock_files/${result}.png"> Computer <br><br>wins : ${gameLOG.wins} loses : ${gameLOG.loses}  ties : ${gameLOG.ties}`;
        localStorage.setItem('gameLOG',JSON.stringify(gameLOG));
    }


    else{
        
        if(result === 'rock'){
            ans='LOOSE';
            gameLOG.loses +=1;
        }

        else if(result === 'paper'){
            ans='WIN';
            gameLOG.wins +=1;
        }

        else{
            ans='TIE';
            gameLOG.ties +=1;
        }
        resultOutput.innerHTML = `You ${ans}. <br><br> You <img class="finalclass" src = "./images/rock_files/${UserChoice}.png"> - <img class="finalclass" src = "./images/rock_files/${result}.png"> Computer <br><br>wins : ${gameLOG.wins} loses : ${gameLOG.loses}  ties : ${gameLOG.ties}`;
        localStorage.setItem('gameLOG',JSON.stringify(gameLOG));
    }
}

function resetGame(){
    gameLOG.loses=0;
    gameLOG.ties=0;
    gameLOG.wins=0;
    const resultOutput=document.querySelector('.js-result');
    resultOutput.classList.add('custom-style');
    resultOutput.innerHTML = `wins : ${gameLOG.wins} loses : ${gameLOG.loses}  ties : ${gameLOG.ties}`;
};


let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let reset = document.querySelector(".js-reset");


rock.addEventListener('click', ()=>{
    GameLogic('rock');
});

paper.addEventListener('click', ()=>{
    GameLogic('paper');
});

scissors.addEventListener('click', ()=>{
    GameLogic('scissors');
});

reset.addEventListener('click', ()=>{
    resetGame();
});

