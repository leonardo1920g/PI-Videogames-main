import React from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"


const Landing = () => {

    // const dispatch = useDispatch()
    
    // useEffect(()=> 
    // dispatch(),
    // [])

    // useEffect(()=> 
    // dispatch(),
    // [])

    return (
        <div className={styles.landing}>
            <Link to={`/videogames`}>
                <button className={styles.button}>PLAY</button>
            </Link>            
        </div>
    )
};

export default Landing