const express = require('express');
const postsRoute = require('./routes/posts.js')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

app.use('/posts', postsRoute);

module.exports = app;