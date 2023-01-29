require('dotenv').config();
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const cleanArray = (arr) =>
    arr.map((elem) => {
   
    return {
    
        id: elem.id,
        name: elem.name,
        description: elem.description,
        released: elem.released, 
        rating: elem.rating, 
        platforms: elem.platforms.map((p) => p.platform.name),
        image: elem.background_image,
        genres: elem.genres.map((p) => p.name),
        created: false,
    }
});
  
const createVideogame = async (
    name, description,  released, rating, platforms) => {    
    return await Videogame.create({ name, description,  released, rating, platforms }); 
};

const getVideogameById = async (id, source) => { // incluir los generos asociados

    const videogame = source === "api" 
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
            : await videogame.findByPk(id, {
                include: {
                    model: Genre,
                    attributes: [ "name" ],
                },
            }); 

    return videogame;
};

const getAllVideogames = async() => {

    const videogamesDb = await Videogame.findAll();
    
    const videogamesApiRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)).data.results;
    
    const videogamesApi = cleanArray(videogamesApiRaw);

    return [...videogamesDb, ...videogamesApi];
};

const searchVideogameByName = async (name) => {

    const dbVideogames = await Videogame.findAll({ where: { name:name } });

    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)).data.results;
    
    const apiVideogames = cleanArray(apiVideogamesRaw);

    const filteredApi = apiVideogames.filter((game) => game.name === name);

    return [...filteredApi, ...dbVideogames];    
};

module.exports = { createVideogame, getVideogameById, getAllVideogames  , searchVideogameByName };