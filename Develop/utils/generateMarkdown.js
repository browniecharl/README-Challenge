// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js')
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ('');

  if (license === 'Mozilla') {
    licenseBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }else if (license === 'GNU v3') {
    licenseBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)'
  }else if (license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }else if (license === 'MIT') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }else if (license === 'IBM') {
    licenseBadge = '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)'
  }else {
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
  }else if (license === 'GNU v3') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  }else if (license === 'Apache 2.0') {
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
  if (license === 'None') {
    licenseSection = ''
  }else {
    licenseSection = 
    `${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
## ${renderLicenseSection(data.license)}
###### ${renderLicenseLink(data.license)}

## Description:
---------------
### ${data.description}

## Table of Contents:
### * [Installation](#installation)
### * [Usage](#usage)
### * [Credits](#credits)
### * [Contribute](#contribute)
### * [Tests](#tests)
### * [Questions](#questions)

## Installation:
----------------
#### ${data.installation}

## Usage: 
---------
#### ${data.usage}

## Credits:
-----------
#### ${data.credits}


## How to Contribute:
---------------------
#### ${data.contribute}

## Tests:
---------
#### ${data.test}

## Questions:
--------------
### For any questions or comments I can be reached at:
#### GitHub: http://www.github.com/${data.username} 
#### Email: ${data.email}



`;
}


module.exports = generateMarkdown;
