'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class domicilio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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