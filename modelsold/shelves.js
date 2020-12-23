module.exports = (sequelize, Sequelize) => {
    const Shelves = sequelize.define('shelves', {
      shelf_id: {
        type: Sequelize.STRING,
        primaryKey: true
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
      created_at: {
        type: Sequelize.DATE      }
      
    });
    
    return Shelves;
};