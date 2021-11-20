// query for database
const pool = require('../../database');

const getAll = async (params) => {
  console.log(params);
  const client = await pool.connect();
  const { product_id } = params;
  const { count } = params || 5;
  const { page } = params || 1;
  try {
    // await client.query('begin');
    if (product_id) {
      const idResult = await client.query('select * from products where id = $1', [product_id]);
      console.log('idResult', idResult);
      return idResult.rows;
    }
    const result = await client.query('select * from products limit $1', [count]);
    // await client.query('commit');
    return result.rows;
  } finally {
    client.release();
  }
};

// const getOne = async (params) => {
//   const client = await pool.connect();
//   const { id } = params;
//   try {
//     const result = await client.query('select * from products where id = $1', [id]);
//     return result.rows;
//   } finally {
//     client.release();
//   }
// };
module.exports = {
  getAll,
  // getOne,
};
