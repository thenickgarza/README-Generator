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
    ## Description
    
    ${descriptionText}`;
 };
};

const renderInstallation = installText => {
  if (!installText) {
    return '';
  } else {
    return `
    ## Installation
    
    ${installText}`;
  };
};

const renderUsage = usageText => {
  if (!usageText) {
    return '';
  } else {
    return `
    ## Usage
    
    ${usageText}`;
  };
};

const renderCredits = creditText => {
  if (!creditText) {
    return '';
  } else {
    return `
    ## Credits
    
    ${creditText}`;
  };
};

const renderContributing = contText => {
  if (!contText) {
    return '';
  } else {
    return `
    ## Contributing
    
    ${contText}`;
  };
};

const renderTests = testText => {
  if (!testText) {
    return '';
  } else {
    return `
    ## Tests
    
    ${testText}`;
  };
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  ## ${data.name}

  ${renderDescription(data.description)}
  ${renderInstallation(data.installation)}
  ${renderUsage(data.usage)}
  ${renderCredits(data.credits)}
  ${renderContributing(data.contributing)}
  ${renderTests(data.tests)}


`;
}

module.exports = generateMarkdown;
