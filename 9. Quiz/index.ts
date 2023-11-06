// Lets start creat a Quiz application
// API From Opentdb: https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
import chalk from "chalk";
import inquirer from "inquirer";

// first fetch data from API
const apiLink = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

let fetchData = async (data: string) => {
    let fetchQuiz: any = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
}

let apiData = await fetchData(apiLink);


let startQuiz = async () => {
    let score: number = 0;
    const shuffleArray = (array: any[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    let userName = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "What is your name?",
    })
    console.log(chalk.cyanBright(`Welcome to the Quiz App ${userName.name}!`));

    for (let i = 0; i < apiData.length; i++) {
        let answer = shuffleArray([...apiData[i].incorrect_answers, apiData[i].correct_answer]);

        let ans = await inquirer.prompt({
            type: "list",
            name: "answer",
            message: apiData[i].question,
            choices: answer.map((item: any) => item),    
        })

        if (ans.answer === apiData[i].correct_answer) {
            score++;
            console.log(chalk.green("Correct!"));
        } else {
            console.log(chalk.red(`Wrong! The correct answer is ${chalk.cyan(apiData[i].correct_answer)}.`));
            
        }
        console.log(`Your score is ${chalk.cyanBright(score)}`)
    }
}
startQuiz();
