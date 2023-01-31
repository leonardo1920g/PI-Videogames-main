import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { videogameSearch } from "../../Redux/actions";


const SearchBar = () => {

    const dispatch = useDispatch();
    const [state, setState] = useState({ name: "" });

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });

        console.log(state);
    };

    const handleSubmit = (event)=>{

        event.preventDefault();
        dispatch(videogameSearch(state.name));
        setState("")
    }

    return (
        <div>
            <button 
            type="submit" 
            onClick={handleSubmit}>SEARCH</button>
            <input 
            type="text" 
            name="name"
            onChange= {handleChange}
            placeholder="Name of videogame"
            />       
        </div>
    );
};

export default SearchBar;