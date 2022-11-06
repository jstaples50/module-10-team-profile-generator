const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (typeof github !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'github', to be a non-empty string")
        }

        super(name, id, email)
        this.github = github;
        this.role = 'Engineer';
    }

    getGitHub() {
        return this.github;
    }
}


module.exports = Engineer;
















