/* eslint-disable indent */
const copy = require('./readFile');
const fsPromises = require('fs').promises;


describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./http-copy.md');
  });
  it('copies files', () => {
    return copy('./http.md', './http-copy.md')
      .then(() => {
        return Promise.all([
        fsPromises.readFile('./http.md'),
        fsPromises.readFile('./http-copy.md')
        ]);
      })
      .then(([text, textCopy]) => {
        expect(text).toEqual(textCopy);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});

