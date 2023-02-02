// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
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
    console.log(data)
    // THEN this is displayed as the title of the README
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
})

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README