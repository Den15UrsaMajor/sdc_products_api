const express = require('express');
const models = require('../models');

const app = express();

module.exports = {
  get: (req, res) => {
    console.log('req', req.query);
    // req.query and req.params, pass into invocation of getAll
    // log req to see how it's structured
    models.products.getAll(req.query)
      .then((result) => {
        res.send(result);
      });
  },
};
