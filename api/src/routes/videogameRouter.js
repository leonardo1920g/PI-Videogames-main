const { Router } = require('express');

const {
    createVideogameHandler,
    getVideogameHandler,
    getVideogamesHandler,
} = require("../handlers/videogameHandlers");

const videogameRouter = Router();

videogameRouter.get("/", getVideogamesHandler);

videogameRouter.get("/:id", getVideogameHandler);

videogameRouter.post("/", createVideogameHandler);


module.exports = videogameRouter;