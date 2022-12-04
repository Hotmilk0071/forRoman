const express = require('express')
const path = require('path');
const RewriteMiddleware = require('express-htaccess-middleware');
const RewriteOptions = {
  file: path.resolve(__dirname, '.htaccess'),
  verbose: (process.env.ENV_NODE === 'development'),
  watch: (process.env.ENV_NODE === 'development'),
};
const app = express()

app.use(RewriteMiddleware(RewriteOptions));

app.use(express.static(__dirname), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/error/index.html")
});

app.listen(8080);
