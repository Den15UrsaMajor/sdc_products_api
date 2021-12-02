const express = require('express');
<<<<<<< HEAD
=======
// const { Pool } = require('pg');
>>>>>>> b6e644e7ebdbc7c0389eabe597e5185b0fb63d50

const port = 1234;
const app = express();
const router = require('./routes.js');

app.use(express.json());
// app.use(cors());
app.use('/', router);
<<<<<<< HEAD
=======

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'products',
//   port: 5432,
// });
// module.exports = pool;
>>>>>>> b6e644e7ebdbc7c0389eabe597e5185b0fb63d50

app.listen(port, () => {
  console.log('listening on port', port);
});

// m.e.pool = pool, then destructure pool
