'use strict'
const express = require('express')
const GenreController = require('../controllers/genres')
const authentication = require('../middlewares/authentication')
const router = express.Router()

router.get('/', authentication, GenreController.fetchGenres)
router.post('/', authentication, GenreController.createGenre)
router.put('/:id', authentication, GenreController.updateGenre)
router.delete('/:id', authentication, GenreController.deleteGenre)

module.exports = router