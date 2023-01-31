import style from "./Card.module.css";
import {Link} from "react-router-dom"

const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.imgContainer}>
                <img 
                className={style.image} 
                src = {props.image} 
                alt="img not found" 
                width="200px"
                height="100px"/>
            </div> 
            <div>  
                <Link to={`/detail/${props.id}`}>
                <h3>{props.name}</h3>
                </Link>
                <p>Genres:{props.genres}</p>
            </div>
            
            
        </div>
    )
}

export default Card