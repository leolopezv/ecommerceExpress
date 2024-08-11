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

      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/179843/60503500_5.jpg?v=638528097952870000',
        descripcion: 'Gorra Summer Icon Collection 9FIFTY Ajustable New Era',
        talla: 'XL',
        color: 'celeste',
        precio: '10.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/177875/60564594_4.jpg?v=638467406106130000',
        descripcion: 'Gorra Race Specials Collection 9FIFTY Ajustable New Era',
        talla: 'XS',
        color: 'blanco',
        precio: '60.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/179826/60503492_1.jpg?v=638528097841000000',
        descripcion: 'Gorra World Patches Collection 9FIFTY Ajustable New Era',
        talla: 'XX',
        color: 'verde',
        precio: '70.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/178399/60503948_6.png?v=638495771235800000',
        descripcion: 'Gorra Be Mine Collection 59FIFTY Cerrada New Era',
        talla: 'M',
        color: 'blanco',
        precio: '70.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/177847/60502790_6.png?v=638465503124570000',
        descripcion: 'Gorra Jackie Robinson 9FIFTY Ajustable New Era',
        talla: 'L',
        color: 'negro',
        precio: '90.000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imagen: 'https://neweraec.vtexassets.com/arquivos/ids/178169/60498103_6.jpg?v=638488725822100000',
        descripcion: 'Gorra Thermal Front Collection 59FIFTY Cerrada New Era',
        talla: 'S',
        color: 'beige',
        precio: '1',
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