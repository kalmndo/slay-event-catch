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

const PASSWORD = 'password=qK8BinizM8M9a3om';

app.use(cors());

app.get('/', async (req, res) => {
  console.log('called');
  console.log('event_type', req.query.event_type);

  if (req.query.event_type === 'payment_success') {
    console.log('trigerred');
    const uri = `${url}${COMMAND.EXIT_LOCKSCREEN}${PASSWORD}`;
    const response = await axios.get(uri);

    await keyboard.pressKey(Key.LeftControl, Key.LeftWin);
    await keyboard.pressKey(Key.Right);
    await keyboard.releaseKey(Key.LeftControl, Key.LeftWin);
    await keyboard.releaseKey(Key.Right);
  }

  if (req.query.event_type === 'session_end') {
    const uri = `${url}${COMMAND.SHOW_LOCKSCREEN}${PASSWORD}`;
    const response = await axios.get(uri);

    await keyboard.pressKey(Key.LeftControl, Key.LeftWin);
    await keyboard.pressKey(Key.Left);
    await keyboard.releaseKey(Key.LeftControl, Key.LeftWin);
    await keyboard.releaseKey(Key.Left);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
