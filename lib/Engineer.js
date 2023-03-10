const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {
        super(name, id, email);

        this.githubUserName = githubUserName;
    }
    getGithubUserName() {
        return this.githubUserName;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;