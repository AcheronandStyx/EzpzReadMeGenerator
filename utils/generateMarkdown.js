// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // iamge or io shields call as part of as strign literal
  //return ``; //badge u cretae here
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // call other two license functions from this funciton

}

// TODO: Create a function to generate markdown for README
// render questiosn contenet based on promises
// create questions to get username and github profile link.
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description

  ${data.description}

  ## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contribution Guidlines](#Contribution Guidlines)
  -[Tests](#tests)
  -[Questions](#questions)
  -[License](#license)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribution Guidlines

  ${data.confirmContributionGuidelines}

  ## Tests

  ${data.test}

  ## Questions

  If you have additional questions please feel free to contact me at ${data.email}

  ## License

  ${renderLicenseSection(data.license)}

`;
}
// render questiosn contenet based on promises
module.exports = generateMarkdown;
