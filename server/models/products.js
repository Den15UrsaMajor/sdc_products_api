// query for database
const pool = require('../../database');

const getAll = async (params) => {
  console.log(params)
  const client = await pool.connect();
  const {count} = params || 5;
  const page = params?.page || 1;
  try {
    // await client.query('begin');
    const result = await client.query('select * from products limit $1', [count]);
    // await client.query('commit');
    return result.rows;
  } finally {
    client.release();
  }
};

const getOne = async (params) => {
  const client = await pool.connect();
  const { id } = params
}
module.exports = {
  getAll,
};
