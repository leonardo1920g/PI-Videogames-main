import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres, getVideogames } from "../../Redux/actions";
import style from "./Home.module.css";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    },[dispatch]);

    return (
        <div>
            <div className={style.home}>
                <CardsContainer />
            </div>
            
        </div> 
    )
};

export default Home