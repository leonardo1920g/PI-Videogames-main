require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require("../db")
const axios = require("axios");

const getGenreHandler = async (req, res) => {

    try{
        const consultaApiGenres = await axios
            .get((`https://api.rawg.io/api/genres?key=${API_KEY}`))
          
        const genresApi = consultaApiGenres.data.results;
                    
        genresApi.map(async (g) => 
             await Genre.findOrCreate({
              where: {name: g.name},
              defaults: {
                id: g.id,
                name: g.name
               }
            }) 
        )    
        res.json({data : genresApi})
    
      //}
    } catch (err) {
           (err) => next(err);
      }
};
module.exports = { getGenreHandler };