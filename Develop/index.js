// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// const generateHTML = (answers) =>
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;
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
                message: 'What is the URL to your GitHub profile?',
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
                type: 'input',
                name: 'license',
                message: 'Select the applicable license information.',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Enter any contribution guidelines.',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Enter the test instructions.',
            }

        ])
        .then((answers) => {
            // TODO: Create an array of questions for user input
            // const answers = [];
            // console.log(answers);
            const readmeMarkdown = markdown(answers);
            console.log(readmeMarkdown);

            // TODO: Create a function to write README file
            //function writeToFile(fileName, data) {}
            fs.writeFile('readme.md', readmeMarkdown, (err) =>
                err ? console.log(err) : console.log('Successfully created readme.md!')
            );
        });
}

// TODO: Create a function to initialize app

init();