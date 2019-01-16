const { getCharacter, getCharacters } = require('../lib/rickAndMortyApi');

describe('Rick and Morty service', () => {
  it('gets a character by id', () => {
    return getCharacter(1) 
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
  describe('get rick and morty characters', () => {
    it('gets characters and post to browser', () => {
      return getCharacters()
        .then(characters => {
          expect(characters).toHaveLength(20);
        });
    });
  });
});
