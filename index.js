const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


const employees = []; 

const managerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            message: 'Select Member role.',
            choices: ['Manager', 'Engineer', 'Intern']
        }, {
            type: 'input',
            message: 'Who is your manager?',
            name: 'managerName'
        }, {
            type: 'input',
            message: 'Manager ID?',
            name: 'managerId'
        }, {
            type: 'input',
            message: 'Manager Email?',
            name: 'managerEmail'
        }, {
            type: 'input',
            message: 'Manager Github username?',
            name: 'github'
        }, 
    ])
};

const employeePrompt = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter Employee's ID",
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Enter the employee's email.",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter github username.",
        },
        {
            type: 'confirm',
            name: 'AddNewEmployee',
            message: 'Would you like to add more team members?',
        }
    ])

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Profile created");
        }
    })
}; 
