'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        name: 'Delhi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mohali',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chandigarh',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
