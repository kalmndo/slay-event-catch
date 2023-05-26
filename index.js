const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const cors = require('cors');
const { keyboard, Key } = require('@nut-tree/nut-js');

const url = 'http://127.0.0.1:1500/api/';

const COMMAND = {
  START: 'start?mode=print&&',
  EXIT_LOCKSCREEN: 'lockscreen/exit?',
  SHOW_LOCKSCREEN: 'lockscreen/show?',
};

const PASSWORD = 'password="qK8BinizM8M9a3om"';

app.use(cors());

app.get('/', async (req, res) => {
  if (req.query.event_type === 'payment_success') {
    const uri = `${url}${COMMAND.EXIT_LOCKSCREEN}${PASSWORD}`;
    // alt + tab dslrBooth
  }

  if (req.query.event_type === 'session_start') {
    // alt tab chrome
  }

  if (req.query.event_type === 'session_end') {
    const uri = `${url}${COMMAND.SHOW_LOCKSCREEN}${PASSWORD}`;
    const response = await axios.get(uri);
    // alt + tab to chrome
  }
});

app.get('/start', async (req, res) => {
  const response = await axios.get(
    'http://127.0.0.1:1500/api/lockscreen/exit?password="qK8BinizM8M9a3om"'
  );
  await keyboard.pressKey(Key.LeftAlt, Key.Tab);
  await keyboard.releaseKey(Key.LeftAlt, Key.Tab);
  console.log(JSON.stringify(response.data));

  res.send('ya aplikasi start');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
