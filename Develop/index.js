const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [


];

// function writeToFile(fileName, data) {

// }


function init() {
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
            name: 'title'
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

        // .then(function (answers) {
        //     fs.writeFile("answers.text", JSON.stringify(answers, null, "\t"), function (err) {

        //         if (err) {
        //             return console.log(err);
        //         }

        //         console.log("Success!");

        //     });
        // });

    .then(function (answers) {
        fs.writeFile("NEWREADME.md", generateMarkdown(answers), function (err) {

            if (err) {
                return console.log(err);
            }
            console.log("Success!");

        });
    });
}




init()