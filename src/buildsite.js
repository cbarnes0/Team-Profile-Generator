function buildsite(team) {
    console.log(team);

    const html = [];

    const generateManager = manager => {
        console.log(manager);
        // create managerHtml
        let managerHtml = ``;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        // create engineerHtml
        let engineerHtml = ``;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(engineer);
        // create internHtml
        let internHtml = ``;
        html.push(engineerHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {

    //enter boilerplate here
    return ``
}