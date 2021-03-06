/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  res.json([
    {'id': 1, 'fname': 'Ben', 'lname': 'Wasilewski', 'email': 'ben@wasilewski.com'},
    {'id': 2, 'fname': 'Tom', 'lname': 'Wasilewski', 'email': 'tom@wasilewski.com'},
    {'id': 3, 'fname': 'Margo', 'lname': 'Wasilewski', 'email': 'margo@wasilewski.com'},
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
