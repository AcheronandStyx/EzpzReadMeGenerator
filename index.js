var inquirer = require('inquirer');
var fs = require('fs');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const license = ['MIT', 'ISC', 'GNU General Public License'];

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
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
        name: 'confirmAddGit',
        message: 'Would you like to add your github username and a link to your profile?',
        default: true
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your git Hub username (required):',
        when: ({ confirmAddGit }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmAddGit) {
                return true;
            } else {
                return false;
            }
        },
        validate: github => {
            if (github) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmEmail',
        message: 'Would you like include your email in the questions section?',
        default: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email:',
        when: ({ confirmEmail }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmEmail) {
                return true;
            } else {
                return false;
            }
        },
        validate: github => {
            if (github) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmDescription',
        message: 'Would you like to enter a description of your project?',
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
        message: 'Please enter installation instructions:',
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
        type: 'list',
        name: 'confirmContributionGuidelines',
        message: 'Would you like to include the Contributor Covenant as your contribution guidelines, define your own or include no contribution guidelines?',
        choices: ['Define my own', 'Use the Contributor Covenant', 'No Contribution Guidelines']
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please enter contribution guidelines:',
        when: (questions) => questions.confirmContributionGuidelines === 'Define my own'
        /*
        when: ({ confirmContributionGuidelines  }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmContributionGuidelines) {
                return true;
            } else {
                return false;
            }
        }*/
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
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to the readMe?',
        default: true
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name for use in the license section:',
        when: ({ confirmLicense }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: license,
        when: ({ confirmLicense }) => { // conditional that checks prior boolean and only runs this question if the user said true
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', data, err =>{

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

const userData = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
function init() {
    userData().then(userInput => {
     
        return generateMarkdown(userInput);
    })
    .then(markdown => {
        
        return writeToFile(markdown);
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();

    //const fileName = 
    //writeToFile(fileName, readmeData); 
    // init triggers the inquirer and readme creation
    // generated data and user selected filename are the passed to writeToFile
