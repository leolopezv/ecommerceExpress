'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tarjetas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      banco: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      titular: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      codigo: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tarjetas');
  }
};