// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

function init() {
    inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            // {
            //     type: 'input',
            //     name: 'email',
            //     message: 'What is your email address?',
            // },
            // {
            //     type: 'input',
            //     name: 'github',
            //     message: 'What is the URL to your GitHub profile?',
            // },
            // {
            //     type: 'input',
            //     name: 'title',
            //     message: 'What is the title of your project?',
            // },
            // {
            //     type: 'input',
            //     name: 'description',
            //     message: 'Enter a description of your project.',
            // },
            // {
            //     type: 'input',
            //     name: 'installation',
            //     message: 'Enter installation instructions.',
            // },
            // {
            //     type: 'input',
            //     name: 'usage',
            //     message: 'Enter any usage information.',
            // },
            {
                type: 'list',
                name: 'license',
                message: 'Select the applicable license information.',
                choices: [
                    "GNU GPLv3",
                    "Mozilla Public License 2.0",
                    "Apache License 2.0",
                    "MIT License",
                    "Boost Software License 1.0",
                    "The Unlicense",
                    "BSD 3-Clause"
                ]
            }
            // },
            // {
            //     type: 'input',
            //     name: 'contributing',
            //     message: 'Enter any contribution guidelines.',
            // },
            // {
            //     type: 'input',
            //     name: 'tests',
            //     message: 'Enter the test instructions.',
            // }

        ])
        .then((answers) => {
            // TODO: Create an array of questions for user input
            // const answers = [];
            // console.log(answers);
            const readmeMarkdown = markdown(answers);

            // TODO: Create a function to write README file
            //function writeToFile(fileName, data) {}
            fs.writeFile('readme.md', readmeMarkdown, (err) =>
                err ? console.log(err) : console.log('Successfully created readme.md!')
            );
        });
}

// TODO: Create a function to initialize app

init();