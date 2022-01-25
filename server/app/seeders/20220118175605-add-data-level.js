"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
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
        name: "Easy",
        thumbnail:
          "https://media.istockphoto.com/vectors/woman-doing-exercise-with-speed-jumping-rope-in-3-step-vector-id1155709302?k=20&m=1155709302&s=612x612&w=0&h=aFuHgThusnLFaeSxfg40EWCSBsvosw-kxBhpLoA5kYg=",
        description: "This exercise is suitable for beginners ",
      },
      {
        name: "Medium",
        thumbnail:
          "https://media.istockphoto.com/vectors/multiple-images-of-a-man-exercising-vector-id472335019?b=1&k=20&m=472335019&s=170667a&w=0&h=UYhRM09ZE0ZyjP7iavhqr2kqp0rj6hfFURFreHGBPWo=",
        description: "This exercise is suitable for maintaining weight",
      },
      {
        name: "Hard",
        thumbnail:
          "https://media.istockphoto.com/vectors/set-of-weightlifter-characters-working-out-at-the-gym-cheerful-vector-id1147709836?k=20&m=1147709836&s=612x612&w=0&h=-85MJNyLo-AFbicHzDDyUEV3r54xq4JaW4hRvg5f-OY=",
        description: "This exercise is flexible as well as strenuous",
      },
    ];
    levels.forEach((level) => {
      level.createdAt = new Date();
      level.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Levels", levels, null);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Levels", null);
  },
};
