// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }else{
                    console.log('Please enter your Github username')
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }else{
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }else{
                    console.log('Please enter your project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desccription',
            message: 'Enter a description of your project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }else{
                    console.log('Please enter a description of your project');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project have?',
            choices: [
                'Mozilla Public License',
                'GNU v3',
                'Apache 2.0',
                'MIT',
                'BSD 3-Clause',
                'GPL 3.0',
                'GPL 2.0',
                'N/A'
            ],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                }else{
                    console.log('Please select a license.')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command is needed to install app dependencies?',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command is need to run tests?',
            default: 'npm run test'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Is there anything else the user should know about your project?'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Let user know if you are open to contributions and how to submit them.'
        },
    ]

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('You have successfully created your README file')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (userInput => {
        console.log(userInput)

    })
}

// Function call to initialize app
init();
