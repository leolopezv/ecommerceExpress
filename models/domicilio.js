'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class domicilio extends Model {
    static associate(models) {
      // define association here
      domicilio.belongsTo(models.usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    }
  }
  domicilio.init({
    pais: DataTypes.STRING,
    provincia: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    postal: DataTypes.STRING,
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'domicilio',
    tableName: 'domicilios',
  });
  return domicilio;
};