var Letter = require('./letters.js');

function Word(word) {
	this.letters = word.split("").map(function(eachLetter) {
	return new Letter(eachLetter);
});
	this.displayword = function() {
		var wordTodisplay = "";
		for(var i = 0; i < this.letters.length; i++) {
			console.log(this.letters[i].visible);
			if(this.letters[i].visible === true) {
				wordTodisplay += this.letters[i].char
			}
			else {
				wordTodisplay += " _ ";
			}
		}
		console.log(wordTodisplay);

	}
	this.correctLetter = function(guess) {
		var accurateGuess = false;
		for(var i = 0; i < this.letters.length; i++) {
			if(this.letters[i].char === guess) {
				this.letters[i].changeVisibility()
				console.log(this.letters[i]);
				accurateGuess = true;
			}
		}
		return accurateGuess;
	}
	this.allLettersGuessed = function() {
		var lettersRemaining = false;
		for(var i =0; i < this.letters.length; i++) {
			if(this.letters[i].visible === false) {
				lettersRemaining = true;
				break;
			}
		}
		return lettersRemaining;
	}
}


// var test = new Word("because");
// console.log(test);

module.exports = Word;