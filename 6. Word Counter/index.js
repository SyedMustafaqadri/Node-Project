import inquirer from "inquirer";
// Function to count words in a given text
function countWords(text) {
    const words = text.split(/\s+/);
    return words.length;
}
// Function to prompt the user for text input and display word count
function promptForTextAndCountWords() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "text",
            message: "Enter the text to count words:",
        },
    ])
        .then((answers) => {
        const text = answers.text;
        const wordCount = countWords(text);
        console.log(`Word count: ${wordCount}`);
        // Ask if the user wants to count words in another text
        promptForAnotherText();
    });
}
// Function to ask if the user wants to count words in another text
function promptForAnotherText() {
    inquirer
        .prompt([
        {
            type: "confirm",
            name: "anotherText",
            message: "Do you want to count words in another text? (y/n)",
        },
    ])
        .then((answer) => {
        if (answer.anotherText) {
            // If the user wants to count words in another text, prompt again
            promptForTextAndCountWords();
        }
        else {
            console.log("Goodbye!");
        }
    });
}
// Start the Word Counter App
promptForTextAndCountWords();
