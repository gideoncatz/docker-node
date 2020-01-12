const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1>Hello World!</h1>');
});

app.get('/api/items', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send([
    {
      itemId: 345,
      itemName: 'Fusion drive'
    },
    {
      itemId: 358,
      itemName: 'Screwdriver'
    }
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info(`Started app on port ${port}`);
});
