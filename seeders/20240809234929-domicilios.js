'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      let [usuarios, usuarios_metadata] = await queryInterface.sequelize.query('SELECT id FROM usuarios;');

      const domicilios = [
        {
          pais: 'Colombia',
          provincia: 'Antioquia',
          ciudad: 'Medellin',
          direccion: 'Calle 123 # 45-67',
          postal: '050022'
        },
        {
          pais: 'Ecuador',
          provincia: 'Pichincha',
          ciudad: 'Quito',
          direccion: 'Avenida Amazonas y Naciones Unidas',
          postal: '170102'
        },
        {
          pais: 'Perú',
          provincia: 'Lima',
          ciudad: 'Lima',
          direccion: 'Avenida Javier Prado Este 1234',
          postal: '15023'
        }
      ];

      for (let i = 0; i < domicilios.length; i++) {
        //let usuario_id = usuarios[Math.floor(Math.random() * usuarios.length)].id;
        let usuario_id = usuarios[0].id;
        let domicilio = domicilios[i];
        await queryInterface.bulkInsert('domicilios', [{
          ...domicilio,
          usuario_id: usuario_id,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      }
    } catch (error) {
      console.error('Error in migration:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('domicilios', null, {});
  }
};