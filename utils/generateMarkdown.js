// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `\n ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
      } else {
      return '';
      };
  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license !== 'None'){
       return `\n (https://img.shields.io/badge/license-${license}-blue.svg)`
    } else {
        return '';
    }
  }

  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'None') {
        return `\n ## License
        \n This project is licensed under the ${license} license.`;
      }
      return '';
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data){

  let tableOfContents = '## Table Of Contents';

  if(data.installation !== ''){
    tableOfContents += `
    \n * [Installation](#installation)
    `
  };
  if(data.usage !== ''){
    tableOfContents += `
    \n * [Usage](#usage)
    `
  };
  if(data.contributing !== ''){
    tableOfContents += `
    \n * [Credits](#credits)
    `
  };
  if(data.tests !== ''){
    tableOfContents += `
    \n * [Tests](#tests)
    `
  };
  if(data.email !== ''){
    tableOfContents += `
    \n * [Questions](#questions)
    `
  };

  let topMarkdown = `# ${data.title}
    ${renderLicenseBadge(data.license)}

    \n ## Description

    \n ${data.description}

  `;

  topMarkdown += tableOfContents;

  if(data.installation !== ''){
    topMarkdown += 
    `
    \n ## Installation
    \n To install necessary dependencies, run the following command:
    ${data.installation}

    `
  };
  if(data.usage !== ''){
    topMarkdown += 
    `
    \n ## Usage
    \n Instructions for use:
    \n  ${data.usage}

    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}

    `
  };
  if(data.contributing !== ''){
    topMarkdown += 
    `
    \n ## Credits
    \n [Contributor Covenant](https://www.contributor-covenant.org/)
    \n ${data.contributing}

    `
  };
  if(data.tests !== ''){
    topMarkdown += 
    `
    \n ## Tests
    \n To run tests, run the following command:
    \n ${data.tests}
    `
  };
  if(data.email !== ''){
    topMarkdown += 
    `
    \n ## Questions
    \n If you have any questions about the repo, open an issue or contact me directly at 
    \n [Email](${data.email}). 
    \n You can find more of my work at 
    \n [github](https://github.com/${data.github}/).
    `
  };
  return topMarkdown; 
}

  module.exports = generateMarkdown;