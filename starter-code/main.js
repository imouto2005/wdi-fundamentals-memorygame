var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		document.getElementById('result').innerHTML = "You found a match!";
	} else {
		document.getElementById('result').innerHTML = "NOPE sorry!";
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

var changePicture = function(element) {
	var card = element.getAttribute('data-card')
	console.log("changed pic")
	if (card === "king") {
		element.innerHTML = '<img src="https://s-media-cache-ak0.pinimg.com/564x/5a/0d/25/5a0d25ee83f6f3c9abf93bc0c9326df8.jpg" />';
	} else {
		element.innerHTML = '<img src="http://www.openlettersmonthly.com/issue/wp-content/uploads/2011/12/queen-cat-by-christina-hess.jpg" />';
	}
}

var resetGame = function() {
	cardElements.forEach(function(cardElement){
		cardElement.innerHTML = "";
	})
	cardsInPlay = [];
	document.getElementById('result').innerHTML = "";
}

var isTwoCards = function() {

	// if before pushing, 2 cards have already been selected so the game is over
	if (cardsInPlay.length === 2) {
		resetGame();
		return
	}

	cardsInPlay.push(this.getAttribute('data-card'));
	changePicture(this);

	// if after pushing, there are 2 cards, compare them
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
	}
}

var createBoard = function(cardElements) {
	for (var j=0; j<cards.length; j++) {
		var cardElement = cardElements[j];
		cardElement.setAttribute('data-card',cards[j]);
		cardElement.addEventListener('click', isTwoCards);
	}
}
createBoard(cardElements);
