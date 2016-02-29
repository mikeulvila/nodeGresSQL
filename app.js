'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');

const Frienemy = sequelize.define('frienemies', {
  name: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const Project = sequelize.define('projects', {
  name: Sequelize.STRING,
});

Project.hasMany(Frienemy);

sequelize.sync().then(function() {
  return Frienemy.create({
    name: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(frienemy) {
  console.log(frienemy.get({
    plain: true
  }));
}).then(function() {
  return Project.create({
    name: 'Angular 101'
  });
});


