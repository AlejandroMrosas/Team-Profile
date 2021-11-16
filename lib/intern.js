class Intern {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    get name() { return this.name; }
    get id() { return this.id; }
    get github() { return this.github; }
    get github_id() { return this.github;}
}

module.exports = Intern; 