import inquirer from "inquirer";
const todos = [];
let nextId = 1;
// Function to display the TODO list
function displayTodoList() {
    console.log("TODO List:");
    if (todos.length === 0) {
        console.log("No TODO items.");
    }
    else {
        for (const todo of todos) {
            const status = todo.completed ? "[x]" : "[ ]";
            console.log(`${status} ${todo.id}: ${todo.title}`);
        }
    }
}
// Function to add a new TODO item
function addTodo() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "title",
            message: "Title: ",
        },
        {
            type: "input",
            name: "description",
            message: "Description: ",
        },
    ])
        .then((answers) => {
        const newTodo = {
            id: nextId++,
            title: answers.title,
            description: answers.description,
            completed: false,
        };
        todos.push(newTodo);
        console.log("TODO item added successfully!");
        displayTodoList();
        promptUser();
    });
}
// Function to mark a TODO item as completed
function completeTodo() {
    displayTodoList();
    inquirer
        .prompt([
        {
            type: "number",
            name: "id",
            message: "Enter the ID of the completed item: ",
        },
    ])
        .then((answer) => {
        const id = parseInt(answer.id);
        const todo = todos.find((item) => item.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`TODO item ${id} marked as completed.`);
        }
        else {
            console.log(`TODO item with ID ${id} not found.`);
        }
        displayTodoList();
        promptUser();
    });
}
// Function to remove a TODO item
function removeTodo() {
    displayTodoList();
    inquirer
        .prompt([
        {
            type: "number",
            name: "id",
            message: "Enter the ID of the item to remove: ",
        },
    ])
        .then((answer) => {
        const id = parseInt(answer.id);
        const index = todos.findIndex((item) => item.id === id);
        if (index !== -1) {
            todos.splice(index, 1);
            console.log(`TODO item ${id} removed.`);
        }
        else {
            console.log(`TODO item with ID ${id} not found.`);
        }
        displayTodoList();
        promptUser();
    });
}
// Function to prompt the user for actions
function promptUser() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: ["Add a new TODO item", "Mark a TODO item as completed", "Remove a TODO item", "Exit"],
        },
    ])
        .then((answer) => {
        switch (answer.action) {
            case "Add a new TODO item":
                addTodo();
                break;
            case "Mark a TODO item as completed":
                completeTodo();
                break;
            case "Remove a TODO item":
                removeTodo();
                break;
            case "Exit":
                console.log("Goodbye!");
                break;
        }
    });
}
// Start the TODO app by prompting the user
promptUser();
