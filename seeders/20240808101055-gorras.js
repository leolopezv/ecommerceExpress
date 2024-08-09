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
    await queryInterface.bulkInsert('gorras', [
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
    await queryInterface.bulkDelete('gorras', null, {});
  }
};
