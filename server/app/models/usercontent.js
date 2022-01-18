'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserContent.belongsTo(models.User)
      UserContent.belongsTo(models.Content)
    }
  }
  UserContent.init({
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "User Id Required"}
      }
    },
    ContentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Content Id Required"}
      }
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Status Required"}
      }
    },
  }, {
    sequelize,
    modelName: 'UserContent',
  });
  return UserContent;
};