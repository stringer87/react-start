const { exec } = require('child_process');
const fs = require('fs')

const { createDep, createDevDep} = require('./fileCreation');

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
                console.log(err)
            }
            createDep(projectName)
            createDevDep(projectName)
        }) 
    })
}



module.exports = {init}