const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function openDb() {
    return open({
        filename: './data/contacts.db',
        driver: sqlite3.Database,
    });
}

async function setupDatabase() {
    const db = await openDb();
    await db.exec(`CREATE TABLE IF NOT EXISTS contacts (
        id TEXT PRIMARY KEY,
        firstName TEXT,
        lastName TEXT,
        emailAddress TEXT,
        notes TEXT,
        lastEdited TEXT
    )`);
}

module.exports = { openDb, setupDatabase };
