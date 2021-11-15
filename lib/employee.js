class Employee {
    constructor (employeeName, employeeId, employeeEmail, github) {
        this.name = employeeName;
        this.id = employeeId;
        this.email = employeeEmail 
        this.github = github
    }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }   
    getEmail () {
        return this.email;
    }
    getgithub () {
        return this.github;
    }
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 