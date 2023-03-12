import { 
    GET_GENRES, 
    VIDEOGAME_DETAIL,
    GET_VIDEOGAMES    
} from "./actions";

const initialState = {
    videogames: [],
    allVideogames: [],
    detail: [],
    genres:[],    
};

const rootReducer = (state = initialState, action ) => {

    switch(action.type) {

        case GET_VIDEOGAMES:
            return {...state, videogames: action.payload, allVideogames: action.payload }

        case VIDEOGAME_DETAIL:
            return {...state, detail: action.payload}        

        case GET_GENRES:
            return {...state, genres: action.payload}        
            
        default:
            return { ...state };
    }
};



export default rootReducer;