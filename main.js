const { exec } = require('child_process');
const fs = require('fs');
const prompt = require('prompt-sync')();

const {init} = require('./npmInit')
const {babel, webpack, ignore} = require('./filetexts')

let newProjectName = '../'

const name = prompt('What do you want the project name to be: ') || 'New-Project';
newProjectName += name;

const errFunc = (err) => {
    if(err) console.log(err)
}

fs.mkdir(newProjectName, (err)=> {
    errFunc(err)
})
fs.writeFile(`${newProjectName}/.babelrc`, JSON.stringify(babel, null, 4),(err)=> errFunc(err))
fs.writeFile(`${newProjectName}/webpack.config.js`, webpack,(err)=> errFunc(err))
fs.writeFileSync(`${newProjectName}/.gitignore`, ignore, (err) => errFunc(err))
init(name)

