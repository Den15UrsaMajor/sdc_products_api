// query for database
// const { features } = require('process');
const pool = require('../../database');

const getAll = async (params) => {
  // console.log(params);
  const client = await pool.connect();
  const { product_id } = params;
  const { count } = params || 5;
  const { page } = params || 1;
  const { style_id } = params;
  try {
    if (product_id && !style_id) {
      const idResult = await client.query(`select
         p.id,
        p.name,
         p.slogan,
        p.description,
        p.category,
        p.default_price,
        features
      from products p
      left join (select
        product_id,
        json_agg(
          json_build_object(
            'feature', f.feature,
            'value', f.value
          )
        ) features from features f
        group by product_id
        ) f on p.id = f.product_id where p.id = $1`, [product_id]);
      return idResult.rows;
    }
    if (style_id) {
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
            'original_price', s.original_price,
            'sale_price', s.sale_price,
            'default?', s.default_style,
            'photos', photos,
            'skus', skus
          )
        ) results from styles s
            left join (
              select style_id,
              json_agg(
                json_build_object(
                  'thumbnail_url', ph.thumbnail_url,
                  'url', ph.url
                )
              ) photos
              from photos ph
              )
              ph on s.product_id = ph.style_id
          group by style_id
            left join (
              select style_id,
              json_build_object(
                sk.id, json_build_object(
                  'quantity', sk.quantity,
                  'size', sk.size
                )
              ) skus
              from skus sk
              group by sk.id
            ) sk on s.id = sk.style_id
              group by style_id
        ) s on p.id = s.product_id where id = $1 and style_id = $2`, [product_id, style_id]);
      console.log(typeof idResult.rows);
      return idResult.rows;
    }
    const result = await client.query('select * from products limit $1', [count]);
    return result.rows;
  } finally {
    client.release();
  }
};

const postOne = async (params) => {
  console.log(params);
  const result = await client.query('insert into ');
};
module.exports = {
  getAll,
  postOne,
};

// 'id', p.id,
// 'name', p.name,
// 'slogan', p.slogan,
// 'description', p.description,
// 'category', p.category,
// 'default_price', p.default_price,
// 'features', features
