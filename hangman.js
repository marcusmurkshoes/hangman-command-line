var Word = require('./words.js');
var inquirer = require('inquirer');




function Hangman() {
	this.wins = 0;
	this.losses = 0;
	this.startgame = function() {
		this.guesses = 10;
		this.nextword ()

	}
	this.nextword = function() {
			//This is where  you select a random word where the user needs to guess
			this.currentword = new Word("random");
			//Display words as underscores
			this.currentword.displayword()
				// Ask user to guess
				this.handleguess()

			}
			this.handleguess = function() {
				inquirer.prompt([
				{
					message: "guess the letter",
					type: "input",
					name: "guess"

				}


				]).then(answers => {
					if(this.currentword.correctLetter(answers.guess)) {
						console.log("Youve guessed the letter correctly!");
						this.currentword.displayword()
						this.didWin()
						//Function that determines whether or not they won
						//Reset function if they win
						//


					}
					
					else {
						console.log("That was the wrong letter....");
						this.guesses--;
						console.log(this.guesses);
						//Reset if Losing

					}
					// console.log(nextword.currentword);

					console.log(answers.guess);
    // Use user feedback for... whatever!!

});

			}
			this.didWin = function() {
				if (!this.currentword.allLettersGuessed()) {
					this.wins++;
					this.startgame();
				}
				else {
					this.handleguess();
				}
			}
		}

		var test = new Hangman();
		test.startgame();
// console.log(test);