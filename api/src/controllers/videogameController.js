require('dotenv').config();
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const cleanArray = (arr) =>
    arr.results.map((elem) => {
   
    return {
    
        id: elem.id,
        name: elem.name,
        description: elem.description,
        released: elem.released, 
        rating: elem.rating, 
        platforms: elem.platforms,
        image: elem.background_image,
        created: false,
    }
});
  
const createVideogame = async (
    name, description,  released, rating, platforms,image) => {

    await Videogame.create({ name, description,  released, rating, platforms, image });    
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
    
    const videogamesApiRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)).data;
    
    const videogamesApi = cleanArray(videogamesApiRaw);

    return [...videogamesDb, ...videogamesApi];
};

const searchVideogameByName = async (name) => {

    const dbVideogames = await Videogame.findAll({ where: { name:name } });

    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)).data;
    
    const apiVideogames = cleanArray(apiVideogamesRaw);

    const filteredApi = apiVideogames.filter((game) => game.name === name);

    return [...filteredApi, ...dbVideogames];    
};

module.exports = { createVideogame, getVideogameById, getAllVideogames  , searchVideogameByName };