// repo.js
const {openDb} = require('./database');

const repo = {
    findAll: async () => {
        const db = await openDb();
        return db.all('SELECT * FROM contacts');
    },
    findById: async (uuid) => {
        const db = await openDb();
        return db.get('SELECT * FROM contacts WHERE id = ?', [uuid]);
    },
    create: async (contact) => {
        const db = await openDb();
        const {firstName, lastName, emailAddress, notes} = contact;
        const id = require('crypto').randomUUID();
        const lastEdited = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        await db.run('INSERT INTO contacts (id, firstName, lastName, emailAddress, notes, lastEdited) VALUES (?, ?, ?, ?, ?, ?)', [id, firstName, lastName, emailAddress, notes, lastEdited]);
    },
    deleteById: async (uuid) => {
        const db = await openDb();
        await db.run('DELETE FROM contacts WHERE id = ?', [uuid]);
    },
    update: async (contact) => {
        const db = await openDb();
        const {id, firstName, lastName, emailAddress, notes, lastEdited} = contact;
        await db.run('UPDATE contacts SET firstName = ?, lastName = ?, emailAddress = ?, notes = ?, lastEdited = ? WHERE id = ?', [firstName, lastName, emailAddress, notes, lastEdited, id]);
    },
};

module.exports = repo;
