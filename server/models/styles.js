// query for database
const { features } = require('process');
const pool = require('../../database');

const getStyle = async (params) => {
  // console.log(params);
  const client = await pool.connect();
  const { product_id } = params;
  const { count } = params || 5;
  const { page } = params || 1;
  try {
    if (product_id) {
      console.log('trying');
      const idResult = await client.query(`select
        'product_id', p.id,
        'results', results
        from products p
        left join (
          select product_id,
        json_agg(
          json_build_object(
            'style_id', s.style_id,
            'name', s.name,
            'original_price", s.original_price,
            'sale_price', s.sale_price,
            'default?', s.default_style,
            'photos', photos,
            'skus', skus
          )
        ) styles from styles s
            left join (
              select style_id,
              json_agg(
                json_build_object(
                  'thumbnail_url', ph.thumbnail_url,
                  'url', ph.url
                )
              ) photos
              from photos ph
            left join (
              select style_id,
              json_build_object(
                sk.id, json_build_object(
                  'quantity', sk.quantity,
                  'size', sk.size
                )
              ) skus
              from skus sk
              group by 1
            ) sk on s.id = sk.style_id
              group by style_id
            ) ph on s.product_id = ph.style_id
        group by product_id
        ) s on p.id = s.product_id where id = $1`, [product_id]);
      return idResult.rows;
    }
  } finally {
    client.release();
  }
};

module.exports = {
  getStyle,
};
