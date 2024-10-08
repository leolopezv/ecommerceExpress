'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      // define association here
      usuario.hasMany(models.domicilio, { foreignKey: 'usuario_id', as: 'domicilios' });
      usuario.hasMany(models.tarjeta, { foreignKey: 'usuario_id', as: 'tarjetas' });
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.STRING,
    comentario: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'usuario',
    tableName: 'usuarios',
  });
  return usuario;
};