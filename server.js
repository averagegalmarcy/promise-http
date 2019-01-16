const http = require('http');
// var url = require('url');
const app = require('./lib/app');

http.createServer(app)
  .listen(8888);

