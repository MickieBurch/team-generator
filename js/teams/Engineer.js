const Team = require("./Team");

class Engineer extends Team {
    constructor(name,email, id, github) {
        super(name, email, id)
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getMember(){
        return 'engineer'
    }
}

module.exports = Engineer