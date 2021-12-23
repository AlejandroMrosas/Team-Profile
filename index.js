const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const OUTPUT_DIR = path.resolve(__dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, 'index.html');

let teamArr = [];

const employeeChoices = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        }, 
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id'
        }, 
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }, 
        { 
            type: 'list',
            name: 'type',
            manager: 'choice employee type',
            choices: [
                    'Manager',
                    'Engineer',
                    'Intern',
        ]
      }, 
  ])
};

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your phone number?',
            name: 'officeNumber',
            validate(value) {
                const pass = value.match(
                  /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
                );
                if (pass) {
                  return true;
                }
          
                return 'Please enter a valid phone number';
              },
        },
    ]
)}
        const engineerPrompt = () => {
        return inquirer.prompt([
            {  
                type: 'input',
                name: 'github',
                message: "Enter the github account for the employee'"
            },
    ])
};

        const internPrompt = () => {
            return inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: "name of your school?"
            },
    ])
};

const addAnotherEmployee = () => {
    return inquirer.prompt([
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add a new employee?",
        choices: [
            'yes',
            'No'
        ]
    },
])
};

function askQuestions() { 
 employeeChoices().then(results => {
      console.log(results);
      switch(results.type){ 
          case 'Manager':
            managerPrompt().then(answers => {
                console.log(answers);
                let manager = new Manager(results.name, results.id, results.email, answers.officeNumber);
                  teamArr.push(manager);
                  addAnotherEmployee().then(answers => {
                    console.log(answers);
                 if (answers.addEmployee == "yes") {
                    askQuestions()
                 }    
              });
            });
          break;
          case "Engineer":
            engineerPrompt().then(answers => {
                console.log(answers);
                let engineer = new Engineer(results.name, results.id, results.email, answers.github);
                teamArr.push(engineer);
                addAnotherEmployee().then(answers => {
                    console.log(answers);
                 if (answers.addEmployee == "yes") {
                    askQuestions()
                 }    
              });
        });
          break;
          case "Intern":
              internPrompt().then(answers => {
                  console.log(answers);
                  let intern = new Intern(results.name, results.id, results.email, answers.school);
                  teamArr.push(intern);
                addAnotherEmployee().then(answers => {
                    console.log(answers);
                 if (answers.addEmployee == "yes") {
                    askQuestions()
                 }
              });
            });
          break;

          default:
            //   writeToFile(outputPath, "output/index.html")
      }
     
  });
};

    function writeToFile(team, data) {
        console.log(writeToFile)
        fs.writeFile(team, data, function (err, response) {
            console.log(response);
            if (err) {
                console.log(err);
            }
        })
    }

    askQuestions();
    
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated