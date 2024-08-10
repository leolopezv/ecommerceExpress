'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      let [usuarios, usuarios_metadata] = await queryInterface.sequelize.query('SELECT * FROM usuarios');

      const usuario = usuarios[0];

      const tarjetasData = [
        {
          banco: 'Banco Pichincha',
          numero: '1234567890123456',
          titular: usuario.nombre,
          fecha: new Date(),
          codigo: '123',
          usuario_id: usuario.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          banco: 'Banco del Pacífico',
          numero: '2345678901234567',
          titular: usuario.nombre,
          fecha: new Date(),
          codigo: '456',
          usuario_id: usuario.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          banco: 'Banco de Guayaquil',
          numero: '3456789012345678',
          titular: usuario.nombre,
          fecha: new Date(),
          codigo: '789',
          usuario_id: usuario.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      await queryInterface.bulkInsert('tarjetas', tarjetasData, {});
    } catch (error) {
      console.error('Error in migration:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tarjetas', null, {});
  }
};