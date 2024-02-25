#!/usr/bin/env node
const { program } = require('commander');

program.name('thor-cli').usage('<command> [option]');

program.parse(process.argv);
