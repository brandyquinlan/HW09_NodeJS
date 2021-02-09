// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// Prompt for answers
function init() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub profile name?',
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description of your project.',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter any usage information.',
            },
            {
                type: 'confirm',
                name: 'confirmLicense',
                message: 'Does your project have a license?',
                default: false
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select the license information, if any.',
                choices: [
                    "GNU GPLv3",
                    "Mozilla Public License 2.0",
                    "Apache License 2.0",
                    "MIT License",
                    "Boost Software License 1.0",
                    "The Unlicense",
                    "BSD 3-Clause"
                ],
                when: ({ confirmLicense }) => {
                    if (confirmLicense) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Enter any contribution guidelines.',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter any test instructions.',
            },
        ])

    .then((answers) => {
        // Array of questions for user input
        const readmeMarkdown = markdown(answers);

        //Function to write README file
        fs.writeFile('readme.md', readmeMarkdown, (err) =>
            err ? console.log(err) : console.log('Successfully created readme.md!')
        );
    });
}

// Function to initialize app
init();