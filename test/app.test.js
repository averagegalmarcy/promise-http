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

// jest.mock('../lib/rickAndMortyApi.js', () => ({
//   getCharacters() {
//     return Promise.resolve([
//       {
//         name: 'Rick Sanchez',
//         species: 'Human',
//         status: 'Alive'
//       },
//       {
//         name: 'Morty Smith',
//         species: 'Human',
//         status: 'Alive'
//       },
//       {
//         name: 'Beth Sanchez',
//         species: 'Human',
//         status: 'Alive'
//       },
//       {
//         name: 'Summer S',
//         species: 'Human',
//         status: 'Alive'
//       }
//     ]);
//   }
// }));

// describe('app', () => {
//   beforeEach(() => {
//     return request(app)
//       .post('/note')
//       .send({ text: 'This is a note' });
//   });
// });
// it('gets a character by id', () => {
//   return request(app)
//     .get('/characters/1234')
//     .then(res => {
//       expect(res.text).toString('1234 [My favorite character]');
//     });
// });

// describe('app', () => {
//   it('gets a character by id', () => {
//     return request(app)
//       .get('/character/1')
//       .then(res => {
//         expect(res.body).toEqual({
//           name: 'Rick Sanchez',
//           species: 'Human',
//           status: 'Alive'
//         });
//       });
//   });
// });

describe('app', () => {
  it('it post some data about character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1234, note: 'My favorite character' })
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
});

// describe('get rick and notes', () => {
//   it('gets character and post to browser', () => {
//     return request(app)
//       .get('/characters/')
//       .then(res => {
//         expect(res.text).toString('Morty Smith');
//       });
//   });
// });
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
