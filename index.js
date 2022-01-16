// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/write_file');

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your projects Name (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
            }
          }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe the project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to provide a description to continue!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to include a Table Of Contents in your README.md?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the steps required to install your project',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("You need to let people know how to install your projec to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please decribe the projects intended usage in the world',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("You need to let people know your projects intended usage to continue");
                    return false;
                }
            }
        },
        {
            type: 'inout',
            name: 'credits',
            message: 'Please provide the collaborators, if any, with their Github profiles',
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log("You need to provide the credits for the project to continue");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for the project',
            choices: ['BSD', 'MIT', 'GPL'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please choose a license for the project to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Plese provide some guidelines for other devleopers to contribute to the project"
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide examples on how to run tests you created for the application'
        }
    ]);
};
promptUser()
.then(data => {
    return generateMarkdown(data);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
