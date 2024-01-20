'use strict';
/** @type {import('sequelize-cli').Migration} */

const { commonUtils }  = require('../utils');
const { Enums } = commonUtils;
const { SEAT_TYPE } = Enums;
const { BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS } = SEAT_TYPE;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Airplanes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        values: [ BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS ],
        defaultValue: ECONOMY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};