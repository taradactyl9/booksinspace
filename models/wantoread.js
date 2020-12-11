module.exports = (sequelize, Sequelize) => {
    const Want_To_Read = sequelize.define("models", {
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
  
    return Want_To_Read;
  };