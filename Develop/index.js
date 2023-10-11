const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Title?',
        name: 'title',
        default: 'readme-generator',
    },
    {
        type: 'input',
        message: 'What is yor description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contirubtion guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License options',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Your README.md file has been generated!")
    });
}
//using async to help the app run smoother
const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {

        const data = await inquirer.prompt(questions);
        console.log("Your responses: ", data);

        console.log("Generating your README...")
        const markdown = generateMarkdown(data);
        console.log(markdown);

        await writeFileAsync('GeneratedREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
