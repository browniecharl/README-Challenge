// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js')
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'Mozilla') {
    licenseBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }else if (license === 'GNU v3') {
    licenseBadge = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }else if (license === 'Apache 2.0') {
    licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'MIT') {
    licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license === 'IBM') {
    licenseBadge = '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
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
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  }else if (license === 'GNU v3') {
    license = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  }else if (license === 'Apache 2.0') {
    license = 'https://opensource.org/licenses/Apache-2.0'
  }else if (license === 'MIT') {
    license = 'https://opensource.org/licenses/MIT'
  }else if (license === 'IBM') {
    license = 'https://opensource.org/licenses/IPL-1.0'
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
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
### ${renderLicenseLink(data.license)}

## Table of Contents:
### * [Installation](#installation)
### * [Usage](#usage)
### * [License](#license)
### * [Contributions](#contributions)
### * [Tests](#tests)
### * [Questions](#questions)

## Installation:
### You must run the following command for this README generator to function.
### ${data.installation}

`;
}

module.exports = generateMarkdown;
