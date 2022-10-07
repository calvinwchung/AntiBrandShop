const express = require('express');
const cors = require('cors');

const products = require('./products');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Welcome to our online shop API...');
});

app.get('/products', (req, res) => {
  res.send(products);
});



app.listen(port, console.log(`Server running on port ${port}`))
