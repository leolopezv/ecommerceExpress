'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarjeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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