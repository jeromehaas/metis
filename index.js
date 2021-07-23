#!/usr/bin/env node
const functions = require('./lib/functions')
const settings = require('./settings.json')
const clear = require('clear');

const run = async () => {
  clear();
  await functions.createNewNote();
}

run();
