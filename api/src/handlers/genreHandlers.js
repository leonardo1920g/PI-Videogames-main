require('dotenv').config();
const { Genre } = require("../db")
const axios = require("axios");

const getGenresHandler = async(req, res, next) => {

  const dbLog = await Genre.findAll({attributes: ['name'],});

  try {
    const dbClear = dbLog.map(elem => {
      return {name: elem.name}
    });

    if (dbClear.length) return res.send(dbClear)

    const response = await axios.get((`https://api.rawg.io/api/genres?key=cefc117d21ce4e8798553f945b2fe1bd`))
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