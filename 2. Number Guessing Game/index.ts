import inquirer from "inquirer";
import randomInt from "random-int";

const randomNumber = randomInt(1, 10);
let remainingChances = 5;

const prompt = {
    type: "input",
    name: "guess",
    message: "Guess a number between 1 and 10:",
};

let guessedCorrectly = false;

function promptGuess() {
    inquirer.prompt([prompt]).then((answers) => {
        const guess = Number(answers.guess);

        if (guess === randomNumber) {
            console.log("Congratulations! You guessed correctly!");
            guessedCorrectly = true;
            return;
        } else if (guess < randomNumber) {
            console.log("Your guess is too low.");
        } else {
            console.log("Your guess is too high.");
        }

        remainingChances--;

        if (remainingChances === 0) {
            console.log("You have run out of chances.");
        } else {
            promptGuess();
        }
    });
}

promptGuess();