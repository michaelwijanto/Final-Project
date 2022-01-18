'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserContents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      ContentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Contents", key: "id" },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('UserContents');
  }
};