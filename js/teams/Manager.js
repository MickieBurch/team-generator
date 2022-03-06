const Team = require("./Team");

class Manager extends Team{
    constructor(name,email,id,office)
    {
        super(name,email,id)
        this.office = office; 
    }
    
        getOffice(){
            return this.office
        }
        getMember(){
            return 'manager'
        }
}

module.exports=Manager