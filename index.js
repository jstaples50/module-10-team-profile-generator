const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');

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

    inquirer.prompt(managerQuestions).then((answers) => {
        const { managerName, managerId, managerEmail, officeNumber } = answers;
        const manager = new Manager(managerName, managerId, managerEmail, officeNumber);

        team.push(manager);
        console.log(answers);
    })
}

addManager();