//Importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
//Calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

//Returning school from input 
    getSchool () {
        return this.school;
    }

//Override employee role to intern
    getRole () {
        return "Intern";
    }
}

//To be exported 
module.exports = Intern; 