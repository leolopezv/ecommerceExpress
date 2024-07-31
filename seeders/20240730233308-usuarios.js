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
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Juan Garcia',
        correo: 'j.garcia@gmail.com',
        celular: '3121234567',
        comentario: 'Las gorras tienen una excelente calidad, muy recomendadas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maria Lopez',
        correo: 'm.lopez@gmail.com',
        celular: '3127654321',
        comentario: 'El servicio al cliente fue muy amable y resolvieron todas mis dudas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carlos Perez',
        correo: 'c.perez@gmail.com',
        celular: '3129876543',
        comentario: 'Me encantaron las gorras, son muy cómodas y estilosas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ana Martinez',
        correo: 'a.martinez@gmail.com',
        celular: '3124567890',
        comentario: 'El envío fue rápido y las gorras llegaron en perfectas condiciones.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Luis Rodriguez',
        correo: 'l.rodriguez@gmail.com',
        celular: '3126543210',
        comentario: 'Muy satisfecho con la compra, las gorras son de alta calidad.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Sofia Hernandez',
        correo: 's.hernandez@gmail.com',
        celular: '3123210987',
        comentario: 'Excelente atención al cliente, muy atentos y serviciales.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Miguel Torres',
        correo: 'm.torres@gmail.com',
        celular: '3128765432',
        comentario: 'Las gorras son increíbles, superaron mis expectativas.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Laura Ramirez',
        correo: 'l.ramirez@gmail.com',
        celular: '3122345678',
        comentario: 'Muy contenta con mi compra, las gorras son muy bonitas y de buena calidad.',
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
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
