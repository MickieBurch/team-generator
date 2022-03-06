const team = require("./team");

class manager extends team{
    constructor(title,name,id,email)
    {
        super(title,name,id,email)
        this.office = office; 
    }
    
        getOffice(){
            return this.office
        }
        getMember(){
            return 'manager'
        }
}

module.exports=manager