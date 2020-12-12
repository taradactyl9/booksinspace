module.exports = (sequelize, Sequelize) => {
    const Read = sequelize.define("models", {
      book_id: {
            type: Sequelize.STRING
        },
      user_id: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      date_added: {
        type: Sequelize.STRING
      }
    });
  
    return Read;
  };