const Team = require("./team");

class Intern extends Team {
    constructor(title, name, email, id, school) {
        super(title, name, id, email)
        this.school = school;
    }
    getSchool() {
        return school
    }
    getMember(){
        return 'intern'
    }
}

module.exports = Intern