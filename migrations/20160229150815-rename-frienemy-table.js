'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    //lower to upper
    return queryInterface.renameTable('frienemies', 'Frienemies');
  },

  down: function (queryInterface, Sequelize) {
    // upper to lower
    return queryInterface.renameTable('Frienemies', 'frienemies');
  }
};
