'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
      'Books',
      'status',
      {
        type: Sequelize.STRING
      }
    ),
     queryInterface.addColumn(
       'Shelves',
       'status',
       {
         type: Sequelize.STRING
       }
      ),
      queryInterface.addColumn(
        'Read',
        'status',
        {
          type: Sequelize.STRING
        }
      ),
   ]);
  },

  down:  (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn ('Books', 'status'),
      queryInterface.removeColumn ('Shelves', 'status'),
      queryInterface.removeColumn ('Read', 'status')
    ]);
  }
};
