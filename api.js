const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    res.body.results
      .map(character => character.origin.url)
      .filter(originUrl => originUrl !== '');   
  })
  .then(originsURL => {
    return Promise.all(originsURL.map(url => {
      return request.get(url);
    }));
  })
  .then(originRess => originRess.map(originRes => originRes.body))
  /* eslint-disable-next-line*/
  .then(origins => console.log(origins));
