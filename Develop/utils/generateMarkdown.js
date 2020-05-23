function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
![](https://img.shields.io/badge/LICENSE-MIT-<ORANGE>)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
* Profile picture from GitHub
* ${data.email}
`;
}

module.exports = generateMarkdown;
