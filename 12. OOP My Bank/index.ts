import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";

// customer class
class Customer {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    mobNumber: number;
    accNumber: number;
    constructor(
        fName: string,
        lName: string,
        age: number,
        gender: string,
        mob: number,
        acc: number
    ) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}

// bank account interface
interface BankAccount {
    accNumber: number;
    balance: number;
}

// bank class
class Bank {
    customer: Customer[] = [];
    account: BankAccount[] = [];
    addCustomer(cus: Customer) {
        this.customer.push(cus);
    }
    addAccount(acc: BankAccount) {
        this.account.push(acc);
    }
}

let myBank = new Bank();

// Customer Create

function generateRandomPhoneNumber(): number {
    const min = 3000000000; 
    const max = 3999999999; 
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return Number(`3${randomNum.toString().substring(1)}`);
}



for (let i: number = 1; i <= 3; i++) {
    let fName = faker.person.firstName();
    let lName = faker.person.lastName();
    let age = faker.number.int({ min: 18, max: 40 });
    let gender = faker.person.sexType();
    let num = generateRandomPhoneNumber();
    const cus = new Customer(fName, lName, age, gender, num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccount({ accNumber: cus.accNumber, balance: 1000 * i });
}
console.log()
// Bank Functionality
let res = await inquirer.prompt({
    name: "acc",
    type: "input",
    message: "Enter Your account number:",
});
let account = myBank.account.find((acc) => acc.accNumber == res.acc);
// for balance
let balance = account?.balance;
// for customer name
let name = myBank.customer.find(
    (cus) => cus.accNumber == account?.accNumber
);
if (!account){
    console.log(chalk.red.bold.italic("Account not found!"));
    process.exit();
}

async function bankService(bank: Bank) {
    let service = await inquirer.prompt({
        name: "service",
        type: "list",
        message: "What service do you want?",
        choices: ["Deposit", "Withdraw", "Balance", "Exit"],
    });
    if (service.service == "Deposit") {
        if (account) {
            let amount = await inquirer.prompt({
                name: "amount",
                type: "number",
                message: "Enter the amount you want to deposit:",
            });
            if (amount.amount <= 0) {
                console.log(chalk.red.bold.italic("Invalid deposit amount. Please enter a positive amount."));
            } else {
                account.balance += amount.amount;
                console.log(`Deposit successful. Your new balance is ${chalk.greenBright.bold("$" + account.balance)}`);
            }
        }
    } else if (service.service == "Withdraw") {
        if (account) {
            let amount = await inquirer.prompt({
                name: "amount",
                type: "number",
                message: "Enter the amount you want to withdraw:",
            });
    
            if (amount.amount <= 0) {
                console.log(chalk.red.bold.italic("Invalid withdrawal amount. Please enter a positive amount."));
            } else if (amount.amount > account.balance) { 
                console.log(chalk.red.bold.italic("Insufficient Balance!"));
            } else {
                account.balance -= amount.amount;
                console.log(`Withdrawal successful. Your new balance is ${chalk.greenBright.bold("$" + account.balance)}`);
            }
        }
    } else if (service.service == "Balance") {
        console.log(
            `Dear ${chalk.blueBright.bold(name?.firstName, name?.lastName)}, your balance is ${chalk.greenBright.bold("$" + account?.balance)}`
        );
        // Do you want to continue?
        const continuePrompt = await inquirer.prompt({
            name: "continue",
            type: "confirm",
            message: "Do you want to continue?",
        });
        if (continuePrompt.continue) {
            bankService(bank);
        } else {
            console.log(chalk.blueBright.bold("Thank you for banking with us!"));
        }
    } else if (service.service == "Exit") {
        console.log(chalk.blueBright.bold("Thank you for banking with us!"));
    }
}

bankService(myBank);