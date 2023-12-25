'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Flights', {
      type: 'UNIQUE',
      name: 'flightNumber_unique_constraint',
      fields: ['flightNumber']
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Flights', 'flightNumber_unique_constraint');
  }
};
