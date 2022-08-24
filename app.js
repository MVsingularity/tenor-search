const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});

app.get('/', (req, res) => {
  res.send('Hello Squirrel');
});
