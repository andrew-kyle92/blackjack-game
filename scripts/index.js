/* Intro Variables */

var welcome = document.getElementById("welcome");
var playToBegin = document.getElementById("click");
var playBTN = document.getElementById("play-btn");

/* Main Game Variables */

var player1 = document.getElementById("player1");
var dealer = document.getElementById("dealer");
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Ace", "Jack", "Queen", "King"];
var image = "./images";
var deck = [];
var card = "";
var suit = "";
var number = "";
var img = "";
var playerScore = 0;
var dealerScore = 0;
var gameStarted = false
var hitMeBTN = document.querySelector(".hit-me");
var stayBTN = document.querySelector(".stay-btn");

/* Game functions */

function deckOfCards() {

        for(var i = 0; i <= cardValues.length - 1; i++) {

            deck.push(cardValues[i] + "of" + suits[0]);
            deck.push(cardValues[i] + "of" + suits[1]);
            deck.push(cardValues[i] + "of" + suits[2]);
            deck.push(cardValues[i] + "of" + suits[3]);

        }
}

function randomPlayerCard() {

    card = deck[Math.floor(Math.random() * deck.length)];

    if(card.includes("2")){
        playerScore = playerScore + 2;
        deck.pop(card);
    }
    else if(card.includes("3")){
        playerScore = playerScore + 3;
        deck.pop(card);
    }
    else if(card.includes("4")){
        playerScore = playerScore + 4;
        deck.pop(card);
    }
    else if(card.includes("5")){
        playerScore = playerScore + 5;
        deck.pop(card);
    }
    else if(card.includes("6")){
        playerScore = playerScore + 6;
        deck.pop(card);
    }
    else if(card.includes("7")){
        playerScore = playerScore + 7;
        deck.pop(card);
    }
    else if(card.includes("8")){
        playerScore = playerScore + 8;
        deck.pop(card);
    }
    else if(card.includes("9")){
        playerScore = playerScore + 9;
        deck.pop(card);
    }
    else if(card.includes("10")){
        playerScore = playerScore + 10;
        deck.pop(card);
    }
    else if(card.includes("Ace")){
        if(playerScore > 11){
            playerScore = playerScore + 1;
        }
        else{
            playerScore = playerScore + 11;
        }
        deck.pop(card);
    }
    else if(card.includes("Jack")){
        playerScore = playerScore + 10;
        deck.pop(card);
    }
    else if(card.includes("Queen")){
        playerScore = playerScore + 10;
        deck.pop(card);
    }
    else if(card.includes("King")){
        playerScore = playerScore + 10;
        deck.pop(card);
    }

    cardSuit();

    cardImg();

    document.querySelector(".player-score").innerHTML = playerScore;

    getScore();

    return img;

}

function randomDealerCard() {

    card = deck[Math.floor(Math.random() * deck.length)];

    if(card.includes("2")){
        dealerScore = dealerScore + 2;
        deck.pop(card);
    }
    else if(card.includes("3")){
        dealerScore = dealerScore + 3;
        deck.pop(card);
    }
    else if(card.includes("4")){
        dealerScore = dealerScore + 4;
        deck.pop(card);
    }
    else if(card.includes("5")){
        dealerScore = dealerScore + 5;
        deck.pop(card);
    }
    else if(card.includes("6")){
        dealerScore = dealerScore + 6;
        deck.pop(card);
    }
    else if(card.includes("7")){
        dealerScore = dealerScore + 7;
        deck.pop(card);
    }
    else if(card.includes("8")){
        dealerScore = dealerScore + 8;
        deck.pop(card);
    }
    else if(card.includes("9")){
        dealerScore = dealerScore + 9;
        deck.pop(card);
    }
    else if(card.includes("10")){
        dealerScore = dealerScore + 10;
        deck.pop(card);
    }
    else if(card.includes("Ace")){
        if(dealerScore > 11){
            dealerScore = dealerScore + 1;
        }
        else{
            dealerScore = dealerScore + 11;
        }
        deck.pop(card);
    }
    else if(card.includes("Jack")){
        dealerScore = dealerScore + 10;
        deck.pop(card);
    }
    else if(card.includes("Queen")){
        dealerScore = dealerScore + 10;
        deck.pop(card);
    }
    else if(card.includes("King")){
        dealerScore = dealerScore + 10;
        deck.pop(card);
    }

    cardSuit();

    cardImg();

    document.querySelector(".dealer-score").innerHTML = dealerScore;

    return img;
}

