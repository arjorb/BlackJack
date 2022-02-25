let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');

const startGame = () =>{
    sumEl.textContent += sum;
    if(sum <= 20){
        message = "Do you want to draw a new card? 😊";
        
    }
    else if(sum === 21){
        message = "Wohoo! You have got Blackjack! 🍾🍻"
        hasBlackJack = true;
    }else{
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    
   messageEl.textContent = message;
}

