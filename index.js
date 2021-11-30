const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


const employees = []; 

function managerPrompt() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Select Member role.',
            choices: ['Manager', 'Engineer', 'Intern']
        }, {
            type: 'input',
            message: 'Who is your manager?',
            name: 'name'
        }, {
            type: 'input',
            message: 'What is your Manager id?',
            name: 'id'
        }, {
            type: 'input',
            message: 'What is your manager email?',
            name: 'email'
        }, {
            type: 'input',
            message: 'What is your manager phone number?',
            name: 'officeNumber'
        }, 
    ]).then(function (data) {
        const name = data.name
        const id = 1
        const email = data.email
        const officeNumber = data.officeNumber
        const teams = new Manager(name, id, email, officeNumber)
        employees.push(teams)
        engineerPrompt();
    });
}

function engineerPrompt() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your engineer's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the engineer?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter engineer's ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the github account for the engineer'"
        },
        {
            type: 'confirm',
            name: 'AddNewMember',
            message: 'Would you like to add more team members?',
        }
        
    ]).then(function (data) {
        const name = data.name
        const id = 2
        const email = data.email
        const github = data.github
        const teams = new Engineer(name, id, email, github)
        employees.push(teams)
        internPrompt();
    });
}

function internPrompt() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the Intern?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter intern's ID",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email.",
        },
        {
            type: ":input",
            name: "school",
            message: "What school is the intern attending?"
        },
        {
            type: 'confirm',
            name: 'AddNewMember',
            message: 'Would you like to add more team members?',
        }
        
    ]).then(function (data) {
        const name = data.name
        const id = 3
        const email = data.email
        const school = data.school
        const teams = new Intern(name, id, email, school)
        employees.push(teams)
        managerPrompt();
})
}

