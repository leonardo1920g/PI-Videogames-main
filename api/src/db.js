require('dotenv').config();  //pone a disposicion la variable de entorno 
const { Sequelize } = require('sequelize'); // se conecta a la base de datos 
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; 
//se crea una nueva instancia de la clase sequalize
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, 
  { 
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename); // trae el nombre base de todos los modelos desde models

const modelDefiners = [];


// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// lee todos los modelos, 
fs.readdirSync(path.join(__dirname, '/models'))// lee los directorios desde path
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  }); // hasta aqui le quita el .js a los modelos y los trae como strings y agrega todo a modelDefiners

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize)); // por cada uno le pasa ese modelo a squalize
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Videogame.belongsToMany(Genre, { through: 'videogame_genre'});
Genre.belongsToMany(Videogame, { through: 'genre_videogame'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
