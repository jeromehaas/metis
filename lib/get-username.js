#!usr/bin/env node

const getUsername = () => {
	return require('os').userInfo().username;
}

module.exports = getUsername;