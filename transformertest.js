const { transformer } = require('./transformer');
const { removeCapitals } = require('./transformer');

describe('transformer', () => {
  it('transforms some file', () => {
    return transformer('./transformer.txt')
      .then(transText => {
        expect(transText).toEqual('EREH I');
      });
  });
  it('removes capital letters', () => {
    expect(removeCapitals('Hi There')).toEqual('i here');
  });
});
