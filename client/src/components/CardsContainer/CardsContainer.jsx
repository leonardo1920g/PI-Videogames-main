import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
    
    const videogames = useSelector((state) => state.videogames);
    // const genres = useSelector((state) => state.genres);

    return (

        <div className={style.elements}>
            
            <div className={style.container}>
                {videogames.map(game =>{
                    return (<Card 
                        key = {game.id}
                        id = {game.id}
                        image = {game.image}
                        name = {game.name}
                        genres = {game.genres}
                    
                    />
                    )
                })
                }
            </div>
        </div>
    )
};

export default CardsContainer