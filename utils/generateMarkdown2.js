// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
      } else {
      return '';
      };
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license !== 'None'){
        `https://img.shields.io/badge/license-${license}-blue.svg`
    } else {
        return '';
    }
  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
    
    This project is licensed under the ${license} license.`;
      }
      return '';
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {

    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README
    return `# ${data.title} ${renderLicenseBadge(data.license)}
    \n ## Description
    \n  ${data.description}
    \n ## Table Of Contents
    \n - [Installation](#installation)
    \n - [Usage](#usage)
    \n ${renderLicenseLink(data.license)}
    \n - [Credits](#credits)
    \n - [License](#license)
    \n ## Installation
    \n  ${data.installation}
    \n ## Usage
    \n ${renderLicenseSection(data.license)}
    \n  ${data.usage}
    \n ## Contributing
    \n  ${data.contributing}
    \n ## Tests
    \n  ${data.tests}
    \n ## License
    \n  ${renderLicenseBadge(data.license)}
    \n ## Questions
    \n  ${data.gitHub}
    \n  If you have additional questions please feel free to reach me by email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;