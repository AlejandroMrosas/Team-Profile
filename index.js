const fs = require('fs');
const inquirer = require('inquirer');

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');


function managersprompt() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Select Member role.',
            choices: ['Manager', 'engineer', 'intern']
        }, {
            type: 'input',
            message: 'Who is your manager?',
            name: 'Managername'
        }, {
            type: 'input',
            message: 'Manager ID?',
            name: 'ManagerID'
        }, {
            type: 'input',
            message: 'Manager Email?',
            name: 'ManagerEmail'
        }, {
            type: 'input',
            message: 'Manager Github username?',
            name: 'github'
        }, 
    ])

.then((response) => {
    return fs.writeFile('/', err => {
        if (err) {
            console.log(err)
            return
            }
        console.log("Successful");
    });
  });
};