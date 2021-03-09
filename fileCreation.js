const { exec } = require('child_process');
const clc = require('cli-color')
const fs = require('fs')
const {client, clientApp, public, server} = require('./filetexts')

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

const createClient = (projectName) => {
    fs.mkdir(`../${projectName}/Client`, (err) => {
        if(err){
            throw err;
        }
        fs.mkdir(`../${projectName}/Client/Components`, (err) => {
            if(err) {
                throw err
            }
            fs.writeFile(`../${projectName}/Client/Components/app.jsx`, clientApp, (err) => {
                if(err) {
                    throw err
                }
            })
        })
        fs.writeFile(`../${projectName}/Client/index.jsx`, client, (err) => {
            if(err){
                throw err;
            }
        } )
    })
}

const createPublic = (projectName) => {
    fs.mkdir(`../${projectName}/Public`, (err) => {
        if(err){
            throw err;
        }
        fs.writeFile(`../${projectName}/Public/index.html`, public, (err) => {
            if(err){
                throw err
            }
        })
    })
}

const createServer = (projectName) => {
    fs.mkdir(`../${projectName}/Server`, (err) => {
        if(err) {
            throw err;
        }
        fs.writeFile(`../${projectName}/Server/index.js`, server, (err) => {
            if(err) {
                throw err
            }
        })
    })
}

module.exports = {
    createDep,
    createDevDep,
    createClient,
    createPublic,
    createServer
}