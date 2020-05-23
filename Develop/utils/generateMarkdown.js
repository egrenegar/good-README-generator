function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![](https://img.shields.io/badge/LICENSE-MIT-<ORANGE>)

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
* Profile picture from GitHub
* ${answers.email}
`;
}

module.exports = generateMarkdown;
