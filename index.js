const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const team = [];


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

    return inquirer.prompt(managerQuestions).then((answers) => {
        const { managerName, managerId, managerEmail, officeNumber } = answers;
        const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
        team.push(manager);
    })
}

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

    inquirer.prompt(employeeQuestions)
        .then((employeeAnswers) => {
            const { employeeName, employeeId, employeeEmail } = employeeAnswers;

            const employeeChoice = inquirer.prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'What role is this employee?',
                    choices: ['Engineer', 'Intern']
                }
            ])
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
            
            if (createEmployee) {
                addEmployee();
            } else {
                console.log(team)
                return;
            }
    })
}

addManager()
    .then(addEmployee)
