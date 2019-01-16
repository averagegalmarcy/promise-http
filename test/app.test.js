const request = require('supertest');
const app = require('../lib/app');
// const  { getCharacters }  = require('../lib/rickAndMortyApi');

// jest.mock('../lib/rickAndMortyApi.js', () => ({
//   getCharacter() {
//     return Promise.resolve({
//       name: 'Rick Sanchez',
//       status: 'Alive',
//       species: 'Human'
//     });
//   }
// }));

jest.mock('../lib/rickAndMortyApi.js', () => ({
  getCharacters() {
    return Promise.resolve([
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
  }
}));

describe('get rick and notes', () => {
  it('gets character and post to browser', () => {
    return request(app)
      .get('/characters/')
      .then(res => {
        expect(res.body).toEqual([
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
// describe('app', () => {
//   it('it post some data', () => {
//     return request(app)
//       .post('/note')
//       .send({ text: 'This is a note' })
//       .then(res => {
//         expect(res.status).toEqual(204);
//       });
//   });
// });
// it('has a tester route', () => {
//   return request(app)
//     .get('/you')
//     .query({ name: 'marcy' })
//     .then(res => {
//       expect(res.body).toEqual({ text: 'hi there marcy' });
//     });
// });
//   it('has a tester route', () => {
//     return request(app)
//       .get('/tester')
//       .then(res => {
//         expect(res.body).toEqual({ texting: 123 });
//       });
//   });
//   it('has a tester route', () => {
//     return request(app)
//       .get('/tester')
//       .then(res => {
//         expect(res.body).toEqual('testing123');
//       });
//   });
// });
