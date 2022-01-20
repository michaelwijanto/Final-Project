"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Content.belongsTo(models.Level)
      Content.hasMany(models.UserContent)
    }
  }
  Content.init(
    {
      youtubeUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Youtube URL Required" },
          notEmpty: { msg: "Youtube URL cannot be empty" },
        },
      },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notNull: {msg: "Description Required"},
        notEmpty: {msg: "Description cannot be empty"}
      }
    },
    LevelId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Level Id Required"},
        notEmpty: {msg: "Level cannot be empty"}
      }
    },
    likes: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Likes Required"},
        notEmpty: {msg: "Likes cannot be empty"}
      }
    },
    statusLike: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Status Like Required"},
        notEmpty: {msg: "Status Like cannot be empty"}
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Title Required"},
        notEmpty: {msg: "Title  cannot be empty"}
      }
    },
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};
