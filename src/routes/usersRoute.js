import express from "express";
import usersController from "../controllers/usersController.js"

const usersRoute = express.Router();

usersRoute.get('/', usersController.listUsers);
usersRoute.post('/', usersController.createUser);
usersRoute.delete('/:id', usersController.deleteUser);
usersRoute.put('/:id/addMovie', usersController.appendMovie);

export default usersRoute;