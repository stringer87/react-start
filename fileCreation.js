const { exec } = require('child_process');
const clc = require('cli-color')

const createDep = (projectName) => {
    const dep = 'axios express react react-dom nodemon'
        exec(`npm i --save ${dep}`,{cwd: `/${projectName}`}, (error) => {
        if(error){
            console.log(clc.red(error))
            return
        }
        console.log(clc.green('dependencies being added'))
    })
}

const createDevDep = (projectName) => {
    const devDep = '@babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli'
            exec(`npm i --save-dev ${devDep}`,{cwd: `/${projectName}`}, (error) => {
        if(error){
            console.log(clc.red(error))
            return
        }
    })
    console.log(clc.green('devDependencies being added'))
}

module.exports = {
    createDep,
    createDevDep
}