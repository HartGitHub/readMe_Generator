#Project Title 
  Generator
  ##License Badge
  function renderLicenseBadge(data) {
  if (data.license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (data.license == "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else "";
}
  [username](#username)
  [license](#license)
  [email](#email)
  [description](#description)
  [contributors](#contributors)
  [projectTitle](#projectTitle)
##username
HartGithub

##license
Mozilla
function renderLicenseSection(data) {
  if (data.license == "Apache") {
    return "(http://www.apache.org/licenses/)";
  } else if (data.license == "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else if (data.license == "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else "";
}
function renderLicenseLink(data) {
  if (data.license == "Apache") {
    return "(https://apache.org/licenses/LICENSE-2.0.txt)";
  } else if (data.license == "IBM") {
    return "(https://tldrlegal.com/license/ibm-public-license-1.0-(ipl)#fulltext)";
  } else if (data.license == "Mozilla") {
    return "(https://www.tldrlegal.com/l/mpl-2.0)";
  } else "";
}

##email
Cehart90@gmail.com

##description
npm i inquirer -y

##Contributors
alskdf
