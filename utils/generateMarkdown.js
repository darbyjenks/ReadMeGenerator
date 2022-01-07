// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![projectBadge](https://img.shields.io/badge/license-${license}-blue)`
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, github) {
  if (license === 'Apache'){
    return `   Copyright [2022] ${github}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.description}
  # ${data.tableOfContents}
  # ${data.installation}
  # ${data.usage}
  # ${data.contributing}
  # ${data.tests}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license, data.github)}
`;
}

module.exports = generateMarkdown;
