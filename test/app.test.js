const request = require('supertest');
const app = require('../lib/app');


describe('get rick and notes', () => {
  it('gets character and post to browser', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
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
