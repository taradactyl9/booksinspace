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
            Books.belongsTo(models.User, {
                foreignKey: 'user_id',
                onDelete: 'CASCADE'
            });
        }
    };
    Books.init({
        title: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        date_read: DataTypes.STRING,
        status: DataTypes.STRING,
        shelf_id: DataTypes.STRING,
        has_read: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Books',
    });
    return Books;
};