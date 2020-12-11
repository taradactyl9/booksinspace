module.exports = (sequelize, Sequelize) => {
    const Reviews = sequelize.define("models", {
      review_id: {
            type: Sequelize.STRING
        },
      user_id: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      },
      book_id: {
        type: Sequelize.STRING
      },
      date_read: {
        type: Sequelize.DATE
      }
    });
  
    return Reviews;
  };