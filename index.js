// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = ["Enter project name", "Describe your project", "How do I install the app?", "How do I use the app?", "Are there contribution guidelines",];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "projectName",
            },
            {
                type: "input",
                message: questions[1],
                name: "description",
            },
            {
                type: "input",
                message: questions[2],
                name: "installation",
            },
            {
                type: "input",
                message: questions[3],
                name: "usage",
            },
            {
                type: "input",
                message: questions[4],
                name: "contribution guidelines",
            },
        ])
        .then ((data) => {
            console.log(data)
            const fileName = "README.md"
            fs.writeFile(fileName, JSON.stringify(data, null, "/t"), (err) =>
            err ? console.log(err) : console.log("yay!")
            )
        })
}

// Function call to initialize app
init();
