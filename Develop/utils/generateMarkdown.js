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
  //generate TOC
  let draftToC = `## Table of Contents`;

  if (data.installation !== '') {
    draftToC += `
  * [Installation](#installation)` };

  if (data.usage !== '') {
    draftToC += `
  * [Usage](#usage)` };

  if (data.contributing !== '') {
    draftToC += `
  * [Contributing](#contributing)` };

  if (data.tests !== '') {
    draftToC += `
  * [Tests](#tests)` };

  //title
  let draftMarkdown =
    `# ${data.title}

  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description 
  
  *The what, why, and how of this project:* 
  
  ${data.description}

  `
  //TOC
  draftMarkdown += draftToC;

  //installation
  if (data.installation !== '') {

    draftMarkdown +=
      `
  
  ## Installation
  
  *What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:*

  ${data.installation}`
  };

  //usage
  if (data.usage !== '') {

    draftMarkdown +=


      `
 ## Usage 
  
  *Provide instructions and examples for use. Include screenshots as needed:*
  
  ${data.usage}`
  };

  //contribution
  if (data.contributing !== '') {

    draftMarkdown +=

      `
    
    ## Contributing
    
    *If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer*
    
    ${data.contributing}`
  };

  //tests
  if (data.tests !== '') {

    draftMarkdown +=
      `
      
      ## Tests
      
      *Go the extra mile and write tests for your application. Then provide examples on how to run them here:*
      
      ${data.tests}`
  };

  //license
  draftMarkdown += `
  * [License](#license)`;
  return draftToC, draftMarkdown;
}


module.exports = generateMarkdown;
