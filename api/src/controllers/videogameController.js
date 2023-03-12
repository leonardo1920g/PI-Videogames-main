const { Videogame, Genre } = require("../db");
const axios = require("axios");

const cleanArray = (arr) =>
    arr.map((elem) => {
   
    return {
    
        id: elem.id,
        name: elem.name,
        description: elem.description,
        released: elem.released, 
        rating: elem.rating, 
        platforms: elem.platforms.map((plat) => plat.platform.name).flat().sort().join(", "),
        image: elem.background_image,
        genres: elem.genres.map((elem) => elem.name).flat().sort().join(", "),
        created: false,
    }
});
  
const createVideogame = async (
    name, description,  released, rating, platforms,image) => {    
    return await Videogame.create({ name, description,  released, rating, platforms, image }); 
};

const getVideogameById = async (id, source) => { // incluir los generos asociados

    const videogame = source === "api" 
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=cefc117d21ce4e8798553f945b2fe1bd`)).data

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
    
    const videogamesApiRaw = (await axios.get(`https://api.rawg.io/api/games?key=cefc117d21ce4e8798553f945b2fe1bd&page_size=100`)).data.results;

    const videogamesApi = cleanArray(videogamesApiRaw);

    return [...videogamesDb, ...videogamesApi];
};

const searchVideogameByName = async (name) => {

    const dbVideogames = await Videogame.findAll({ where: { name:name } });

    const apiVideogamesRaw = (await axios.get(`https://api.rawg.io/api/games?key=cefc117d21ce4e8798553f945b2fe1bd&page_size=100`)).data.results;
    
    const apiVideogames = cleanArray(apiVideogamesRaw);

    const filteredApi = apiVideogames.filter((game) => game.name === name);

    return [...filteredApi, ...dbVideogames];    
};

module.exports = { createVideogame, getVideogameById, getAllVideogames  , searchVideogameByName };

// const getAllPokemons = async () => {

//     const cache = new Map();

//     const database = await Pokemon.findAll({
//     include: { model: Type, attributes: ["name"], as: "types", },
//     });
    
//     const databasePokemons = database.map((pokemon) => ({
//     ...pokemon.toJSON(),
//     types: pokemon.types.map(({ name }) => name),
//     }));
    
//     const endPoint = "https://pokeapi.co/api/v2/pokemon";
//     const limit = "?limit=200";
//     const cacheKey = endPoint+limit;
//     const cachedData = cache.get(cacheKey);
    
//     let apiPokemons = [];

//     if (cachedData) {
//         apiPokemons = cachedData;
//     } else {
//         let apiResponse = await axios.get(cacheKey);
//         let apiData = apiResponse.data;
    
//         const results = await Promise.all(
//         apiData.results.map(({ url }) => axios.get(url))
//         );
    
//         apiPokemons = results.map(({ data }) => ({
//             id: data.id,
//             name: data.name,
//             types: data.types.map(({ type }) => type.name),
//             image: data.sprites.other["official-artwork"].front_default,
//         }));
    
//         cache.set(cacheKey, apiPokemons, 30000);
//     }
    
//     return [...databasePokemons, ...apiPokemons]//databasePokemons.concat(apiPokemons);
// };
//********************************** */

    // const getAllPokemons = async () => {
    //     const cache = new Map();
    //     const database = await Pokemon.findAll({
    //       include: { model: Type, attributes: ["name"], as: "types", },
    //     });
    
    //     const databasePokemons = database.map((pokemon) => ({
    //       ...pokemon.toJSON(), types: pokemon.types.map((type) => type.name).flat().sort().join(", "),
    //     }))
    
    //     let apiPokemons = [];
    //     let endPoint = "https://pokeapi.co/api/v2/pokemon";
    //     let limit = "?limit=200"
    //     const cacheKey = `${endPoint}${limit}`;
    //     const cachedData = cache.get(cacheKey);
    //     if (cachedData) {
    //       apiPokemons = cachedData;
    //     } else {
    //       let apiResponse = await axios.get(cacheKey);
    //       let apiData = apiResponse.data;
    
    //       while (apiData.results.length) {
    //         const { results, next } = apiData;
    //         let response = await Promise.all(results.map(({ url }) => axios.get(url)));
    //         apiPokemons = [...apiPokemons, ...cleanArrayAll(response)];
            
    //         if (next) {
    //           apiResponse = await axios.get(next);
    //           apiData = apiResponse.data;
    //         } else {
    //           break;
    //         }
    //       }
    
    //       cache.set(cacheKey, apiPokemons, 30000); // cache for 30 seconds
    //     }
    
    //     return [...databasePokemons, ...apiPokemons];
    //   };



//*******************

// const getAllPokemons = async () => {

//     const databasePokemons = await Pokemon.findAll({include: {model: Type, attributes: ["name"]}});
    
//     const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
//     const response = api.data.results?.map(elemento => axios.get(elemento.url));
//     const responseApi = await axios.all(response);
//     const apiPokemons = cleanArrayAll(responseApi);
    
//     return [...databasePokemons, ...apiPokemons];

// };


//const cleanArray = (data) => ({
    //     id: data.id,
    //     name: data.name,
    //     hp: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
    //     attack: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
    //     defense: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
    //     speed: data.stats.find(stat => stat.stat.name === 'speed').base_stat,
    //     height: data.height,
    //     weight: data.weight,
    //     types: data.types.map(type => type.type.name).sort().join(', '),
    //     image: data.sprites.other['official-artwork'].front_default,
    //     created: false,
    //   });