'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('tarjetas', [
    {
      banco: 'Banco de Chile',
      numero: '1234567890123456',
      titular: 'Kanye West',
      fecha: new Date(),
      codigo: '123',
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      banco: 'Banco Santander',
      numero: '2345678901234567',
      titular: 'Kanye West',
      fecha: new Date(),
      codigo: '234',
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      banco: 'Banco Estado',
      numero: '3456789012345678',
      titular: 'Kanye West',
      fecha: new Date(),
      codigo: '345',
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      banco: 'Banco BCI',
      numero: '4567890123456789',
      titular: 'Kanye West',
      fecha: new Date(),
      codigo: '456',
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      banco: 'Banco Itaú',
      numero: '5678901234567890',
      titular: 'Kanye West',
      fecha: new Date(),
      codigo: '567',
      usuario_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tarjetas', null, {});
  }
};
