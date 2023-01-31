 const { 
    createVideogame,
    getVideogameById,
    getAllVideogames,
    searchVideogameByName
} = require("../controllers/videogameController");

const getVideogamesHandler = async (req, res) => {
    const { name } = req.query;

    const results = name ? await searchVideogameByName(name) : await getAllVideogames();

    res.status(200).json(results);
};


const getVideogameHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id)? "bdd" : "api";    
    try {
        const videogame = await getVideogameById(id, source);
        res.status(200).json(videogame);
    }   catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createVideogameHandler = async (req, res) => {        
    const { name, description, released, rating, platforms, image } = req.body;

    try {
        const newVideogame = await createVideogame(name, description,  released, rating, platforms, image);
               
        res.status(201).json({data: newVideogame, message: "VIDEO GAME CREATED SUCCESSFULLY"});
    }   catch (error) {
        res.status(400).json({ error: error.message });
    }
    
};

module.exports = {
    getVideogamesHandler,
    getVideogameHandler,
    createVideogameHandler,
}; 