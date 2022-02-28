//Importing Employee constructor 
const Employee = require('./Employee');

//Manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
//Calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }
// return office number
    getOfficeNumber () {
        return this.officeNumber;
    }
//Override employee role to manager 
    getRole () {
        return "Manager";
    }
}

//To be exported 
module.exports = Manager; 