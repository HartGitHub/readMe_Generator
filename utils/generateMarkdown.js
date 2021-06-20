// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (data.license == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license == "Apache") {
    return "(https://apache.org/licenses/LICENSE-2.0.txt)";
  } else if (data.license == "IBM") {
    return "(https://tldrlegal.com/license/ibm-public-license-1.0-(ipl)#fulltext)";
  } else if (data.license == "Mozilla") {
    return "(https://www.tldrlegal.com/l/mpl-2.0)";
  } else "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license == "Apache") {
    return "(http://www.apache.org/licenses/)";
  } else if (data.license == "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else if (data.license == "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else "";
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
                #Project Title 
  ${answers.projectTitle}
  ##License Badge
  ${renderLicenseBadge}
  ##Table of Contents
  *[username](#username)
  *[license](#license)
  *[email](#email)
  *[description](#description)
  *[contributors](#contributors)
  *[projectTitle](#projectTitle)
#username
[Github Link](https://github.com/${answers.username})

#license
${answers.license}
${renderLicenseSection}
${renderLicenseLink}

#description
${answers.description}

#Contributors
 The following contributed on this assignment: ${answers.contributors}

#email
 Please reach out to me for any questions regarding this generator at my email:${answers.email}
`;
};

module.exports = generateMarkdown;

