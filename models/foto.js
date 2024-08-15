'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foto extends Model {
    static associate(models) {
      // define association here
    }
  }
  foto.init({
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    talla: DataTypes.STRING,
    color: DataTypes.STRING,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'foto',
    tableName: 'fotos',
  });
  return foto;
};