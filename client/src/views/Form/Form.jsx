import React, { useState, useEffect} from "react";
import style from "../Form/Form.module.css"
import {useDispatch, useSelector, } from "react-redux"
import { addVideogame, getGenres } from "../../Redux/actions";
import { Link, useHistory } from "react-router-dom";

const Form = () => {  
    
    const dispatch = useDispatch();
    const history = useHistory() // es un hook que me lleva a la direccion indicada cuando se termine la tarea
    const genres = useSelector((state) => state.genres)
    // const videogames = useSelector((state) => state.videogames)
    
    // es la funcion que define el estado 
    const [form,setForm ] = useState ({

        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:[],
        genres:[],
        image:"",
    });

    //de la misma manera crear useEffect de platforms

    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])

    const [errors, setErrors] = useState({

        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:[],
        genres:[],
        image:"",
    })

    //permite modificar el estado con lo nuevos valores

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setErrors(validate({...form, [property]:value}));
        setForm({...form, [property]:value})        
    };

    const validate = (form) => {

        let errors = {};

        if (!form.name.trim()){
            errors.name = "This feature is required.";            
        } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())){
            errors.name = "This feature must contain only letters.";            
        }

    }

    //esta funcion me permite seleccionar los valores de genres**** crear esta misma funcion para plataform
    const handleSelect = (event) => {
        setForm({
            ...form, 
            genres: [...form.genres, event.target.value]
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //console.log(form); ***para verificar lo que se esta ingresando en el estado***
        dispatch(addVideogame(form))
        alert("VIDEO GAME CREATED!")
        setForm({
            name:"",
            description:"",
            released:"",
            rating:"",
            platforms:[],
            genres:[],
            image:"",
        })
        history.push("/home"); // cuando termine de crear regresamos a home
    };    

    return (

        
        <form onSubmit={submitHandler} className= {style.create}>

            <div>
                <br/>
                <h1 className= {style.text}>WELCOME! LET'S CREATE A VIDEO GAME...</h1>
                <br/>
                <h3 className= {style.text}>Enter the requested data to create a video game</h3>
                <br/>
                <Link to= '/home'><button className={style.button}>TO GET BACK</button></Link>
            </div>            

            <div>
                <label className= {style.text}>Name: </label>
                <input 
                type="text" 
                value={form.name} 
                onChange={changeHandler} 
                name="name" />
                {errors.name && <span className= {style.error}>{errors.name}</span>}
            </div>

            <div>
                <label className= {style.text}>Description: </label>
                <input 
                type="text" 
                value={form.description} 
                onChange={changeHandler} 
                name="description" />
                {errors.description && <span className= {style.error}>{errors.description}</span>}
            </div>

            <div>
                <label className= {style.text}>Released: </label>
                <input 
                type="text" 
                value={form.released} 
                onChange={changeHandler} 
                name="released" />
                {errors.released && <span className= {style.error}>{errors.released}</span>}
            </div>

            <div>
                <label className= {style.text}>Rating: </label>
                <input 
                type="text" 
                value={form.rating} 
                onChange={changeHandler} 
                name="rating" />
                {errors.rating && <span className= {style.error}>{errors.rating}</span>}
            </div>

            <div>
                <label className= {style.text}>Platforms: </label>
                <select 
                type="text" 
                value={form.platforms} 
                onChange={changeHandler} 
                name="platforms">
                    <option value="PC">PC</option>
                    <option value="Linux">MacOs</option>
                    <option value="macOS">Android</option>
                    <option value="Android">Sega</option>
                    <option value="iOs">iOs</option>
                    <option value="PS2">PlayStation 2</option>
                    <option value="PS3">PlayStation 3</option>
                    <option value="PS4">PlayStation 4</option>
                    <option value="PS5">PlayStation 5</option>
                    <option value="XOne">Xbox One</option>
                    <option value="360">Xbox 360</option>
                    <option value="S/X">Xbox Series S/X</option>
                    <option value="Vita">PS Vita</option>
                    <option value="Switch">Nintendo Switch</option>
                    <option value="New Nintendo 3DS XL">New Nintendo 3DS XL</option>
                </select>                
            </div>
            <div>
                <label className= {style.text}>Genres: </label>
                <select
                onChange={(event) => handleSelect(event)}
                name ="genres">
                    {genres.map((gen)=>(
                        <option value={gen.name}>{gen.name}</option>
                    ))}
                </select>
                <ul>
                    <li>{form.genres.map(elem => elem + " -")}</li>
                </ul>
            </div>

            
{/*                 
                {form.genre.map(el=>
                <div>
                    <p>{el}</p>
                    <button 
                    className="botonx" 
                    onClick={()=> 
                    handlerDelet(el)}>x</button>
                </div>
                )} */}
            <div>
                <label className= {style.text}>Image:</label>
                <input
                    type="file" 
                    value={form.image}
                    onChange={changeHandler}
                    name="image"
                    className= {style.text}/>       
            </div>      
                          
            <button type="submit" className= {style.button}>CREATE VIDEOGAME</button>

        </form>

        
    )
};

export default Form;