var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}

var cardElements = [];

var createCards = function() {
	var board = document.getElementById('game-board');
	for(var i=0; i<4; i++) {
		var div = document.createElement('div');
		div.className = "card";
		board.appendChild(div);
		cardElements.push(div);
	}
}
createCards();

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var changePicture = function(element) {}

var createBoard = function(cardElements) {
	for (var j=0; j<cards.length; j++) {
		var cardElement = cardElements[j];
		cardElement.setAttribute('data-card',cards[j]);
		cardElement.addEventListener('click', isTwoCards);
	}
}
createBoard(cardElements);