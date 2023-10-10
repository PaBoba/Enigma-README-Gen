const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Title?',
        name: 'Title',
        default: 'readme-generator',
    },
    {
        type: 'input',
        message: 'What is yor description?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the installation insturctions?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What are the contirubtion guidelines?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'Tests',
    },
    {
        type: 'list',
        name: 'License',
        message: 'License options',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
