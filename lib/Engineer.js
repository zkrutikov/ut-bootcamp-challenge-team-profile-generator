//Importing Employee constructor 
const Employee = require("./Employee");

//Engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
//Calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    //Returning github from input 
    getGithub () {
        return this.github;
    }

    //Override employee role to engineer
    getRole () {
        return "Engineer";
    }
}

//To be exported 
module.exports = Engineer; 