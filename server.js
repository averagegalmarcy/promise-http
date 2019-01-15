const http = require('http');
// var url = require('url');
const { parse } = require('url');

http.createServer((req, res) => {
  const url = parse(req.url);
  if(url.pathname === '/birthday') {
    res.end('Happy Birthday');
  }
  else if(url.pathname == '/tomorrow') {
    res.end('Tomorrow Tomorrow');
  }
  else if(url.pathname == '/birthday/tomorrow') {
    res.end('Tomorrow Birthday');
  } 
  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}).listen(8888);

