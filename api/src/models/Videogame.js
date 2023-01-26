const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame", 
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      released:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      platforms:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false } // para evitar que se agregue la hora y el registro de cuando se modifico
  );
};
