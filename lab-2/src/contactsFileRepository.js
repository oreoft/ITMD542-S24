const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const db = new Map();

const loadData = () => {
    const jsonData = fs.readFileSync(path.join(__dirname, '../data/contacts.json'));
    const contactsArray = JSON.parse(jsonData);
    contactsArray.forEach((element) => {
        db.set(element[0], element[1]);
    });
};

const initData = () => {
    db.set('b5bb0f35-e7ff-4700-8921-e13c95fa8be9', {
        id: 'b5bb0f35-e7ff-4700-8921-e13c95fa8be9',
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john.doe@example.com",
        notes: "Met during the international tech conference, interested in AI technologies.",
        lastEdited: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    });
    db.set('15628bf8-a38c-48ad-8e49-cde1583bc4e1', {
        id: '15628bf8-a38c-48ad-8e49-cde1583bc4e1',
        firstName: "Michael",
        lastName: "Johnson",
        emailAddress: "michael.johnson@example.com",
        notes: "Introduced by a mutual contact, interested in software development collaboration.",
        lastEdited: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    });
}

const saveData = () => {
    const stringifyData = JSON.stringify(Array.from(db));
    if (db.size > 100) {
        throw new Error("Sorry, the limit has been reached and no more contacts can be added.");
    }
    fs.writeFileSync(path.join(__dirname, '../data/contacts.json'), stringifyData);
};

const repo = {
    findAll: () => Array.from(db.values()),
    findById: (uuid) => db.get(uuid),
    create: (contact) => {
        const newContact = {
            id: crypto.randomUUID(),
            firstName: contact.firstName,
            lastName: contact.lastName,
            emailAddress: contact.emailAddress,
            notes: contact.notes,
            lastEdited: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
        };
        db.set(newContact.id, newContact);
        saveData();
    },
    deleteById: (uuid) => {
        db.delete(uuid);
        saveData();
    },
    update: (contact) => {
        db.set(contact.id, contact);
        saveData();
    },

};

initData();
loadData();

module.exports = repo;
