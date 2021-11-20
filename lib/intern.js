class Intern {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    get name() { return this.name; }
    get id() { return this.id; }
    get email() { return this.email; }
    get github() { return this.github;}
}

module.exports = Intern; 