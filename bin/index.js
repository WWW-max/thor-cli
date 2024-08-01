#!/usr/bin/env node
const { program } = require('commander');
const gitclone = require('gitclone');
const childProcess = require('child_process');

const localPath = '~/project';

/** 描述信息 */
program.name('thor-cli')
       .description('A CLI that helps you clone git projects into ~/project wherever you are.')
       .usage('<command> [option]')
       .version('1.0.0');

/** 定义命令 */
program.command('c <url>')
.description('克隆项目')
.action((repoURL) => {
console.log('[ 工程名称 ] >', repoURL);
gitclone(repoURL, localPath, (error, gitFolder) => {
    if (error) {
      console.error('Error cloning repository:', error);
    } else {
      console.log('Repository cloned successfully:', gitFolder);
      childProcess.exec(`code ${gitFolder} `);
    }
  });
});

/** 解析命令 */
program.parse(process.argv);
