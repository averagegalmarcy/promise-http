// const http = require('http');
const { parse } = require('url');
// const bodyParser = require('./bodyParser');
const { getCharacters } = require('./rickAndMortyApi');
// const net = require('net');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters/')) {
    getCharacters()
      .then(characters => {
        const html = characters.map(char => {
          return `<li> Name: ${char.name}
                  Status: ${char.status}
                  Species: ${char.species}</li>`;
        }).reduce((acc, curr) => acc + curr);
        // eslint-disable-next-line no-console
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>${html}</body></html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`ERROR ${err}`);
      });
  }
};

// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname.includes('/character/')) {
//     const id = url.pathname.slice(1).split('/')[1];
//     getCharacter(id)
//       .then(character => {
//         // eslint-disable-next-line no-console
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(character));
//       })
//       .catch(err => {
//         res.statusCode = 500;
//         res.end(`ERROR ${err}`);
//       });
//   }
// };


// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(req.method === 'POST' && url.pathname === '/note') {
//     bodyParser(req) 
//       .then(body => {
//         notes[noteId++] = body; 
//         res.statusCode = 204;
//         res.end();
//       });
//   }
// };
  

// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname === '/you') {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ text: `hi there ${url.query.name}` }));
//   }
// };

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

