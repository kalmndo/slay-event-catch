const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const app = express();
const port = 3000;

const url = 'http://localhost:1500/api/';

const COMMAND = {
  START: 'start?mode=print&&',
  EXIT_LOCKSCREEN: 'lockscreen/exit?',
  SHOW_LOCKSCREEN: 'lockscreen/show?',
};

app.get('/', (req, res) => {
  // payment success
  // exit lockscreen
  // CTRL + TAB
  // if session_end
  // show lockscreen
  // CTRL + TAB

  if (req.query.event_type === 'payment_success') {
    const uri = `${url}${COMMAND.EXIT_LOCKSCREEN}password="qK8BinizM8M9a3om"`;

    // alt + tab dslrBooth
  }

  if (req.query.event_type === 'session_start') {
    // alt tab chrome
  }

  if (req.query.event_type === 'session_end') {
    // alt + tab to chrome
  }
});

app.get('/start', async (req, res) => {
  // var data = new FormData();

  // const config = {
  //   method: 'get',
  //   maxBodyLength: Infinity,
  //   url: 'http://localhost:1500/api/lockscreen/exit?password="qK8BinizM8M9a3om"',
  //   headers: {
  //     ...data.getHeaders(),
  //   },
  //   data: data,
  // };
  // const response = await axios(config);
  const response = await axios.get(
    'http://localhost:1500/api/lockscreen/exit?password="qK8BinizM8M9a3om"'
  );

  console.log(JSON.stringify(response.data));

  res.send('ya aplikasi start');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
