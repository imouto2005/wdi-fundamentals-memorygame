var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}

var createCards = function() {
	var board = document.getElementById('game-board');
	for(var i=0;i<4;i++) {
		var div = document.createElement('div');
		div.className = "card";
		board.appendChild(div);
	}
}

createCards();