module.exports = (sequelize, Sequelize) => {
    const Books = sequelize.define("models", {
      book_id: {
        type: Sequelize.STRING
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
