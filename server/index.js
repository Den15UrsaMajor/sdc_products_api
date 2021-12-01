const express = require('express');
// const { Pool } = require('pg');

const port = 1234;
const app = express();
const router = require('./routes.js');

app.use(express.json());
// app.use(cors());
app.use('/', router);

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'products',
//   port: 5432,
// });
// module.exports = pool;

app.listen(port, () => {
  console.log('listening on port', port);
});

// m.e.pool = pool, then destructure pool
