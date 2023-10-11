// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '');

  else
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.link !== '');

  else
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.section !== '');

  else
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let draftToC = `## Table of Contents`;

  if (data.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (data.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (data.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (data.tests !== '') { draftToC += `
  * [Tests](#tests)` };
  
  return `# ${data.title}
  
`;
}

module.exports = generateMarkdown;
