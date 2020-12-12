module.exports = (sequelize, Sequelize) => {
    const Shelves = sequelize.define("models", {
      shelf_id: {
        type: Sequelize.STRING
      },
      shelf_name: {
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
        type: Sequelize.DATE
      }
    });
    
    return Shelves;
};