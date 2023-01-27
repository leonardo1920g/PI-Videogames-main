import style from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={style.card}>
            <p>Name:{props.name}</p>
            <p>rating {props.rating}</p>
            <p>image {props.image}</p>
        </div>
    )
}

export default Card