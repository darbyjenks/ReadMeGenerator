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
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of Contents: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information: '
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines? '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions? '
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
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?'
    },
    
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
