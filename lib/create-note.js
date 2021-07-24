#!usr/etc/bin node

const appRootPath = require('app-root-path').path;
const settings = require(`${appRootPath}/settings`);
const getCategories =  require(`${appRootPath}/lib/get-categories`);
const categories = getCategories();
const inquirer = require('inquirer');
const fs = require('fs-extra');
const child_process = require('child_process')

const dialog = () => {
	const questions = [
		{
			name: 'category',
			type: 'list',
			message: 'Choose a category:',
			choices: categories
		},
		{
			name: 'filename',
			type: 'input', 
			message: 'Choose a filename:',
			validate: (value) => {
				if (value.length) {
					return true;
				} else {
					return 'required';
				}
			}
		}
	];
	return inquirer.prompt(questions);
}

const createNote = async () => {
	try {

		// OPEN DIALOG
		const answers = await dialog();

		// THROW ERROR IF PATH ALREADY EXISTS
		if (await fs.pathExists(`${settings.metisDirectory}/${answers.category}/${answers.filename}`)) {
			throw 'Error: file already exists';
		}

		// CREATE FILE
		await fs.ensureFile(`${settings.metisDirectory}/${answers.category}/${answers.filename}`)
		console.log('Success: file has been created');

		// OPEN FILE
		const child = child_process.spawn('vim', [`${settings.metisDirectory}/${answers.category}/${answers.filename}`], {
			stdio: 'inherit'
		});
		child.on('exit', () => {
			console.log('Success: file has been closed');
		})

	} catch (err) {
		console.log(err);
	}

}

module.exports = createNote;