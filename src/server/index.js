const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/data', async (req, res) => {
  const response = await fetch('https://www.mrsoft.by/data.json');
  const result = await response.json();

  res.status(200).json(result);
});

app.get('*', (req, res) => res.status(404).send('Page is not found'));

app.listen(port, () => console.log(`Server is listening on ${port} port\nhttp://localhost:3001`));
