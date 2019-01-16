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
          expect(characters).toEqual([
            'Rick Sanchez',
            'Morty Smith',
            'Summer Smith',
            'Beth Smith',
            'Jerry Smith',
            'Abadango Cluster Princess',
            'Abradolf Lincler',
            'Adjudicator Rick',
            'Agency Director',
            'Alan Rails',
            'Albert Einstein',
            'Alexander',
            'Alien Googah',
            'Alien Morty',
            'Alien Rick',
            'Amish Cyborg',
            'Annie',
            'Antenna Morty',
            'Antenna Rick',
            'Ants in my Eyes Johnson'
          ]);
        });
    });
  });
});
