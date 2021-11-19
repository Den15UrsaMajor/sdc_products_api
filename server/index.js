const express = require('express');
const db = require('../database/index.js');

const port = 3500;
const app = express();
const router = require('./routes.js');

console.log(router);

app.use(express.json());
// app.use(cors());
app.use('/', router);

// example from article for testing server

app.listen(port, () => {
  console.log('listening on port', port);
});
