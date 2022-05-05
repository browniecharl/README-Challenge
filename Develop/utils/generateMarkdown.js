// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js')
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license = license) {
    licenseBadge = ''
  }else{
    licenseBadge = ''
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Mozilla') {
    licenseLink = 'https://www.mozilla.org/en-US/MPL/2.0/'
  }else if (license === 'GNU') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  }else if (license === 'Apache_2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  }else if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  }else if (license === 'IBM') {
    license = 'https://www-40.ibm.com/software/sla/sladb.nsf'
  }else{
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'NONE') {
    licenseSection = ''
  }else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

## Description:
### ${data.description}


## Table of Contents:
---------------------
### * [Installation](#installation)
### * [Usage](#usage)
### * [Credits](#credits)
### * [Contribute](#contribute)
### * [Tests](#tests)
### * [Questions](#questions)

## Installation:
#### ${data.installation}

## Usage: 
#### ${data.usage}

## Credits:
#### ${data.credits}

## ${renderLicenseSection(data.license)}
###### ${renderLicenseLink(data.license)}

## Contribute:
#### ${data.contribute}

## Tests:
#### ${data.test}

## Questions:
### For any questions or comments I can be reached at:
#### GitHub: http://www.github.com/${data.username} 
#### Email: ${data.email}
`;
}


module.exports = generateMarkdown;
