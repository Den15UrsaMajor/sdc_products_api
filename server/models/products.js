// query for database
// const { features } = require('process');
const pool = require('../../database');

// created structure of async calls from : https://node-postgres.com/features/transactions

const getAll = async (params) => {
  console.log('GET ALL');
  const client = await pool.connect();
  const { product_id } = params;
  const { count } = params;
  const productCount = count || 5;
  const { page } = params || 1;
  try {
    const result = await client.query('select * from products limit $1', [productCount]);
    return result.rows;
  } finally {
    client.release();
  }
};
// Will return request for one product
const getOne = async (params) => {
  console.log('GET ONE');
  const client = await pool.connect();
  const { product_id } = params;
  const { count } = params;
  const productCount = count || 5;
  const { page } = params || 1;
  try {
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
    return idResult.rows[0];
  } finally {
    client.release();
  }
};
// Will return styles for one product, responding to url path ending in /styles
const getStyle = async (params) => {
  console.log('GET STYLE');
  const client = await pool.connect();
  const { product_id } = params;
  const { count } = params;
  const productCount = count || 5;
  const { page } = params || 1;
  try {
    // Used this article to create structure of query:
    // https://stackoverflow.com/questions/42222968/create-nested-json-from-sql-query-postgres-9-4
    const idResult = await client.query(`select
        p.id as product_id,
        results
        from products p
        left join (
          select product_id,
        json_agg(
          json_build_object(
            'style_id', s.id,
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
          ) s on p.id = s.product_id where p.id = $1`, [product_id]);
    // console.log(idResult);
    return idResult.rows[0];
  } finally {
    client.release();
  }
};

module.exports = {
  getAll,
  getOne,
  getStyle,
};
