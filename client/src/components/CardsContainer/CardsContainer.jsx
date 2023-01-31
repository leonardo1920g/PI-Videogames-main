import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
    
    const videogames = useSelector(state=>state.videogames)

    return (
        <div className={style.container}>
            {videogames.map(game=>{
                return <Card 
                    id = {game.id}
                    image = {game.image}
                    name = {game.name}
                    genre = {game.genres}
                    
                />
            })}
        </div>
    )
};

export default CardsContainer