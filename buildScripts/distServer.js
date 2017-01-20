/* eslint-disable no-console */

import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'

const port = 3000
const app = express()

app.use(compression())
app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  res.json([
    {'id': 1, 'firstName': 'Ben', 'lastName': 'Wasilewski', 'email': 'ben@wasilewski.com'},
    {'id': 2, 'firstName': 'Tom', 'lastName': 'Wasilewski', 'email': 'tom@wasilewski.com'},
    {'id': 3, 'firstName': 'Margo', 'lastName': 'Wasilewski', 'email': 'margo@wasilewski.com'},
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
