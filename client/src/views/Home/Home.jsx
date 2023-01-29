import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../Redux/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch (getVideogames());
    },[dispatch])


    return (
        <div>
            <h1>esta es la vista de home</h1>
            <CardsContainer />
        </div> 
    )
};

export default Home