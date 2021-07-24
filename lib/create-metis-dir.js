#!usr/etc/bin node

const appRootPath = require('app-root-path').path;
const categories = require(`${appRootPath}/lib/get-categories`)();
const settings = require(`${appRootPath}/settings`);
const fs = require('fs-extra');

const createMetisDir = async () => {
	
	try {
 
		// THROW ERROR IF THE DIRECTORY '.metis' ALREADY EXISTS
		if (await fs.pathExists(`${settings.metisDirectory}`)) {
      throw 'Error: the directory for metis does already exist';
    }

		// THROW ERROR IF ONE OF THE FOLDERS OF THE CATEGORIES ALREADY EXISTS
		const existingCategories = [];
		for (category of categories) {
			if ( await fs.pathExists(`${settings.metisDirectory}/${category}`)) {
				existingCategories.push(category);
			}
		}
		if (existingCategories.length) {
			throw `Error: the directories ${existingCategories} already exist`;
		}

		// CREATE METIS DIRECOTY
    await fs.ensureDir(`${settings.metisDirectory}`);
    console.log('Success: the directory for metis has been created');

		// CREATE CATEGORY DIRECTORIES
		for (category of categories) {
			await fs.ensureDir(`${settings.metisDirectory}/${category}`);
		}

  } catch (err) {

    console.log(err);
		
  }

}

createMetisDir();

module.exports = createMetisDir;