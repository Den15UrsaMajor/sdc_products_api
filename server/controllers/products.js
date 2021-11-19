const express = require('express');
const pool = require('../../database');

const getAll = (req, res) => {
  pool.query('select * from products limit 5', (err, results) => {
    if (err) {
      throw (err);
    } else {
      res.send(results.rows);
    }
  });
};

module.exports = {
  getAll,
};
