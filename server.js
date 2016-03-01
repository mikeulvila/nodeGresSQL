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

app.get('/albums', (req, res) => {
  models.Album.findAll({
      attributes: { exclude: ['ArtistId'] },
      include: {
        model: models.Artist,
        attributes: { exclude: ['ArtistId'] }
      }
    })
    .then(albums => res.send(albums));
});

app.get('/artists', (req, res) => {
  models.Artist.findAll()
    .then(artists => res.send(artists));
});

app.get('/customers', (req, res) => {
  models.Customer.findAll()
    .then(customers => res.send(customers));
});

// customer by id
app.get('/customers/:id', (req, res) => {
  models.Customer.findOne({
    where: {
      CustomerId: req.params.id
    }
  }).then(customer => res.send(customer));
});

// customer by id with array of their invoices
app.get('/customers/:id/invoices', (req, res) => {
  models.Customer.findOne({
    where: {
      CustomerId: req.params.id
    },
  })
  .then(customer => customer.getInvoices())
  .then(invoices => res.send(invoices));
});

// get all employees
app.get('/employees', (req, res) => {
  models.Employee.findAll()
    .then(employees => res.send(employees));
});

// get one employee with who they report to
app.get('/employees/:id', (req, res) => {
  models.Employee.findOne({
    where: {
      EmployeeId: req.params.id
    },
    include: {
      model: models.Employee,
      as: 'Boss',
      attributes: [
        'FirstName',
        'LastName'
      ]

    }
  }).then(employee => res.send(employee));
});

// get one employee with array of customers
app.get('/employees/:id/customers', (req, res) => {
  models.Employee.findOne({
    where: {
      EmployeeId: req.params.id
    },
    include: {
        model: models.Customer
    }
  }).then(employee => res.send(employee));
});

// get all genres
app.get('/genres', (req, res) => {
  models.Genre.findAll()
    .then(genres => res.send(genres));
});

app.get('/mediatypes', (req, res) => {
  models.MediaType.findAll()
    .then(types => res.send(types));
});



app.get('/playlists', (req, res) => {
  models.Playlist.findAll()
    .then(playlists => res.send(playlists));
});



app.get('/invoices', (req, res) => {
  models.Invoice.findAll({
      attributes: { exclude: 'CustomerId' },
      include: {
        model: models.Customer,
        attributes: { exclude: [
          'CustomerId',
          'SupportRepId'
        ]}
      }
    })
    .then(invoices => res.send(invoices));
});

app.get('/invoices/:id', (req, res) => {
  models.Invoice.findOne({
      where: {
        InvoiceId: req.params.id
      }
    })
    .then(invoice => res.send(invoice));
});

app.get('/invoices/:id/customer', (req, res) => {
  models.Invoice.findOne({
      where: {
        InvoiceId: req.params.id
      }
    })
    .then(invoice => invoice.getCustomer())
    .then(customer => res.send(customer));
});





app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});












