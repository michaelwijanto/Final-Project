"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.UserProfile);
      User.hasMany(models.Log);
    }
  }
  User.init(
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: { msg: "Email already exist" },
        validate: {
          notNull: { msg: "Email Required" },
          notEmpty: { msg: "Email cannot be empty" },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Password Required" },
          notEmpty: { msg: "Password cannot be empty" },
        },
      },
      fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Full Name Required" },
        },
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Role Required" },
        },
      },
      isRegister: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Is Register Required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (instance, options) => {
          instance.password = hash(instance.password);
        },
      },
    }
  );
  return User;
};
