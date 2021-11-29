const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./generateHTML');
const team = [];


const generalQuestions = [
    {type: "list", message: "What type of employee you would like to add?", choices: ['Engineer', 'Intern','exit'], name: "choice"},
]

const managerQuestions = [
    {type: "input", message: "What is the manager's name?", name: "name"},
    {type: "number", message: "What is the manager's id?", name: "id"},
    {type: "input", message: "What is the manager's email?", name: "email"},
    {type: "number", message: "What is the manager's office number?", name: "officeNumber"}
]

const engineerQuestions = [
    {type: "input", message: "What is the engineer's name?", name: "name"},
    {type: "number", message: "What is the engineer's id?", name: "id"},
    {type: "input", message: "What is the engineer's email?", name: "email"},
    {type: "number", message: "What is the engineer's github?", name: "github"}
]

const internQuestions = [
    {type: "input", message: "What is the intern's name?", name: "name"},
    {type: "number", message: "What is the intern's id?", name: "id"},
    {type: "input", message: "What is the intern's email?", name: "email"},
    {type: "number", message: "What is the intern's office school?", name: "school"}
]
const addToTeam = function() {
    inquirer.prompt(generalQuestions)
  .then((userChoice) => {
      if (userChoice.choice == 'Engineer'){
          addEngineer();
      }
      else if (userChoice.choice == 'Intern'){
          addIntern();
      }
      else 
      {
       generateHtml();
      }
  })
}

const generateHtml = function (){
    
}

const addManager = function() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        console.log(team);
        addToTeam();
    })
}

const addEngineer = function() {
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.gitHub);
        team.push(engineer);
        console.log(team);
        addToTeam();
    })
}

const addIntern = function() {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        console.log(team);
        addToTeam();
    })
}

inquirer.prompt(managerQuestions) 
 .then((answers) => {
  const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
  team.push(manager);
  console.log(team);
  addToTeam();
 })

 module.exports = team;
 
