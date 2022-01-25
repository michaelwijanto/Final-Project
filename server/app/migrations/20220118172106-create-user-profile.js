"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserProfiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      subscription: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dateBirth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      LevelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Levels", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      goals: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      bmi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      health: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      healthy_bmi_range: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserProfiles");
  },
};
