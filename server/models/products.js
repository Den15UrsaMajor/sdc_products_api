// query for database
const { features } = require('process');
const pool = require('../../database');

const getAll = async (params) => {
  // console.log(params);
  const client = await pool.connect();
  const { product_id } = params;
  const { count } = params || 5;
  const { page } = params || 1;
  try {
    // await client.query('begin');
    if (product_id) {
      //   {
      //     "id": 11,
      //     "name": "Air Minis 250",
      //     "slogan": "Full court support",
      //     "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
      //     "category": "Basketball Shoes",
      //     "default_price": "0",
      //     "features": [
      //     {
      //             "feature": "Sole",
      //             "value": "Rubber"
      //         },
      //     {
      //             "feature": "Material",
      //             "value": "FullControlSkin"
      //         },
      //     // ...
      //     ],
      // }
      const idResult = await client.query(`select json_build_object(
        'id', p.id,
        'name', p.name,
        'slogan', p.slogan,
        'description', p.description,
        'category', p.category,
        'default_price', p.default_price,
        'features', features
      )products from products p
      left join (select
        product_id,
        json_agg(
          json_build_object(
            'feature', f.feature,
            'value', f.value
          )
        ) features from features f
        group by product_id
        ) f on p.id = f.product_id where id = $1`, [product_id]);
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
