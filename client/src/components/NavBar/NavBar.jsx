import React from "react";
import { Link, useHistory } from "react-router-dom";
//import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../Redux/actions";

const NavBar = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const resetCardContainer = async () => {

        dispatch(getVideogames())
        history.push("/home");
    }

    return(
        <div className={style.NavBar}>
            <Link className={style.link} onClick={resetCardContainer} to="/home">VIDEOGAMES</Link>            
            <Link className={style.link} to="/create">CREATE VIDEOGAME</Link>
            {/* <SearchBar/> */}
        </div>
    )
};

export default NavBar;