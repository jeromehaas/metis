#!/usr/bin/env node

const getUsername = require('./lib/get-username');
const functions = require('./lib/functions');
const settings = require('./settings.json');
const clear = require('clear');

const run = async () => {
  clear();
	const username = getUsername();	
	console.log(username);
}

run();
