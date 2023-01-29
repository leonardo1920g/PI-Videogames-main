import { useState } from "react";
import axios from "axios";

const Form = () => {

    // es la funcion que define el estado 
    const [form,setForm ] = useState ({

        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:"",
        genre:"",
        image:"",
    });

    // VALIDADOR: vamos a validar el estado que cambio

    const [errors, setErrors] = useState ({

        name:"",
        description:"",
        released:"",
        rating:"",
        platforms:"",
        genre:"",
        image:"",
    });

    // me permita cambiar el estado
    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]:value}) //valida el estado y si es correcto permite cambiar el estado

        setForm({...form, [property]:value}) //piza el estado y le cambia el valor de la propiedad
        
    }

    const validate = (form) => {
        // expresion regular de regex para evaluar 
        if(/^(([^\s.,:;]+)\s?)+$/.test(form.name)) {
            setErrors({...errors,name:""})
        }else{
            setErrors({...errors,name: "Wrong name"})
        }
        if(form.email==="")setErrors({...errors,name:"Write the name of the game"})
    };

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/Videogame",form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div>
                <label>Description: </label>
                <input type="text" value={form.description} onChange={changeHandler} name="description" />
            </div>

            <div>
                <label>Released: </label>
                <input type="text" value={form.released} onChange={changeHandler} name="released" />
            </div>

            <div>
                <label>Rating: </label>
                <input type="text" value={form.rating} onChange={changeHandler} name="rating" />
            </div>

            <div>
                <label>Platforms: </label>
                <input type="text" value={form.platforms} onChange={changeHandler} name="platforms" />
            </div>

            <div>
                <label>Genre: </label>
                <input type="text" value={form.genre} onChange={changeHandler} name="genre" />
            </div>
            
            <div>
                <label>Image: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
            </div>

            <button type="submit">SUBMIT</button>

        </form>
    )
};

export default Form;