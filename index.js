var inquirer = require('inquirer');
var fs = require("fs");

const questions = [


];

inquirer
  .prompt([
    {
        message: 'What is your GitHub username?',
        type: 'input',
        name: 'username'
    },
    {
        message: 'What is your email?',
        type: 'input',
        name: 'email'
    },
    {
        message: 'What is the URL to your project?',
        type: 'input',
        name: 'URL'
    },
    {
        message: 'What is the name of your project?',
        type: 'input',
        name: 'projectName'
    },
    {
        message: 'Please write a short description of your project:',
        input: 'input',
        name: 'description'
    },
    {
        message: 'What kind of license should your project have?',
        type: 'input',
        name: 'license'
    },
    {
        message: 'What command should be run to install dependencies?',
        type: 'input',
        name: 'installation'
    },
    {
        message: 'What command should be run to run tests?',
        type: 'input',
        name: 'tests'
    },
    {
        message: 'What does the user need to know about using the repo?',
        type: 'input',
        name: 'usage'
    },
    {
        message: 'What does the user need to know about contributing to the repo?',
        type: 'input',
        name: 'contributing'
    }
  ])

  .then(function(answers){
    fs.writeFile('generateMarkdown.js', JSON.stringify(answers, null, "\t"), function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Answers saved to generateMarkdown.js!");
    })

  });

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
