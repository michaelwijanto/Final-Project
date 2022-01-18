'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Content.hasMany(models.User)
      Content.belongsTo(models.Level)
    }
  }
  Content.init({
    youtubeUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Youtube URL Required"}
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Description Required"}
      }
    },
    LevelId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Level Id Required"}
      }
    },
    likes: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Likes Required"}
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Title Required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};