import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

    return(
        <div className={style.Container}>
            <Link to="/home" className={style.text}>VIDEOGAMES</Link>            
            <Link to="/create" className={style.text}>CREATE VIDEO GAME</Link>
        </div>
    )
};

export default NavBar;