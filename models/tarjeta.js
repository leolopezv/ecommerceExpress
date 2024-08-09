'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarjeta extends Model {
    static associate(models) {
      // define association here
    }
  }
  tarjeta.init({
    banco: DataTypes.STRING,
    numero: DataTypes.STRING,
    titular: DataTypes.STRING,
    fecha: DataTypes.DATE,
    codigo: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tarjeta',
    tableName: 'tarjetas',
  });
  return tarjeta;
};