import inquirer from "inquirer";
const operations = ["+", "-", "*", "/"];
async function calculate() {
    const { n1, n2, operation } = await inquirer.prompt([
        {
            name: "n1",
            message: "Tell me the first number:",
            type: "number",
        },
        {
            name: "operation",
            message: "Select the operation:",
            type: "list",
            choices: operations,
            validate: (value) => {
                if (!operations.includes(value)) {
                    return "Invalid operation. Please select a valid operation from the list.";
                }
                return true;
            },
        },
        {
            name: "n2",
            message: "Tell me the second number:",
            type: "number",
        },
    ]);
    let result;
    switch (operation) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
    }
    console.log("Result:", result);
}
calculate();
//# sourceMappingURL=index.js.map