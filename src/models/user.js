const Database = require('./database');

class User extends Database {
    constructor() {
        console.log('User model...');
        super();
        this.useCollection('users');
    }
}

module.exports = new User();