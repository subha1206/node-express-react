const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welocme to starter pack');
});
app.get('/api/home', (req, res) => {
  res.send('hello World');
});

app.listen(5000);
