const express = require('express');

const app = express();
const pool = require('');

module.exports = {
  get(req, res) {
    res.send('hello');
    const result = db.query('select * from products limit {5}');
    // .end(result)
    // }
  },
};
