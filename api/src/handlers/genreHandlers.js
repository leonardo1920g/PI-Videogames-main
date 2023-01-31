require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require("../db")
const axios = require("axios");

const getGenresHandler = async(req, res, next) => {

  const dbLog = await Genre.findAll({attributes: ['name'],});

  try {
    const dbClear = dbLog.map(elem => {
      return {name: elem.name}
    });

    if (dbClear.length) return res.send(dbClear)

    const response = await axios.get((`https://api.rawg.io/api/genres?key=${API_KEY}`))
    const genres = response.data.results;

    for(const genre of genres){
        await Genre.findOrCreate({
        where: {
          name: genre.name
        }
      });
    }
    res.send(genres.map(({name}) => ({name})));
  } catch (error) {
    next(error)
  }
};

module.exports = { getGenresHandler };

// const cleanArray = (arr) =>
//     arr.map((elem) => {
   
//     return {
    
//         name: elem.name,
        
//     }
// });
// const getGenresController = async (req, res) => {
   
//   const consultaApiGenres = await axios
//       .get((`https://api.rawg.io/api/genres?key=${API_KEY}`))
//   const genres=response.data.results;

//   console.log(genres);
    
//   const genresApi = cleanArray(genres);

//   return [...genresApi]
// };

// const getGenresHandler = async (req, res) => {
//   const { name } = req.params;
    
//   try {
//       const genres = await getGenresController(name);
//       res.status(200).json(genres);
//   }   catch (error) {
//       res.status(400).json({ error: error.message });
//   }
// };