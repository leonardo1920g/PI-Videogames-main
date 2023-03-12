import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const VIDEOGAME_DETAIL = "VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
// export const VIDEOGAME_SEARCH = "VIDEOGAME_SEARCH";


//para hacer una request a un servidor nesecito hacer una operacion asincrona para obtener el array de videogames

//funcion para llamar todo los videojuegos 
export const getVideogames = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3002/videogame")        
            const videogames = apiData.data;

            dispatch({ type: GET_VIDEOGAMES, payload: videogames })

        } catch (error) {
            return console.log("Something went wrong. Please try again.", error.message)
        }
    };
};

export const VideogameDetail = (id) => {
    return async function (dispatch) {
        try {
        const apiData = await axios.get(`http://localhost:3001/Videogame/${id}`)
        const videogame = apiData.data;

        dispatch({ type: VIDEOGAME_DETAIL, payload: videogame})

        } catch (error) {
            return console.log("Im just using another Route to render this.")
        }
    };
};

export const getGenres = () => {
    return async function (dispatch) {

        try {
            const apiData = await axios.get("http://localhost:3002/genre")        
            const genres = apiData.data;

            dispatch({ type: GET_GENRES, payload: genres }) 
    } catch (error) {
        return console.log("Something went wrong. Please try again.", error.message)
    }       
    };
};

// export const videogameSearch = (name)=> {
//     return async function (dispatch) {

//         try {            
//             const apiData = await axios.get(`http://localhost:3001/Videogame?name=${name}`);
//             const videogameSearch = apiData.data;
//             dispatch({ type: VIDEOGAME_SEARCH, payload: videogameSearch})

//         } catch (error){
//             error(error);
//         }        
//     }
// };

export const addVideogame = (payload) => {
    return async function (dispatch) {

        const videogameCreate = await axios.post("http://localhost:3001/Videogame",payload);       
        return videogameCreate;                
    };
}