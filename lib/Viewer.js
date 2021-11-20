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
            return 'Please enter a name!';
          }
        }
      },
      {
        type: 'input',
        name: 'employeeId',
        message: 'What is employee Id? (Required)',
        validate: employeeId => {
          if (employeeId && !isNaN(employeeId)) {
            return true;
          } else {
            return 'Please enter Id and it should be a number!';
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
            return 'Please enter email!';
          }
        }
      },
    ]).then(({ employeeTitle, employeeName, employeeId, employeeEmail }) => {
        if(employeeTitle === 'Manager'){
          this.getManager(employeeName, employeeId, employeeEmail);
        }
        if(employeeTitle === 'Engineer'){
          this.getEngineer(employeeName, employeeId, employeeEmail);
        }
        if(employeeTitle === 'Intern'){
          this.getIntern(employeeName, employeeId, employeeEmail);
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
              if (officeNumber && !isNaN(officeNumber)) {
                return true
              } else {
                return 'Please enter office number and it should be a number!';
              }
            }
          },
        ).then(({ officeNumber }) => {
          this.employeesData.push(new Manager(name, id, email, officeNumber));
          this.initializeEmployee();
          });
    }

    getEngineer(name, id, email){
      inquirer
      .prompt(
        {
          type: 'input',
          name: 'github',
          message: 'What is github username? (Required)',
          validate: github => {
            if (github) {
              return true
            } else {
              return 'Please enter github username!';
            }
          }
        },
      ).then(({ github }) => {
        this.employeesData.push(new Engineer(name, id, email, github));
        this.initializeEmployee();
        });
    }

    getIntern(name, id, email){
      inquirer
      .prompt(
        {
          type: 'input',
          name: 'school',
          message: 'What is school name? (Required)',
          validate: school => {
            if (school) {
              return true
            } else {
              return 'Please enter school name!';
            }
          }
        },
      ).then(({ school }) => {
        this.employeesData.push(new Intern(name, id, email, school));
        this.initializeEmployee();
        });
      
    }

    generateHtml(){
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