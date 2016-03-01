'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const models = require('./models/index.js');

app.get('/', (req, res) => {
  res.send({
    status: 'Success'
  });
});

app.get('/genres', (req, res) => {
  models.Genre.findAll()
    .then(genres => res.send(genres));
});

app.get('/mediatypes', (req, res) => {
  models.MediaType.findAll()
    .then(types => res.send(types));
});

app.get('/artist', (req, res) => {
  models.Artist.findAll()
    .then(artists => res.send(artists));
});

app.get('/playlist', (req, res) => {
  models.Playlist.findAll()
    .then(playlists => res.send(playlists));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
