const express = require('express');
const db = require('../database/index.js')
const port = 3500;
const app = express();

app.use(express.json());
// app.use(cors());
// app.use('*', router);

//example from article for testing server
app.get('/', (req, res) => {
  res.json({info: 'working'})
})

app.listen(port, () => {
  console.log('listening on port', port)
})