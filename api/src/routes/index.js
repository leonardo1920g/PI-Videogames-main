const { Router } = require('express');
// Importar todos los routers;
const videogameRouter = require("./videogameRouter");
const genreRouter = require("./genreRouter");

const routes = Router();

// Configurar los routers
routes.use("/videogame", videogameRouter);
routes.use("/genre", genreRouter);

module.exports = routes;
