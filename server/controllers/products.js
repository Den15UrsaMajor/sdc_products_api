const express = require('express');
const models = require('../models');

const app = express();

module.exports = {
  get: (req, res) => {
    // req.query and req.params, pass into invocation of getAll
    // log req to see how it's structured
    console.log(req.query, req.params);

    if (req.url === '/products/:product_id/styles') {
      console.log('style');
      models.styles.getStyle(req.query)
        .then((result) => {
          res.send(result);
        });
    }
    models.products.getAll(req.query)
      .then((result) => {
        res.send(result);
      });
  },
  // post: (req, res) => {
  //   console.log(req.body);
  // },
};
