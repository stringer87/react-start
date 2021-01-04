const { exec } = require('child_process');

const createDep = (projectName) => {
    const dep = 'axios express react react-dom nodemon'
        exec(`npm i --save ${dep}`,{cwd: `/${projectName}`}, (error, stdout, stderr) => {
        if(error){
            console.log(error)
            return
        }

    })
}

const createDevDep = (projectName) => {
    const devDep = '@babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli'
            exec(`npm i --save-dev ${devDep}`,{cwd: `/${projectName}`}, (error, stdout, stderr) => {
        if(error){
            console.log(error)
            return
        }
    })
}

module.exports = {
    createDep,
    createDevDep
}