var inquirer = require('inquirer');
var fs = require('fs');
const { resolve } = require('path');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to enter a description of yourproject?',
        default: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description:',
        when: ({ confirmDescription }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmDescription) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to enter installation instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter a installation instructions:',
        when: ({ confirmInstall }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter usage information?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
        when: ({ confirmUsage }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributionGuidelines',
        message: 'Would you like to enter contribution guidelines?',
        default: true
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please enter contribution guidelines:',
        when: ({ confirmContributionGuidelines }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmContributionGuidelines) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to enter test instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions:',
        when: ({ confirmTest }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // USE TRIM ON FILE NAME TO CLEAR WHITE SPACE
    fileName = fileName.trim();

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/' + fileName + '.md', data, err =>{

            if (err) {
                // if it errors return nothing.
                reject(err);
                return;
            }

            resolve({
                // if no error let the user know it successfully ran
                ok: true,
                message: 'ReadMe Generated!'
            });
        }) ;
    });

};

// TODO: Create a function to initialize app
const init = () => {



    writeToFile(filename, data); 
    // init triggers the inquirer and readme creation
    // generated data and user selected filename are the passed to writeToFile
};

// Function call to initialize app
init();
