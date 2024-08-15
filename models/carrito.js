'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      carrito.belongsTo(models.foto, { foreignKey: 'foto_id', as: 'foto' });
    }
  }
  carrito.init({
    foto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'carrito',
    tableName: 'carritos',
  });
  return carrito;
};