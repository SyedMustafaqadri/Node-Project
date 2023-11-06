import inquirer from "inquirer";
// Define a dictionary of currency rates (hard-coded for demonstration)
const exchangeRates = {
    "US Dollar": 1.0,
    "Pak Rupees": 278.65,
    "Ind Rupees": 83.12,
    "Saudi Riyal": 3.75,
    "Dirham of UAE": 3.67,
    "Euro of UK": 0.94,
    "Chinese Yuan": 7.31,
    "Australian Dollar": 1.58,
    "Japanese Yen": 149.86,
    "Pound Sterling": 0.82,
};
// Function to prompt the user for currency conversion
function promptCurrencyConversion() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "fromCurrency",
            message: "Select the currency you want to convert from:",
            choices: Object.keys(exchangeRates),
        },
        {
            type: "list",
            name: "toCurrency",
            message: "Select the currency you want to convert to:",
            choices: Object.keys(exchangeRates),
        },
        {
            type: "number",
            name: "amount",
            message: "Enter the amount you want to convert:",
            validate: (input) => {
                return input > 0 || "Amount must be a positive number";
            },
        },
    ])
        .then((answers) => {
        const fromCurrency = answers.fromCurrency;
        const toCurrency = answers.toCurrency;
        const amount = answers.amount;
        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
        const convertedAmount = (amount / fromRate) * toRate;
        console.log(`${amount} ${fromCurrency} is approximately equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
        // Ask if the user wants to perform another conversion
        confirmAnotherConversion();
    });
}
// Function to confirm if the user wants to perform another conversion
function confirmAnotherConversion() {
    inquirer
        .prompt([
        {
            type: "confirm",
            name: "anotherConversion",
            message: "Do you want to perform another conversion? (y/n)",
        },
    ])
        .then((answer) => {
        if (answer.anotherConversion) {
            // If the user wants another conversion, prompt again
            promptCurrencyConversion();
        }
        else {
            console.log("Goodbye!");
        }
    });
}
// Start the Currency Converter App
promptCurrencyConversion();
