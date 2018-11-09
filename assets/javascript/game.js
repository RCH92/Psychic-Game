var bank = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"
];
var guessed = [];
var wins = 0;
var losses = 0;
var attemptsLeft = 7;
var currentGuess = "";

function reset() {
    random = bank[(Math.floor(Math.random() * bank.length))];
    attemptsLeft = 7;
    guessed = [];
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + attemptsLeft;
    document.getElementById("guessedSoFar").innerHTML = "Guessed so far: " + guessed;

    game();

}
function game() {
    
    attemptsLeft = 7;
    random = bank[(Math.floor(Math.random() * bank.length))];
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + attemptsLeft;

    document.onkeyup = function (event) {

        currentGuess = event.key;

        if (bank.indexOf(currentGuess) > -1) {


            if (guessed.indexOf(currentGuess) == -1) {

                if (random == currentGuess) {

                    wins++;
                    alert("you win");
                    console.log(wins);
                    document.getElementById("wins").innerHTML = "Wins: " + wins;
                    reset();
                }

                else {

                    guessed.push(currentGuess);
                    document.getElementById("guessedSoFar").innerHTML = "Guessed so far: " + guessed;
                    attemptsLeft--;
                    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + attemptsLeft;


                    if (attemptsLeft == 0) {

                        console.log(attemptsLeft);
                        losses++;
                        document.getElementById("losses").innerHTML = "Losses: " + losses;
                        alert("you lose");
                        reset();
                    }
                }
            }
            else {

                alert("You already Guessed that");

            }
        }
        else {

            alert("Invalid Input");

        }
    }

};

game();



