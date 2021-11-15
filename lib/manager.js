const Employee = require('./Employee');

class Manager extends Employee {
    constructor (managerName, managerId, managerEmail, github) {
        super (managerName, managerId, managerEmail, github); 
    }
    getRole () {
        return "Manager";
    }
}


module.exports = Manager; 