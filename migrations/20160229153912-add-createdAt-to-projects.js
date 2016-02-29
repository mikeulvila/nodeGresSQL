'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .addColumn(
        'projects', 'createdAt', {
          allowNull: false,
          type: Sequelize.DATE
        }
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface
      .removeColumn('projects', 'createdAt');
  }
};

