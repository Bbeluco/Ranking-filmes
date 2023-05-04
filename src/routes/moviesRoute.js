import express from 'express';
import moviesController from '../controllers/moviesController.js'

const moviesRouter = express.Router();

moviesRouter.get('/list', moviesController.showMovieList);

export default moviesRouter;