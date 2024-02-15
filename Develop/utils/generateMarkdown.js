// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const license = data.license;
  let yourLicense = "";
  if (license === "GNU AGPLv3") {
    yourLicense = `![AGPLv3 license](https://img.shields.io/badge/License-AGPLv3-blue.svg)`;
  } else if (license === "MIT License") {
    yourLicense = `![MIT license](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "GNU GPLv3") {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "GNU LGPLv3") {
    yourLicense = `![LGPLv3 license](https://img.shields.io/badge/License-LGPLv3-red.svg)`;
  } else if (license === "Mozilla Public License 2.0") {
    yourLicense = `![Mozilla License](https://img.shields.io/badge/license-MIT-green)`;
  } else if (license === "Apache License 2.0") {
    yourLicense = `![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "Boost Software License 1.0") {
    yourLicense = `![Boost License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
  } else if (license === "The Unlicense") {
    yourLicense = `![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else {
    return "";
  }
  return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    AGPLv3: "https://www.gnu.org/licenses/agpl-3.0",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
    MIT: "https://opensource.org/licenses/MIT",
    LGPLv3: "https://www.gnu.org/licenses/lgpl-3.0",
    Mozilla: "https://www.mozilla.org/en-US/MPL/2.0/",
  };
  if (license == "GNU AGPLv3") {
    return `This project is licensed under the [GNU AGPLv3](${licenseLink.AGPLv3}) license.`;
  } else if (license == "GNU GPLv3") {
    return `This project is licensed under the [GNU GPLv3](${licenseLink.GPLv3}) license.`;
  } else if (license == "MIT License") {
    return `This project is licensed under the [MIT](${licenseLink.MIT}) license.`;
  } else if (license == "GNU LGPLv3") {
    return `This project is licensed under the [GNU LGPLv3](${licenseLink.LGPLv3}) license.`;
  } else if (license == "Mozilla Public License 2.0") {
    return `This project is licensed under the [Mozilla Public License 2.0](${licenseLink.Mozilla}) license.`;
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.section !== "") {
    return `## License
    ${license.section}`;
  } else {
    return "";
  }
}

function generateGitHubLink(username) {
  return `https://github.com/${username}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //generate TOC
  let draftToC = `## Table of Contents`;

  if (data.installation !== "") {
    draftToC += `
  * [Installation](#installation)`;
  }

  if (data.usage !== "") {
    draftToC += `
  * [Usage](#usage)`;
  }

  if (data.contributing !== "") {
    draftToC += `
  * [Contributing](#contributing)`;
  }

  if (data.tests !== "") {
    draftToC += `
  * [Tests](#tests)`;
  }

  if (data.license !== "") {
    draftToC += `
  * [License](#license)`;
  }

  //title
  let draftMarkdown = `# ${data.title}

  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description 
  
  
  ${data.description}

  `;
  //TOC
  draftMarkdown += draftToC;

  //installation
  if (data.installation !== "") {
    draftMarkdown += `
  
  ## Installation
  

  ${data.installation}`;
  }

  //usage
  if (data.usage !== "") {
    draftMarkdown += `

  ## Usage 
  
  
  ${data.usage}`;
  }

  //contribution
  if (data.contributing !== "") {
    draftMarkdown += `
    
  ## Contributing
    
    
  ${data.contributing}`;
  }

  //tests
  if (data.tests !== "") {
    draftMarkdown += `
      
  ## Tests
      
      
  ${data.tests}

  `;
  }

  //contributors
  if (data.contributors !== "") {
    draftMarkdown += `
  ## Contributors

  ${data.contributors}: 
  `;
    draftMarkdown += generateGitHubLink(data.contributors);
  }

  //license
  if (data.license !== "") {
    draftMarkdown += `
  ## License

  ${data.license} 

  `;
    draftMarkdown += renderLicenseBadge(data);
    draftMarkdown += `<br>`;
    draftMarkdown += renderLicenseLink(data.license);
  }

  return draftToC, draftMarkdown;
}

module.exports = generateMarkdown;
