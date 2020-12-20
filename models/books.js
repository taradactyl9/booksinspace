module.exports = (sequelize, Sequelize) => {
    var Books = sequelize.define('books', {
      book_id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      },
      date_read: {
        type: Sequelize.STRING
      },
      shelf_id: {
        type: Sequelize.STRING
      }
    });
  
    return Books;
  };
