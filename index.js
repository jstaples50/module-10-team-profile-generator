// Importing in necessary files

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { fullHtml } = require('./dist/renderhtml');

// Array that will contain employee objects

const team = [];

// Function to add Manager in the CLI

function addManager() {
    const managerQuestions = [
        {
            type: 'input',
            name: 'managerName',
            message: "What's your manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What's their manager id?",
            filter(val) {
                return parseInt(val);
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What's their email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What's their office number?",
            filter(val) {
                return parseInt(val);
            }
        }
    ]


    // Returns a promise that will take in the user input values from prompts and create a manager object

    return inquirer.prompt(managerQuestions).then((answers) => {
        const { managerName, managerId, managerEmail, officeNumber } = answers;
        const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
        team.push(manager);
    })
}

// Function to create new employee object

function addEmployee() {
    console.log('---New Employee---');

    const employeeQuestions = [
        {
            type: 'input',
            name: 'employeeName',
            message: "What's your employee's name?",
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What's their employee id?",
            filter(val) {
                return parseInt(val);
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What's their email?",
        }
    ]

    return inquirer.prompt(employeeQuestions)
        .then((employeeAnswers) => {
            // Takes the values that are the same for both intern and engineer and store them into variables
            const { employeeName, employeeId, employeeEmail } = employeeAnswers; 

            // Prompt to specify role
            const employeeChoice = inquirer.prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'What role is this employee?',
                    choices: ['Engineer', 'Intern']
                }
            ])
            // Prompts asking user the specific details for chosen roles
            .then((choice) => {
                if (choice.employeeType === 'Engineer') {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'github',
                        message: 'What is their github?'
                    }])
                        .then((engineerAnswer) => {
                            const { github } = engineerAnswer;
                            const engineer = new Engineer(employeeName, employeeId, employeeEmail, github);
                            team.push(engineer);
                            // Function to ask user if they want to add an additional employee
                            addNewEmployee();
                        })
                } else {
                    inquirer.prompt([{
                        type: 'input',
                        name: 'school',
                        message: 'What is their school?'
                    }])
                        .then((internAnswer) => {
                            const { school } = internAnswer;
                            const intern = new Intern(employeeName, employeeId, employeeEmail, school);
                            team.push(intern);
                            // Function to ask user if they want to add an additional employee
                            addNewEmployee();
                        })
                }
            })
        })

}

function addNewEmployee() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'createEmployee',
        message: 'Do you want to add an employee?'
    }])
        .then((addNewEmployeeAnswer) => {
            const { createEmployee } = addNewEmployeeAnswer;
            
            // If answer is truthy, The addEmployee function will run again
            if (createEmployee) {
                addEmployee();
            
            // If answer is falsy, the program will write the index.html file
            } else {
                console.log(team)
                fs.writeFileSync(path.resolve(__dirname, 'index.html'), fullHtml(team))
                return;
            }
    })
}

// Execution of code

addManager()
    .then(addEmployee)


