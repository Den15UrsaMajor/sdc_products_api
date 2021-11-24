const express = require('express');
const models = require('../models');

const app = express();

module.exports = {
  get: (req, res) => {
    // req.query and req.params, pass into invocation of getAll
    // log req to see how it's structured
    models.products.getStyle(req.params)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
