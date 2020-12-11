module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("models", {
      user_id: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      joined: {
        type: Sequelize.STRING
      }
    });
  
    return Users;
  };

  
  
  
 

  

  
