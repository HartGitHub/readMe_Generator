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
    /* WHEN I enter my GitHub username ** GOT IT** 
     THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile*/
    {
    type: "input",
    message: 'What is your github user name?',
    name: "username",
},
// WHEN I enter my project title ** GOT IT***
// THEN this is displayed as the title of the README
{
type: "input",
message:"Enter your project title",
name: "projectTitle",
},
// WHEN I choose a license for my application from a list of options **GOT IT** 
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
{
type: "list",
message: "Select a license",
choices: ["Apache", "IBM", "Mozilla",] ,
name: "license",
},
// WHEN I enter my email address **GOT IT** 
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
{
    type: "input",
    message: "Enter your email address",
    name: "email"
},
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions ** GOT IT** 
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
{
    //editor creates a text box
    type: "editor",
    name: 'description',
    message: 'what is the description', 
},
{
    type: "input",
    name: 'contributors',
    message: 'Project Contributors?',
}

]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers) ))
    .then(() => console.log ("Readme Generated"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();

/*THEN a high-quality, professional README.md is generated with the title of 
 my project and sections entitled Description, Table of Contents, Installation, Usage,
 License, Contributing, Tests, and Questions */


// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README