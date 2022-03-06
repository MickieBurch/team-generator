const Team = require("./Team");

class Intern extends Team {
    constructor(name, email, id, school) {
        super(name, email, id)
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