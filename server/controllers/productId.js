const express = require('express');
const models = require('../models');

const app = express();

module.exports = {
  get: (req, res) => {
    // req.query and req.params, pass into invocation of getAll
    // log req to see how it's structured
    console.log('reqQuery', req.query);
    models.productId.getOne(req.query)
      .then((result) => {
        console.log('result', result);
        res.send(result);
      });
  },
};
