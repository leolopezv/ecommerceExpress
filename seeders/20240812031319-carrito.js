'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [fotos, fotos_metadata] = await queryInterface.sequelize.query('SELECT id FROM fotos')
    await queryInterface.bulkInsert('carritos', [
    { foto_id: fotos[0].id, cantidad: 3, createdAt: new Date(), updatedAt: new
    Date() },
    { foto_id: fotos[1].id, cantidad: 2, createdAt: new Date(), updatedAt: new
    Date() },
    { foto_id: fotos[5].id, cantidad: 1, createdAt: new Date(), updatedAt: new
      Date() },
      { foto_id: fotos[3].id, cantidad: 1, createdAt: new Date(), updatedAt: new
      Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carritos', null, {});
  }
};
