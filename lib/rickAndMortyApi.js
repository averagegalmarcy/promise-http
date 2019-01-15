const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`);
};

module.exports = {
  getCharacter
};
