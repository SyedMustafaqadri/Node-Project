import inquirer from "inquirer";
let userName = "Mustafa";
let pinCode = 1234;
let Balance = 1000000;
async function ATM() {
    let verifyUser = await inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "What is your User name?",
        },
        {
            type: "password",
            name: "pinCode",
            message: "What is your Pin Code?",
        },
    ]);
    if (verifyUser.userName == userName && verifyUser.pinCode == pinCode) {
        let withdraw = await inquirer.prompt([
            {
                type: "number",
                name: "withdraw",
                message: "How much money do you want to withdraw?",
            },
        ]);
        if (withdraw.withdraw <= Balance) {
            console.log("Here Is Your Money");
            Balance = Balance - withdraw.withdraw;
            console.log("Your Current Balance Is " + Balance);
        }
        else {
            console.log("Insufficient Balance");
            console.log("Your Current Balance Is " + Balance);
        }
        return;
    }
    else {
        console.log("Invalid User Name Or Pin Code");
    }
}
ATM();
