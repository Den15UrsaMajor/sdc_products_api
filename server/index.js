const express = require('express');

const port = 1234;
const app = express();
const router = require('./routes.js');

app.use(express.json());
// app.use(cors());
app.use('/', router);

app.listen(port, () => {
  console.log('listening on port', port);
});
