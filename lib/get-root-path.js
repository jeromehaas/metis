#!usr/bin/env node

const appRootPath = require('app-root-path');

const getRootPath = () => {
	console.log(appRootPath.path);
	console.log('hello');
	return appRootPath.path; 
}

getRootPath();

module.exports = getRootPath;