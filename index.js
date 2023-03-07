const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require("fs");  
const Employee = require('./lib/Employee');



const team = [];

// what is the minumim info we need (?)
// name , id, email , unknown(?)
// How do we gather that info(?) --> inquirer


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
            name: "ID",
            message: "What is the Manager's ID?"
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
        
        // now that we have data... what do we do with it(?)
        /*   const newUserData = {
            name: data.name,
            id: data.ID, 
            email: data.email
        }  // --> literal object notation
        */
       
       
       // Create a New INSTANCE of an EMPLOYEE object
       const newEmployee = new Manager(data.name, data.ID, data.email, data.officeNumber);
       
       console.log("Employee: ", newEmployee);
       
       // Add new team memeber
       team.push(newEmployee);
       
       console.log("Team: ", team);
       
       // Ok now What(?) ... 
       // we present the user with another question set
       addMore();
       
    })
    .catch(error => {
        throw error
    })
    
}

start()


function addMore() {
    
    inquirer.prompt([
        {
            type: 'list',
            name: "add",
            message: "Do you want to add more team members?",
            choices: ["Manager", "Engineer", "Intern", "No More"]
        },
    ])
    .then(data => {
        console.log("Data: ", data);

        // based on users choice we want to setup a SELECT / Conditional Statement

        if(data.add == "Engineer") {
            console.log("Createing new Egineer");
            // run the logic to create a new Engineer Instance --> add to team
        }
    })
    .catch(error => {
        throw error;
    });
}

