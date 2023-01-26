require('dotenv').config();
const { Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllGenre = async (name)=> {

    const dbGenre = await Genre.findAll()
        .then(generos=>{
          res.json(generos)
        })

    
}







module.exports = { getAllGenre };