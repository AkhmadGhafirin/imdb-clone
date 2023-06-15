'use strict'

const { Movie, User, Cast, Genre } = require('../models')

class MovieController {
    static async fetchMovies(req, res, next) {
        try {
            const movies = await Movie.findAll({
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }
                    },
                    {
                        model: Genre,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                    {
                        model: Cast,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                ]
            })
            res.status(200).json(movies)
        } catch (err) {
            next(err)
        }
    }

    static async fetchMovieBySlug(req, res, next) {
        try {
            const { slug } = req.params
            const movie = await Movie.findOne({
                where: { slug },
                include: [
                    {
                        model: Genre,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                    {
                        model: Cast,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                ]
            })
            res.status(200).json(movie)
        } catch (err) {
            next(err)
        }
    }

    static async fetchMovieById(req, res, next) {
        try {
            const { id } = req.params
            const movie = await Movie.findOne({
                where: { id },
                include: [
                    {
                        model: Genre,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                    {
                        model: Cast,
                        attributes: { exclude: ['createdAt', 'updatedAt'] }
                    },
                ]
            })
            res.status(200).json(movie)
        } catch (err) {
            next(err)
        }
    }

    static async createMovie(req, res, next) {
        try {

        } catch (err) {
            next(err)
        }
    }

    static async updateMovie(req, res, next) {
        try {

        } catch (err) {
            next(err)
        }
    }

    static async deleteMovie(req, res, next) {
        try {

        } catch (err) {
            next(err)
        }
    }
}

module.exports = MovieController