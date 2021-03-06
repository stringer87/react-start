const { exec } = require('child_process');
const fs = require('fs');
const clc = require('cli-color')

const { createDep, createDevDep, createClient, createPublic, createServer} = require('./fileCreation');

const init = (projectName) => {
    const npm = exec('npm init -y', {cwd: `/${projectName}`})
    npm.stdout.on('data', (data)=>{
        const scripts = {
            "server": "nodemon ./server/index.js",
            "webpack-dev": "webpack --progress --watch"
        }
        //get package.json data and set scripts for webpack and server
        data = data.split('json:')
        data = JSON.parse(data[1])
        data["scripts"] = scripts
        //write new package.json file with pretty-print
        fs.writeFile(`../${projectName}/package.json`, JSON.stringify(data, null, 4), (err)=>{
            if(err){
                console.log(clc.red(err))
            }
            console.log(clc.green('npm being added'))
            createDep(projectName)
            createDevDep(projectName)
            createClient(projectName)
            createPublic(projectName)
            createServer(projectName)
        }) 
    })
    
}



module.exports = {init}