import React, { useState, useEffect} from "react";
import axios from "axios";
import style from "../Form/Form.module.css"
import {useDispatch, useSelector, } from "react-redux"
import { getGenres } from "../../Redux/actions";
import { Link } from "react-router-dom";


const Form = () => {  
    
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres)

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

    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]:value})

        setForm({...form, [property]:value})        
    }

    // VALIDADOR: vamos a validar el estado que cambio

    const [errors,setErrors] = useState ({

        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:"",
        genres:"",
        image:"",
    });

    // me permita cambiar el estado

    const validate = (form) => {
        
        if(form.name){
            setErrors({...errors,name:"Ok"})
        } else {
            setErrors({...errors,name:"Please enter a name"});
        }
    };

    const handleSelect = (e) => {
        setForm({
            ...form, 
            genres: [...form.genres, e.target.value]
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/Videogame",form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    };

    const handlerDelet = (el) => {
        if (form.genre.length === 0) return;
    
        const index = form.genre.indexOf(el);
        if (index === -1) return;
    
        setForm({
            ...form,
            genre: [...form.genre.slice(0, index), ...form.genre.slice(index + 1)],
        });
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
                {/* <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" /> */}
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
                onChange={(e) => handleSelect(e)}>
                    {genres.map((gen) => (
                        <option value={gen.name}>{gen.name}</option>
                    ))}
                </select> 
                    <ul>
                        <li>{form.genres.map(el => el + " ,")}</li>
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
                <form 
                    name="subida-imagenes" 
                    type="POST" 
                    enctype="multipart/formdata" 
                    className= {style.text}>
	                <input 
                    type="file" 
                    name="image" 
                    className= {style.button}/>
                </form>
            </div>

            <button 
            type="submit"
            className= {style.button}>CREATE VIDEOGAME</button>

        </form>

        
    )
};

export default Form;