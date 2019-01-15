const { getCharacter } = require('../lib/rickAndMortyApi');

describe('Rick and Morty service', () => {
  it('gets a character by id', () => {
    return getCharacter(1) 
      .then(character => {
        expect(character).toEqual({
          name: 'Rich Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});
