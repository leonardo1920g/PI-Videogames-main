const { getAllGenre } = require("../controllers/genreController");

const getGenreHandler = async (req, res) => {

    try {
    const { name } = req.query;

    const results = await getAllGenre(name)

        res.status(200).json(results);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { 
    getGenreHandler, 
};