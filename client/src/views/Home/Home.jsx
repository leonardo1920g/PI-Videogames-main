import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../Redux/actions";
import style from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {dispatch (getVideogames())},[dispatch]);

    return (
        <div className={style.home}>

            <h1 className={style.title}>VIDEO GAMES</h1>
            <div>
            
             {/* vamos a hacer los ordenamientos de los videojuegos */}
                <SearchBar/>
                <select>
                    <option value="asc" >ASCENDING</option>
                    <option value="dec" >DECENDING</option>
                </select>
                <select>
                    <option value="a-z" >A - Z</option>
                    <option value="z-a" >Z - A</option>
                </select>
                <select>
                    <option value="gen" >GENRE</option>
                </select>
                <select>                
                    <option value="eve" >EVERYONE</option>
                    <option value="cre" >CREATED</option>
                    <option value="exi" >EXISTING</option>
                </select>
                <select>
                    <option value="rat" >RATING</option>
                </select>
            </div>

            <CardsContainer />
            
        </div> 
    )
};

export default Home