

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![projectBadge](https://img.shields.io/badge/license-${license}-blue)`
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'GPL'){
    return 'https://opensource.org/licenses/GPL-3.0'
  }
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
  if (license === 'MIT'){
    return `Copyright [2022] ${github}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } 
  if (license === 'GPL'){
    return `    Copyright (C) [2022]  ${github}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.`
  }
}

// TODO: Create a function to generate markdown for README
//INCLUDED VIDEO DEMO
function generateMarkdown(data) {
  return `
  # Title 
    ${data.title} 
  # Description 
   ${data.description}
  # Table of Contents: <br> 
   * [Installation Instructions](#installation)
   * [Usage Information](#usage)
      * [How to Use Demo](#usage)
   * [Contribution Guidelines](#contribution)
   * [Test Instructions](#tests)
   * [License](#license) 
  ## Installation 
   ${data.installation}
  ## Usage 
  ${data.usage} <br>
  [How to use](https://watch.screencastify.com/v/dktGsRnwPfWbJ92Uxqqk)
  ## Contribution 
  ${data.contribution} <br>
  [Contributor Covenant](https://www.contributor-covenant.org/)
  ## Tests
   ${data.tests}
  ## Questions: <br> 
       *Github: https://github.com/${data.github}
       *Email: ${data.email}
  ## License
  ${renderLicenseBadge(data.license)} <br>
  ${renderLicenseLink(data.license)} <br>
  ${renderLicenseSection(data.license, data.github)}
`;
}

module.exports = generateMarkdown;



