'use strict';

const { hash } = require('../helpers/bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    let users = [
      {
        email: "ariesastra@mail.com",
        password: hash("password"),
        fullName: "Arie Sastra",
        role: "admin",
        isRegister: "false",
        createdAt : new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
