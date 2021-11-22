// const pool = require('../../database');

// const getOne = async (params) => {
//   const client = await pool.connect();
//   console.log(params);
//   const { product_id } = params;

//   try {
//     const result = await client.query('select * from products where id = $1', [product_id]);
//     console.log('LALAresults', result.rows);
//     return result.rows;
//   } finally {
//     client.release();
//   }
// };
// module.exports = {
//   getOne,
// };
