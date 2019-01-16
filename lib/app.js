// const http = require('http');
const { parse } = require('url');
// const net = require('net');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/you') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: `hi there ${url.query.name}` }));
  }
};

// module.exports = (req, res) => {
//   const url = parse(req.url);
//   if(url.pathname === '/tester') {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ testing: 123 }));
//   }
// };

// module.exports = (req, res) => {
//   const url = parse(req.url);
//   if(url.pathname === '/tester') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('testing123');
//   }
// };

