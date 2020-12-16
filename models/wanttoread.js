module.exports = (sequelize, Sequelize) => {
    const Want_To_Read = sequelize.define('wanttoread', {
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
  
    return Want_To_Read;
  };