'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gorra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gorra.init({
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    talla: DataTypes.STRING,
    color: DataTypes.STRING,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'gorra',
    tableName: 'gorras'
  });
  return gorra;
};