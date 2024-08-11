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
   
    await queryInterface.bulkInsert('fotos', [
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/179593/60503553_5.png?v=638521632997600000',
        descripcion: 'Gorra Floral Fill Collection 9FIFTY Ajustable New Era',
        talla: 'XL',
        color: 'beige',
        precio: '20.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/179887/60565644_1.jpg?v=638528098248600000',
        descripcion: 'Gorra Vivid Floral Collection 9FIFTY Ajustable New Era',
        talla: 'S',
        color: 'blanco',
        precio: '35.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/173238/70360653_1.png?v=638447308932470000',
        descripcion: 'Gorra Basic Collection 59FIFTY Cerrada New Era',
        talla: 'L',
        color: 'negro',
        precio: '35.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/179848/60503502_5.jpg?v=638528097984570000',
        descripcion: 'Gorra Floral Fill Collection 9FIFTY Ajustable New Era',
        talla: 'XS',
        color: 'beige',
        precio: '64.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/179821/60503486_1.jpg?v=638528097799600000',
        descripcion: 'Gorra Acperf Collection 59FIFTY Lp Cerrada New Era',
        talla: 'XX',
        color: 'blanco',
        precio: '17.999',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/179854/60503505_5.jpg?v=638528098027200000',
        descripcion: 'Gorra Clubhouse 9Forty Ajustable New Era',
        talla: 'M',
        color: 'azul',
        precio: '24.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('fotos', null, {});
  }
};