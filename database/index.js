const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'sdc-postgres',
  database: 'products',
  password: 'sdc4321',
  port: 5432,
});

module.exports = pool;
