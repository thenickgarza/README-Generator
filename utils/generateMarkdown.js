// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

const renderDescription = descriptionText => {
  if (!descriptionText) {
    return '';
  } else {
    return `
    
    ${descriptionText}`;
 };
};

const renderInstallation = installText => {
  if (!installText) {
    return '';
  } else {
    return `
    
    ${installText}`;
  };
};

const renderUsage = usageText => {
  if (!usageText) {
    return '';
  } else {
    return `
    
    ${usageText}`;
  };
};

const renderCredits = creditText => {
  if (!creditText) {
    return '';
  } else {
    return `
    
    ${creditText}`;
  };
};

const renderContributing = contText => {
  if (!contText) {
    return '';
  } else {
    return `
    
    ${contText}`;
  };
};

const renderTests = testText => {
  if (!testText) {
    return '';
  } else {
    return `
    
    ${testText}`;
  };
};

const renderTableOf = tableText => {
  if (tableText === true) {
    return `## Table Of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)`
  } else {
    return '';
  };
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  ## ${data.name}
  
  ## Description ${renderDescription(data.description)}

  ${renderTableOf(data.confirmTableOfContents)}
  
  ## Installation ${renderInstallation(data.installation)}
  
  ## Usage ${renderUsage(data.usage)}
  
  ## Credits ${renderCredits(data.credits)}
  
  ## Contributing ${renderContributing(data.contributing)}
  
  ## Tests ${renderTests(data.tests)}

  ## Questions 

  Contact Me: Nicholas Garza
  Email: ${data.email}
  Github: www.githuib.com/${data.username}
`;
}

module.exports = generateMarkdown;
