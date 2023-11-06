import inquirer from "inquirer";

class Student {
    name:string
    constructor(n:string) {
        this.name = n
    }
}

class Person {
    students:Student[]=[]
    addStudent(obj:Student) {
        this.students.push(obj)
    }
}

const persons = new Person()


const programStart =async (persons: Person) => {

    do{
        console.log("Welcome to Student")
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "From Whome do you want to talk?",
        choices: ["Student", "Teacher"],
    })

    if(ans.select === "Student") {
        const ans = await inquirer.prompt({
            type: "input",
            message: "From which student do you want to talk?",
            name: "student",
        })
        const student = persons.students.find(val => val.name == ans.student)
        if (!student) {
            const name = new Student(ans.student)
            persons.addStudent(name)
            console.log(`Hello i am ${name.name}`)
            console.log(persons.students)
        } else {
            console.log(`Hello i am ${student.name}......... `)
            console.log(persons.students)
        }
    }
    }while(true)
};

programStart(persons)