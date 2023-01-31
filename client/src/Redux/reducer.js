import { 
    GET_GENRES, 
    GET_VIDEOGAME_DETAIL,
    GET_VIDEOGAMES,
    VIDEOGAME_SEARCH,
    ADD_VIDEOGAME,
    
    
    

} from "./actions";


const initialState = {
    videogames: [],
    videogameSearch: [],
    videogameDetail: {},
    genres:[],
    
};

const rootReducer = (state = initialState, action ) => {

    switch(action.type) {

        case GET_VIDEOGAMES:
            return {...state, videogames:action.payload}

        case VIDEOGAME_SEARCH:
            return {...state, videogameSearch:action.payload}

        case GET_VIDEOGAME_DETAIL:
            return {...state, videogameDetail:action.payload}

        case ADD_VIDEOGAME:
            return {...state,}        

        case GET_GENRES:
            return {...state, genres:action.payload}

        
            
        default:
            return { ...state };
    }
};



export default rootReducer;