
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl  =document.getElementById('card-el');

let player = {
    name :"John",
    chips : 150
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13)+1;
    if(randomNumber === 1){
        return 11;
    }else if(randomNumber >= 11){
        return 10
    }else{
        return randomNumber;
    }
    
}

const startGame = () =>{
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    isAlive =true;

    renderGame();
}
const renderGame = () =>{
    cardEl.textContent = "Cards: "
    for(let i = 0; i< cards.length; i++){
        cardEl.textContent += `${cards[i]} ` 
    }
    sumEl.textContent = "Sum: " + sum;
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


const newCard = () =>{

    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
   
}