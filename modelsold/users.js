module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
      user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        required: true
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      }
    });
  
    return Users;
  };

  
  
  
 

  

  
