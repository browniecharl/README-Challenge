// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
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
        name: 'description',
        message: 'Enter a short description of your project',
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
        type: 'input',
        name: 'installation',
        message: 'List any commands needed to install dependencies',
        default: '"npm init" "npm install inquirer"',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any third party assets used or collaborators that may have contributed.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: [
            'Mozilla',
            'GNU',
            'Apache_2.0',
            'MIT',
            'IBM',
            'NONE'
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
        name: 'contribute',
        message: 'Inform viewer whether or not you are open to contributions and how to submit them.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command is needed to run tests?',
        default: 'npm run test'
    },
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
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
