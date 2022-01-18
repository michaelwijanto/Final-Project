'use strict';

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
   let levels = [
     {
       name: "Easy"
     },
     {
       name: "Medium"
     },
     {
       name: "Hard"
     }
   ]
   levels.forEach(level => {
     level.createdAt = new Date()
     level.updatedAt = new Date()
   })
   await queryInterface.bulkInsert("Levels", levels, null)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("Levels", null)
  }
};
