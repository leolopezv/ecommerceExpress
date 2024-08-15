'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('carritos', {
      fields: ['foto_id'],
      name: 'foto_id_fk',
      type: 'foreign key',
      references: {
      table: 'fotos',
      field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
      
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('carritos', 'foto_id_fk')
  }
};
