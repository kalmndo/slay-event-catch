const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  req.res.send('Hello World!');
});

app.get('/start', async (req, res) => {
  var data = new FormData();

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:1500/api/lockscreen/exit',
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  };
  const response = await axios(config);

  console.log(JSON.stringify(response.data));

  res.send('ya aplikasi start');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
