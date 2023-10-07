'use strict';
const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus340',
        capacity: 900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'airbusA380',
        capacity: 853,
        createdAt: new Date(),
        updatedAt: new Date()
      },  
      {
        modelNumber: 'boeing787',
        capacity: 330,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'airbusA320',
        capacity: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'embraerE190',
        capacity: 114,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'Airplanes', 
      {
        [Op.or]: [
          {modelNumber: 'boeing777'}, 
          {modelNumber: 'airbus340',}
        ]
      });
  }
};
