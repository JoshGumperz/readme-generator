// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
`# ${data.title}
## Author
${data.name}  
    
# Table of Contents
1. [description] (#description)
2. [installation] (#installation)
3. [usage] (#usage)
5. [contribution] (#contribution)
6. [contact] (#contact)
    
## description
${data.description}
    
## installation
${data.installation}
    
## usage
${data.usage}
    
## contribution
${data.contribution}
    
## contact
email: (${data.name})
    
github: (https://github.com.${data.github})
`;

module.exports = generateMarkdown;
