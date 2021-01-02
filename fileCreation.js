const { exec } = require('child_process');

const init = (projectName) => {
    exec('npm init -y',{cwd: `/${projectName}`}, (error, stdout, stderr) => {
        if(error){
            console.log(error)
            return
        }
        if(stderr){
            console.log(stderr)
            return
        }
    })
}

const createDep = (projectName) => {
    const dep = 'axios express react react-dom nodemon'
        exec(`npm i --save ${dep}`,{cwd: `/${projectName}`}, (error, stdout, stderr) => {
        if(error){
            console.log(error)
            return
        }
        if(stderr){
            console.log(stderr)
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
        if(stderr){
            console.log(stderr)
            return
        }
    })
}

module.exports = {
    init,
    createDep,
    createDevDep
}