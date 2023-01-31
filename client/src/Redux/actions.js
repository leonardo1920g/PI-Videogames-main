import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";

//para hacer una request a un servidor nesecito hacer una operacion asincrona para obtener el array de videogames

//funcion para llamar todo los videojuegos 
export const getVideogames = () => {
    return async function (dispatch) {

        const apiData = await axios.get("http://localhost:3001/Videogame")
        
        const videogames = apiData.data;
        dispatch({ type: GET_VIDEOGAMES, payload: videogames })
        
        console.log(videogames);
    };
};

//funcion para llamar un videojuego x id
export const getVideogameDetail = (id) => {
    return async function (dispatch) {

        const apiData = await axios.get(`http://localhost:3001/Videogame/${id}`)

        const videogameDetail = apiData.data;
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: videogameDetail})
    };
};

export const getGenres = () => {
    return async function (dispatch) {

        const apiData = await axios.get("http://localhost:3001/Genre")
        
        const genres = apiData.data;
        dispatch({ type: GET_GENRES, payload: genres }) 
        
    };
};