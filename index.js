const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1>Hello World!</h1>');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`Started app on port ${port}`);
});
