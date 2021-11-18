var express = require('express')


module.exports = {
  get: function (req, res) {
  if (req.url === '/products') {
    let result = db.query('select * from products limit {5}')
    console.log(result)
    res.end(result)
  }
  }
}