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
        p.id as product_id,
        results
        from products p
        left join (
          select product_id,
        json_agg(
          json_build_object(
            'style_id', s.product_id,
            'name', s.name,
            'original_price', s.original_price,
            'sale_price', s.sale_price,
            'default?', s.default_style,
            'photos', photos,
            'skus', skus
          )
        ) results
        from styles s
        left join (
          select style_id,
          json_agg(
            json_build_object(
              'thumbnail_url', ph.thumbnail_url,
              'url', ph.url
            )
          ) photos
          from photos ph
          group by style_id
        )
          ph on s.product_id = ph.style_id
          left join (
            select style_id,
            json_object_agg(
             id,
             json_build_object(
                'quantity', sk.quantity,
                'size', sk.size
              )
            ) skus
            from skus sk
            group by style_id
          ) sk on s.id = sk.style_id
          group by product_id
          ) s on p.id = s.product_id where p.id = $1 and product_id = $2`, [product_id, style_id]);
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
