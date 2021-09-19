const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hp: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    atack: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    defense: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    speed: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    wight: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    }, 
  { timestamps: false }
  );
  
};

