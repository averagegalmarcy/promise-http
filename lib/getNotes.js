const getNotes = () => {
  return request
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      return res.body.results.map(char => ({
        name : char.name,
        status: char.status,
        species: char.species
      }));
    });
};

module.exports = {
  getNotes
};