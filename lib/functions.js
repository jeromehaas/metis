const fs = require('fs-extra')
const settings = require('../settings.json');
const inquirer = require('inquirer');

const dialog = () => {
  const questions = [
    {
      name: 'filename',
      type: 'input',
      message: 'Enter filename:',
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return 'required'
        }
      }
    }
  ];
  return inquirer.prompt(questions);
}

const createNewNote = async () => {
  try {
    const answers = await dialog();
    if (await fs.pathExists(`${settings.notePath}/${answers.filename}`)) {
      throw 'Error: file exists already';
    }
    await fs.ensureFile(`${settings.notePath}/${answers.filename}`);
    console.log('Success: file has been created');
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createNewNote
}
