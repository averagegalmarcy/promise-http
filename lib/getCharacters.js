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