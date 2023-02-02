// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  }
  
  // Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {

  }
  
  // Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
  }
  
  // Create a function to generate markdown for README
  function generateMarkdown(data) {

    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README
    return `# ${data.title} ${badge}
    \n # Description
    \n  ${data.description}
    \n # Installation
    \n  ${data.installation}
    \n # Usage
    \n  ${data.usage}
    \n # Contributing
    \n  ${data.contributionGuidelines}
    \n # Tests
    \n  ${data.testInstructions}
    \n # License
    \n  ${license}
    \n # Questions
    \n  ${data.gitHub}
    \n  If you have additional questions please feel free to reach me by email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;