#!usr/bin/env node

const appRootPath = require('app-root-path');

const getRootPath = () => {
	return appRootPath.path; 
}

module.exports = getRootPath;