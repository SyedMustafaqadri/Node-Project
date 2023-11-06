import chalk from 'chalk';
import inquirer from 'inquirer';
import dateFns from 'date-fns'

async function startCountdown() {
    const targetDate = new Date();

    const questions = [
        {
            type: 'input',
            name: 'minutes',
            message: 'Enter the number of minutes for the countdown:',
        },
    ];

    const answers = await inquirer.prompt(questions);
    const minutes = parseInt(answers.minutes, 10);

    if (isNaN(minutes)) {
        console.log(chalk.red('Invalid input. Please enter a valid number of minutes.'));
        return;
    }

    targetDate.setMinutes(targetDate.getMinutes() + minutes);

    const interval = setInterval(() => {
        const timeRemaining = dateFns.differenceInMilliseconds(targetDate, new Date());

        if (timeRemaining <= 0) {
            clearInterval(interval);
            console.log(chalk.green('Countdown finished!'));
        } else {
            const formattedTime = dateFns.format(new Date(timeRemaining), 'mm:ss');
            console.log(chalk.blue(`Time remaining: ${formattedTime}`));
        }
    }, 1000);
}

startCountdown();
