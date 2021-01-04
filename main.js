const { exec } = require('child_process');
const fs = require('fs');
const prompt = require('prompt-sync')();
const clc = require('cli-color');

const {init} = require('./npmInit')
const {babel, webpack, ignore} = require('./filetexts');
const { toUpperCase } = require('cli-color/beep');

let newProjectName = '../'
let duplicateFileRes = 'N';
const name = prompt(clc.cyan('What do you want the project name to be: ')) || 'New-Project';
newProjectName += name;

const createProject = () => {
    fs.writeFile(`${newProjectName}/.babelrc`, JSON.stringify(babel, null, 4),(err)=> errFunc(err))
    fs.writeFile(`${newProjectName}/webpack.config.js`, webpack,(err)=> errFunc(err))
    fs.writeFileSync(`${newProjectName}/.gitignore`, ignore, (err) => errFunc(err))
    init(name)
}

const errFunc = (err) => {
    //checking for error and directory already exists
    if(err && fs.existsSync(newProjectName)){
        console.log(clc.red('ERROR: file already exists'))
        duplicateFileRes = prompt(clc.yellow('Do you want to overwrite this file[Y, N]: ') || duplicateFileRes)
        if(duplicateFileRes.toUpperCase() === 'N'){
            console.log(clc.magenta('Exiting Program'))
            process.exit();
        } else if(duplicateFileRes.toUpperCase() === 'Y'){
            //remove all files if project directory
            exec(`rm -rf ${newProjectName}/.`, (error) => {
                createProject()
            })
        }
    } else if(err){
        console.log(clc.red(err))
    }
    
}




fs.mkdir(newProjectName, (err)=> {
    errFunc(err)
    if(!err){
        console.log(clc.green(`directory ${name} added`))
        createProject()
    }
})


