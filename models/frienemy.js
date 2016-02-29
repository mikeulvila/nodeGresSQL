'use strict';
module.exports = function(sequelize, DataTypes) {
  var Frienemy = sequelize.define('Frienemy', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    friends: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Frienemy;
};