var express = require('express');
var router = express.Router();
const moviesRepo = require('../src/moviesMongoRepository'); // Adjust the path as necessary

// Display all movies
router.get('/', function (req, res, next) {
    moviesRepo.findAll()
        .then(data => res.render('movie/movies', {title: "YiFan's Movie Collection", movies: data}))
});

// Display form to add a new movie
router.get('/add', function (req, res, next) {
    res.render('movie/movies_add', {title: 'Add a Movie'});
});

// Handle adding a new movie
router.post('/add', function (req, res, next) {
    let msgs = []
    msgs.push(checkFieldIsEmpty(req.body.title, "Title"))
    msgs.push(checkFieldIsEmpty(req.body.director, "Director"))
    msgs.push(checkFieldIsEmpty(req.body.year, "Year"))
    msgs = msgs.filter(e => e)
    if (msgs.length > 0) {
        res.render('movie/movies_add', {title: 'Add a Movie', msgs: msgs});
    } else {
        moviesRepo.create(req.body);
        res.redirect('/movies');
    }
});

function checkFieldIsEmpty(field, fieldName) {
    if (field.trim() === '') {
        return `${fieldName} cannot be empty!`
    }
}

// Display a single movie
router.get('/:uuid', function (req, res, next) {
    moviesRepo.findById(req.params.uuid)
        .then(movie => {
            if (movie) {
                res.render('movie/movie', {title: 'Movie Details', movie: movie});
            } else {
                res.redirect('/movies');
            }
        })
});

// Display form to confirm deletion of a movie
router.get('/:uuid/delete', function (req, res, next) {
    moviesRepo.findById(req.params.uuid)
        .then(movie => res.render('movie/movies_delete', {title: 'Delete Movie', movie: movie}))
});

// Handle movie deletion
router.post('/:uuid/delete', function (req, res, next) {
    moviesRepo.deleteById(req.params.uuid);
    res.redirect('/movies');
});

// Display form to edit a movie
router.get('/:uuid/edit', function (req, res, next) {
    moviesRepo.findById(req.params.uuid)
        .then(movie => res.render('movie/movies_edit', {title: 'Edit Movie', movie: movie}));
});

// Handle editing a movie
router.post('/:uuid/edit', function (req, res, next) {
    let msgs = []
    msgs.push(checkFieldIsEmpty(req.body.title, "Title"))
    msgs.push(checkFieldIsEmpty(req.body.director, "Director"))
    msgs.push(checkFieldIsEmpty(req.body.year, "Year"))
    msgs = msgs.filter(e => e)
    if (msgs.length > 0) {
        moviesRepo.findById(req.params.uuid)
            .then(movie => res.render('movie/movies_edit', {title: 'Edit Movie', msgs: msgs, movie: movie}));
    } else {
        req.body.id = req.params.uuid
        moviesRepo.update(req.body);
        res.redirect('/movies');
    }
});

module.exports = router;
