// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js')
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'NONE') {
    licenseBadge = ''
  }else{
    licenseBadge = `![badge](https://img.shields.io/badge/license-${license}-blue)`
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'NONE') {
    licenseLink = ''
  }else{
    licenseLink = `https://opensource.org/licences/${license}`
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
${renderLicenseBadge(data.license)}

## Description:
${data.description}


## Table of Contents:
---------------------
### * [Installation](#installation)
### * [Usage](#usage)
### * [Credits](#credits)
### * [Contribute](#contribute)
### * [Tests](#tests)
### * [Questions](#questions)

## Installation:
${data.installation}

## Usage: 
${data.usage}

## Credits:
${data.credits}

## ${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contribute:
${data.contribute}

## Tests:
${data.test}

## Questions:
### For any questions or comments I can be reached at:
#### GitHub: http://www.github.com/${data.username} 
#### Email: ${data.email}
`;
}


module.exports = generateMarkdown;
