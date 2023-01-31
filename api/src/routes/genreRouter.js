const { Router } = require('express');

const { getGenresHandler } = require("../handlers/genreHandlers");

const genreRouter = Router();

genreRouter.get("/", getGenresHandler);

module.exports = genreRouter;