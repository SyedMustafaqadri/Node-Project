import inquirer from "inquirer";
// Define a Student class
class Student {
    constructor(name) {
        this.courses = [];
        this.balance = 0;
        this.name = name;
        this.studentID = (++Student.studentCount).toString().padStart(5, "0");
    }
    enroll(course) {
        this.courses.push(course);
    }
    payTuition(amount) {
        this.balance -= amount;
    }
    showStatus() {
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
        console.log(`Balance: $${this.balance}`);
    }
}
Student.studentCount = 0;
// An array to store student records
const students = [];
// Function to prompt the user for student management options
function promptForStudentManagement() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "option",
            message: "Select an option:",
            choices: [
                "Add a new student",
                "Enroll a student in a course",
                "View student balance",
                "Pay tuition fees",
                "Show student details",
                "Exit",
            ],
        },
    ])
        .then((answers) => {
        switch (answers.option) {
            case "Add a new student":
                promptForNewStudent();
                break;
            case "Enroll a student in a course":
                promptForEnrollingStudent();
                break;
            case "View student balance":
                promptForViewingBalance();
                break;
            case "Pay tuition fees":
                promptForPayingTuition();
                break;
            case "Show student details":
                promptForShowingDetails();
                break;
            case "Exit":
                console.log("Goodbye!");
                break;
        }
    });
}
// Function to prompt for adding a new student
function promptForNewStudent() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the student's name:",
        },
    ])
        .then((answers) => {
        const newStudent = new Student(answers.name);
        students.push(newStudent);
        console.log(`New student added with ID: ${newStudent.studentID}`);
        promptForStudentManagement();
    });
}
// Function to prompt for enrolling a student in a course
function promptForEnrollingStudent() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "studentID",
            message: "Enter the student's ID:",
        },
        {
            type: "input",
            name: "course",
            message: "Enter the course to enroll:",
        },
    ])
        .then((answers) => {
        const student = students.find((s) => s.studentID === answers.studentID);
        if (student) {
            student.enroll(answers.course);
            console.log(`${student.name} enrolled in ${answers.course}`);
        }
        else {
            console.log("Student not found.");
        }
        promptForStudentManagement();
    });
}
// Function to prompt for viewing a student's balance
function promptForViewingBalance() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "studentID",
            message: "Enter the student's ID:",
        },
    ])
        .then((answers) => {
        const student = students.find((s) => s.studentID === answers.studentID);
        if (student) {
            console.log(`${student.name}'s balance: $${student.balance}`);
        }
        else {
            console.log("Student not found.");
        }
        promptForStudentManagement();
    });
}
// Function to prompt for paying tuition fees
function promptForPayingTuition() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "studentID",
            message: "Enter the student's ID:",
        },
        {
            type: "number",
            name: "amount",
            message: "Enter the amount to pay:",
        },
    ])
        .then((answers) => {
        const student = students.find((s) => s.studentID === answers.studentID);
        if (student) {
            student.payTuition(answers.amount);
            console.log(`$${answers.amount} paid by ${student.name}`);
        }
        else {
            console.log("Student not found.");
        }
        promptForStudentManagement();
    });
}
// Function to prompt for showing a student's details
function promptForShowingDetails() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "studentID",
            message: "Enter the student's ID:",
        },
    ])
        .then((answers) => {
        const student = students.find((s) => s.studentID === answers.studentID);
        if (student) {
            student.showStatus();
        }
        else {
            console.log("Student not found.");
        }
        promptForStudentManagement();
    });
}
// Start the Student Management System App
promptForStudentManagement();
