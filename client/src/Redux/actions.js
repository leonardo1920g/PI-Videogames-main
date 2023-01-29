import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

//para hacer una request a un servidor nesecito hacer una operacion asincrona para obtener el array de videogames

export const getVideogames = () => {
    return async function (dispatch) {

        const apiData = await axios.get("http://localhost:3001/Videogame")
        
        const videogames = apiData.data;
        dispatch({ type: GET_VIDEOGAMES, payload: videogames })    
    };
};