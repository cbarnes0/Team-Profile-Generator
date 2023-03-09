const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require("fs");  
const buildsite = require('./src/buildsite');

const team = [];


function start() {

    // using inquirer we gather data

    // ASSUMING the first Team memeber is a MANAGER
    inquirer.prompt([
        {
            type: 'input',
            name: "name",
            message: "What is the Manager's name?"
        },
        {
            type: 'input',
            name: "id",
            message: "What is the Manager's id?"
        },
        {
            type: 'input',
            name: "email",
            message: "What is the Manager's email?"
        },
        {
            type: 'input',
            name: "officeNumber",
            message: "What is the Manager's office number?"
        },
    ])
    .then(data => {
        console.log("Data: ", data);
    
       // Create a New INSTANCE of an EMPLOYEE object
       const newEmployee = new Manager(data.name, data.id, data.email, data.officeNumber);
       
       console.log("Employee: ", newEmployee);
       
       // Add new team memeber
       team.push(newEmployee);

       // Ok now What(?) ... 
       // we present the user with another question set
       addMore();
       
    })
    .catch(error => {
        throw error
    });
    
};

function addMore() {
    
    inquirer.prompt([
        {
            type: 'list',
            name: "add",
            message: "Do you want to add more team members?",
            choices: ["Engineer", "Intern", "No More"]
        },
    ])
    .then(data => {
        switch (data.add) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                finishTeam();
        }
    })
    .catch(error => {
        throw error;
    });
};

function addEngineer() {
    console.log('Adding New Engineer');

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
        },
        {
            type: 'input',
            name: "id",
            message: "Enter employee id"
        },
        {
            type: 'input',
            name: "email",
            message: "Enter your email address"
        },
        {
            type: 'input',
            name: "github",
            message: "Enter your Github username"
        },
    ]).then(data => {
        console.log("Data: ", data);
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        addMore();
    }).catch(error => {
        throw error
    });
};

function addIntern() {
    console.log('Adding New Intern');

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
        },
        {
            type: 'input',
            name: "id",
            message: "Enter inter id"
        },
        {
            type: 'input',
            name: "email",
            message: "Enter your email address"
        },
        {
            type: 'input',
            name: "school",
            message: "Enter your school"
        },
    ]).then(data => {
        console.log("Data: ", data);
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        addMore();
    }).catch(error => {
        throw error
    });
};

function finishTeam() {
    console.log('Finish Building the Team');

    const builtTeam = buildsite(team);
    // ???
    fs.writeFileSync('./dist/index.html', buildsite(team), 'utf-8');
};

start();