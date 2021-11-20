const inquirer = require('inquirer');
const fs = require('fs');
const getTemplate = require('../src/page-template');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
class Viewer {
    constructor() {
      this.employeesData = [];
    }
    initializeEmployee(){
    inquirer
        .prompt(
            {
                type: 'confirm',
                name: 'confirmInitialize',
                message: 'Would you like to add a Employee to your Viewer?',
                default: true
            }
        ).then(({ confirmInitialize }) => {
            if(confirmInitialize){
                this.generateData();
            } else {
              this.generateHtml()
            }
          });
    }

    generateData(){
      inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeTitle',
        message: 'What is the title of Employee?',
        choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'employeeName',
        message: 'What is employee name? (Required)',
        validate: employeeName => {
          if (employeeName) {
            return true;
          } else {
            console.log('Please enter a name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'What is employee Id? (Required)',
        validate: employeeId => {
          if (isNaN(employeeId)) {
            console.log('Please enter Id!');
            return false;
          } else {
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is employee Email? (Required)',
        validate: employeeEmail => {
          if (employeeEmail) {
            return true;
          } else {
            console.log('Please enter email!');
            return false;
          }
        }
      },
    ]).then(({ employeeTitle, employeeName, employeeId, employeeEmail }) => {
        if(employeeTitle === 'Manager'){
          this.getManager(employeeName, employeeId, employeeEmail);
        }
        if(employeeTitle === 'Engineer'){
        }
        if(employeeTitle === 'Intern'){
        }
      });
        return this.employeesData;
    }

    getManager(name, id, email){
        inquirer
        .prompt(
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is office Number? (Required)',
            validate: officeNumber => {
              if (isNaN(officeNumber)) {
                console.log('Please enter office Number!');
                return false;
              } else {
                return true;
              }
            }
          },
        ).then(({ officeNumber }) => {
          this.employeesData.push(new Manager(name, id, email, officeNumber));
          this.initializeEmployee();
          });
    }

    getEngineer(name, id, email){
      
      const engineer = new Engineer(employeeName, employeeId, employeeEmail);
    }

    getIntern(name, id, email){

      const intern = new Intern(employeeName, employeeId, employeeEmail);
      
    }

    generateHtml(){
      console.log(this.employeesData)
      this.writeToFile("./dist/index.html", getTemplate(this.employeesData));
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