// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of the app: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the app: '
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to make contributions: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions? '
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for this project?', 
        choices: [
            'MIT',
            'Apache',
            'GPL'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        writeToFile('README.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
