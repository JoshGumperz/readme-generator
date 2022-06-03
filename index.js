// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = ["Enter author name:", "Enter project name:", "Describe your project:", "How do I install the app?", "How do I use the app?", "What is the license for this application?", "What color do you want your license badge to be", "How could I contribute to this app?", "Enter your Github username:", "Enter your email address:"];

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "name",
            },
            {
                type: "input",
                message: questions[1],
                name: "title",
            },
            {
                type: "input",
                message: questions[2],
                name: "description",
            },
            {
                type: "input",
                message: questions[3],
                name: "installation",
            },
            {
                type: "input",
                message: questions[4],
                name: "usage",
            },
            {
                type: "list",
                message: questions[5],
                name: "license",
                choices: ["MIT", "ISC", "IBM", "MPL"]
            },
            {
                type: "list",
                message: questions[6],
                name: "licenseColor",
                choices: ["red", "blue", "yellow", "green"]
            },
            {
                type: "input",
                message: questions[7],
                name: "contribution",
            },
            {
                type: "input",
                message: questions[8],
                name: "github",
            },
            {
                type: "input",
                message: questions[9],
                name: "email",
            },
        ])
        .then ((data) => {
            const readMePageContent = generateMarkdown(data)
            fs.writeFile("./Generated-READMEs/README.md", readMePageContent, (err) =>
            err ? console.log(err) : console.log("successfully created readme!")
            )
        })
}
// Function call to initialize app
init();
