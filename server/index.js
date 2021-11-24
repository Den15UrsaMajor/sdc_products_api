const express = require('express');
const db = require('./controllers/products.js');

const port = 3500;
const app = express();
const router = require('./routes.js');

app.use(express.json());
// app.use(cors());
app.use('/', router);
// app.get('/products', db.getAll);

// example from article for testing server

app.listen(port, () => {
  console.log('listening on port', port);
});
