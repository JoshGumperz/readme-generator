// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
`# ${data.title}
## Author
${data.name}  

https://img.shields.io/badge/License-${data.license}-${data.licenseColor}.svg
    
# Table of Contents
1. [description](#description)
2. [installation](#installation)
3. [usage](#usage)
4. [license](#license)
5. [contribution](#contribution)
6. [contact](#contact)

## description
${data.description}
    
## installation
${data.installation}
    
## usage
${data.usage}

## license 
This app is covered under the ${data.license} license
    
## contribution
${data.contribution}
    
## contact
If you have any questions, you can contact me here: 
email: (${data.email})
github: (https://github.com.${data.github})
`;

module.exports = generateMarkdown;
