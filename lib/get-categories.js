#!usr/bin/env node

const appRootPath = require('app-root-path').path;
const settings = require(`${appRootPath}/settings.json`);
const fs = require('fs-extra');

const getCategories = async () => {

	try {

		// ARRAY TO STORE EXISTING CATEGORIES IN METIS DIRECTORY
		const categories  = [];

		// GET ALL DIRECTORIES IN METIS DIRECTORY			
		fs.readdirSync(settings.metisDirectory).filter((file) => {
			if (fs.statSync(settings.metisDirectory+'/'+file).isDirectory()) {
				categories.push(file);
			}
		});

		return categories;

	} catch (err) {
		console.log(err);
	}

}

module.exports = getCategories;