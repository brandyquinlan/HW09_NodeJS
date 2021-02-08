// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `# ${answers.title}

# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Licenses](#licenses)
5. [Contributing](#contributing)
6. [Tests](#test)
7. [Questions](#name)


## Program Description
${answers.description}

## Installation Instructions:
${answers.installation}

## Usage information:
${answers.usage}

## License Information:
${answers.license}

## Contributing:
${answers.contributing}

## Tests:
${answers.tests}


## Questions:
##name:
${answers.name}

##email:
${answers.email}

##github:
${answers.github}
`;

}

module.exports = generateMarkdown;