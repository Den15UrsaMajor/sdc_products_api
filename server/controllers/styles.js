const express = require('express');
const models = require('../models');

const app = express();

module.exports = {
  get: (req, res) => {
    // req.query and req.params, pass into invocation of getAll
    // log req to see how it's structured
    models.styles.getStyle(req.query)
      .then((result) => {
        console.log('styles');
        res.send(result);
      });
  },
};
