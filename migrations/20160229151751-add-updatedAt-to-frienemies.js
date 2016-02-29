'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'Frienemies', 'updatedAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface
      .removeColumn('Frienemies', 'updatedAt');
  }
};
