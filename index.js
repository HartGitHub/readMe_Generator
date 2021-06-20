// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileSync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(
[
    {
    type: "input",
    message: 'What is your github user name?',
    name: "username",
},
{
type: "input",
message:"Enter your project title",
name: "projectTitle",
},
{
type: "list",
message: "Select a license",
choices: ["Apache", "IBM", "Mozilla",] ,
name: "license",
},
{
    type: "input",
    message: "Enter your email address, so that users may contact you",
    name: "email"
},
{
    type: "input",
    name: 'description',
    message: 'what is the description', 
},
{
    type: "input",
    name: 'contributors',
    message: 'Project Contributors?',
},

]);
};

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data)
// }

const init = () => {
    promptUser()
    .then((answers) => fs.writeFile('README.md', generateMarkdown(answers) ))
    .then(() => console.log ("Readme Generated"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();

/*THEN a high-quality, professional README.md is generated with the title of 
 my project and sections entitled Description, Table of Contents, Installation, Usage,
 License, Contributing, Tests, and Questions */


//Licenses not rendering properly. Follow-up