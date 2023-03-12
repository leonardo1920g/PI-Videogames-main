import style from "./Card.module.css";
// import {Link} from "react-router-dom"

const Card = (props) => {

    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img className={style.image} src = {props.image}alt="img not found" width="180px"height="180px"/>
            </div> 

            <div>  
                <h1 className={style.name}>{props.name}</h1>
                <h3 className={style.genres}>Genres:{props.genres}</h3>
            </div>
            
            
        </div>
    )
}

export default Card;