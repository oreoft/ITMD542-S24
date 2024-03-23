var express = require('express');
var router = express.Router();
const contactsRepo = require('../src/contactsSqliteRepository');

router.get('/', function (req, res, next) {
    contactsRepo.findAll()
        .then(data => res.render('contact/contacts', {title: "YiFan's Contacts APP(Sqlite Edition)", contacts: data}))
});

router.get('/add', function (req, res, next) {
    res.render('contact/contacts_add', {title: 'Add a Contact'});
});

router.post('/add', function (req, res, next) {
    let msgs = []
    msgs.push(checkFieldIsEmpty(req.body.firstName, "firstName"))
    msgs.push(checkFieldIsEmpty(req.body.lastName, "lastName"))
    msgs = msgs.filter(e => e)
    if (msgs.length > 0) {
        res.render('contact/contacts_add', {title: 'Add a Contact', msgs: msgs});
    } else {
        contactsRepo.create(req.body);
        res.redirect('/contacts');
    }
});

function checkFieldIsEmpty(field, fieldName) {
    if (field.trim() === '') {
        return `Contact ${fieldName} can not be empty!`
    }
}

/* GET a contact */
router.get('/:uuid', function (req, res, next) {
    contactsRepo.findById(req.params.uuid)
        .then(contact => {
            if (contact) {
                res.render('contact/contact', {title: 'Your Contact', contact: contact});
            } else {
                res.redirect('/contacts');
            }
        })
});

router.get('/:uuid/delete', function (req, res, next) {
    contactsRepo.findById(req.params.uuid)
        .then(contact => res.render('contact/contacts_delete', {title: 'Delete Contact', contact: contact}))
});

router.post('/:uuid/delete', function (req, res, next) {
    contactsRepo.deleteById(req.params.uuid);
    res.redirect('/contacts');
});

router.get('/:uuid/edit', function (req, res, next) {
    contactsRepo.findById(req.params.uuid)
        .then(contact => res.render('contact/contacts_edit', {title: 'Edit Contact', contact: contact}));
});

router.post('/:uuid/edit', function (req, res, next) {
    let msgs = []
    msgs.push(checkFieldIsEmpty(req.body.firstName, "firstName"))
    msgs.push(checkFieldIsEmpty(req.body.lastName, "lastName"))
    msgs = msgs.filter(e => e)
    if (msgs.length > 0) {
        const contact = contactsRepo.findById(req.params.uuid)
            .then(contact => res.render('contact/contacts_edit', {title: 'Edit Contact', msgs: msgs, contact: contact}));
    } else {
        req.body.id = req.params.uuid
        req.body.lastEdited = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        contactsRepo.update(req.body);
        res.redirect('/contacts');
    }
});

module.exports = router;
