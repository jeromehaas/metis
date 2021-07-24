#!/usr/bin/env node

const appRootPath = require('app-root-path').path;
const createNote = require(`${appRootPath}/lib/create-note`);

const run = async () => {
	createNote();
}

run();
