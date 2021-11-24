const express = require('express');
const models = require('../models');

const app = express();

module.exports = {
  get: (req, res) => {
    const { product_id } = req.query;
    if (product_id) {
      models.products.getOne(req.query)
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    models.products.getOne(req.params)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
