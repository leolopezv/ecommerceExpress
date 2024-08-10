'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarjeta extends Model {
    static associate(models) {
      // define association here
      tarjeta.belongsTo(models.usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    }
  }
  tarjeta.init({
    banco: DataTypes.STRING,
    numero: DataTypes.STRING,
    titular: DataTypes.STRING,
    fecha: DataTypes.DATE,
    codigo: DataTypes.STRING,
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'tarjeta',
    tableName: 'tarjetas',
  });
  return tarjeta;
};