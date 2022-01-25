'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Log.belongsTo(models.Level)
      Log.belongsTo(models.User)
    }
  }
  Log.init({
    height: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Height Required"}
      }
    },
    weight: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Weight Required"}
      }
    },
    LevelId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Level Id Required"}
      }
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "User Id Required"}
      }
    },
    bmi: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "BMI Required" },
        notEmpty: { msg: "BMI Required" },
      },
    },
    health: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Health Required" },
        notEmpty: { msg: "Health Required" },
      },
    },
  }, {
    sequelize,
    modelName: 'Log',
  });
  return Log;
};