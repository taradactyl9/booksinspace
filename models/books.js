'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Books.init({
    title: DataTypes.STRING,
    user_id: DataTypes.STRING,
    date_read: DataTypes.STRING,
    status: DataTypes.STRING,
    shelf_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};