function cardSuit() {

    var clubs = card.includes("Clubs");
    var diamonds = card.includes("Diamonds");
    var hearts = card.includes("Hearts");
    var spades = card.includes("Spades");

    if (clubs) {
        suit = card.slice(-5);
    }
    else if (diamonds) {
        suit = card.slice(-8);
    }
    else if (hearts) {
        suit = card.slice(-6);
    }
    else if (spades) {
        suit = card.slice(-6);
    }
}

function cardImg() {

    img = image + "/" + suit + "/" + card + ".png";

    return img;
}

function getPlayerCards() {

    document.querySelector(".card1").setAttribute("src", randomPlayerCard());
    document.querySelector(".card2").setAttribute("src", randomPlayerCard());
}

function getDealerCards() {

    document.querySelector(".card3").setAttribute("src", randomDealerCard());
    document.querySelector(".card4").setAttribute("src", randomDealerCard());
}

function getScore() {

    if(playerScore < 21){
        if(dealerScore === 21){
            gameStarted = false;
    
            document.getElementById("main-h1").innerHTML = "Dealer Wins!";
            document.getElementsByClassName(".game-btns").visibility = "collapse";
            setTimeout(function(){
                alert("You lose!\nRefresh to play again!")
            },800)
        }
        else if(dealerScore > 21){
            gameStarted = false;
    
            document.getElementById("main-h1").innerHTML = "You Win!";
            document.getElementsByClassName(".game-btns").visibility = "collapse";
            setTimeout(function(){
                alert("Dealer bust!\nYou win!\nRefresh to play again!")
            },800)
        }
        else{
            return;
        }
    }
    else if(playerScore === 21){
        gameStarted = false;

        document.getElementById("main-h1").innerHTML = "You Win!";
        document.getElementsByClassName(".game-btns").visibility = "collapse";
        setTimeout(function(){
            alert("You got 21, you win!\nRefresh to play again!")
        },800)
    }
    else if(playerScore > 21){
        gameStarted = false;

        document.getElementById("main-h1").innerHTML = "Dealer Wins!";
        document.getElementsByClassName(".game-btns").visibility = "collapse";
        setTimeout(function(){
            alert("Bust, you lose!\nRefresh to play again!")
        },800)
    }

}

function newDealerCard(){
    var addDealerCard = document.createElement("img");
    addDealerCard.setAttribute("id", "card");
    addDealerCard.setAttribute("src", randomDealerCard());
    document.querySelector(".dealer-cards").appendChild(addDealerCard); 
}

function startGame() {

    
    deck = [];
    playerScore = 0;
    dealerScore = 0;

    deckOfCards();

    getPlayerCards();
    getDealerCards();

    getScore();
};

/* Game Start */

playBTN.addEventListener("click", function(){
    gameStarted = true;

    document.getElementById("intro").classList.add("intro-hidden");
    document.getElementById("main-game").style.visibility = "visible";

    startGame();
});


hitMeBTN.addEventListener("click", function(){
    var addPlayerCard = document.createElement("img");
    addPlayerCard.setAttribute("id", "card");
    addPlayerCard.setAttribute("src", randomPlayerCard());
    document.querySelector(".player-cards").appendChild(addPlayerCard);
})

stayBTN.addEventListener("click", function(){
    gameStarted = false;

    document.getElementById("dealer-comment").classList.add("dealer-note");
    document.getElementById("dealer-comment").innerHTML = "Getting Dealer cards...";

    do{
        setTimeout(newDealerCard(),1000)
        getScore()
    }
    while(dealerScore < 21);
    
})