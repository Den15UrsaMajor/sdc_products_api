const express = require('express');
const models = require('../models');

const app = express();

module.exports = {
  get: (req, res) => {
    // will run if no product ID is given
    models.products.getAll(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

};
