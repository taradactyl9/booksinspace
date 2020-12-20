module.exports = (sequelize, Sequelize) => {
    const Read = sequelize.define('read', {
      book_id: {
            type: Sequelize.STRING
        },
      user_id: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE      }
    });
  
    return Read;
  };