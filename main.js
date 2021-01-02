const { exec } = require('child_process');
const fs = require('fs');
const prompt = require('prompt-sync')();

const {init, createDep, createDevDep} = require('./fileCreation');

let newProjectName = '../'

const name = prompt('What do you want the project name to be: ') || 'New-Project';
newProjectName += name;

fs.mkdir(newProjectName, (err)=> {
    if(err){
     console.log(err)
    }
})

init(name)
createDep(name)
createDevDep(name)

