// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
.prompt([
// WHEN I enter my project title
{
    type:'input',
    message:'What is your project title?',
    name: 'title',
},
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
{
    type:'input',
    message:'What is your project description?',
    name: 'description',
},
{
    type:'input',
    message:'What are your project installation instructions?',
    name: 'installationInstructions',
},
{
    type:'input',
    message:'What are your project contribution guidelines?',
    name: 'contributionGuidelines',
},
{
    type:'input',
    message:'What are your project test instructions?',
    name: 'testInstructions',
},
// WHEN I choose a license for my application from a list of options
{
    type: 'list',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    name: 'licenseChoice',
},
// WHEN I enter my GitHub username
{
    type:'input',
    message: 'What is your GitHub username?',
    name: 'gitHubUsername',
},
// WHEN I enter my email address
{
    type:'input',
    message: 'What is your email address?',
    name: 'emailAddress',
},
])
.then(data => {
    console.log(data);
    fs.writeFile('darby.txt', generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
);
})