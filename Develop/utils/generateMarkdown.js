const licenseList = [{
        name: 'GNU GPLv3',
        link: "https://www.gnu.org/licenses/gpl-3.0",
        badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    },
    {
        name: 'Mozilla Public License 2.0',
        link: "https://opensource.org/licenses/MPL-2.0)",
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    },
    {
        name: 'Apache License 2.0',
        link: "https://opensource.org/licenses/Apache-2.0)",
        badge: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    },
    {
        name: 'MIT License',
        link: 'https://opensource.org/licenses/MIT',
        badge: '[![License: MIT](https://img.shields.io/,badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        name: 'Boost Software License 1.0',
        link: "https://opensource.org/licenses/BSL-1.0",
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    },
    {
        name: 'The Unlicense',
        link: "https://opensource.org/licenses/unlicense",
        badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const selectedLicense = licenseList.filter(item => item.name === license);
    if (!license) {
        return '';
    } else
        return selectedLicense[0].badge;
    // return selectedLicense[0].badge ? confirmLicense === true;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    const selectedLicense = licenseList.filter(item => item.name === license);
    if (!license) {
        return '';
    } else
        return selectedLicense[0].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
    if (!license) {
        return '';
    } else
        return '## License Informaton';
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return ` # ${answers.title}
${renderLicenseBadge(answers.license)}

## Table of Contents

[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#test)
[Questions](#questions)
[Screenshots](#screenshots)
[Deployed Project URL](#deployedURL)
[Github Repo URL](#githubRepo)

## Program Description

${answers.description}

## Installation Instructions

${answers.installation}

## Usage information

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}
${renderLicenseSection(answers.license)}

${renderLicenseLink(answers.license)}

## Questions

Please contact me with questions:

- ${answers.name}
- Email: ${answers.email}
- Github link: ${answers.github}
`;
}

module.exports = generateMarkdown;