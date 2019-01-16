const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/you')
      .query({ name: 'marcy' })
      .then(res => {
        expect(res.body).toEqual({ text: 'hi there marcy' });
      });
  });
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
});
