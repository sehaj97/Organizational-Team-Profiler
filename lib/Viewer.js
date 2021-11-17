const inquirer = require('inquirer');
const fs = require('fs');
const getTemplate = require('../src/page-template');
class Viewer {
    constructor() {
      this.employeesData = [];
    }
    initializeEmployeesData(){
    inquirer
        .prompt(
            {
                type: 'confirm',
                name: 'confirmInitialize',
                message: 'Would you like to start building your team viewer profile?',
                default: true
            }
        ).then(({ confirmInitialize }) => {
            if(confirmInitialize){
                this.writeToFile("./dist/index.html", this.generateHtml(this.getData()));
            }
          });
    }

    getData(){
        return this.employeesData;
    }
    generateHtml(){
        return getTemplate();
    }

    writeToFile(fileName, data){
        return new Promise((resolve, reject) => {
          fs.writeFile(fileName, data, err => {
            
            console.log('file is generated in dist folder with the name of index.html!');
            if (err) {
              reject(err);
              return;
            }
            resolve({
              ok: true,
              message: 'File created!'
            });
          });
        });
      
      }
}
module.exports = Viewer;