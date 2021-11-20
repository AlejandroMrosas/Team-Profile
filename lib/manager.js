const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email, github); 
    }
    getRole () {
        return "Manager"; 
    }
}


module.exports = Manager; 