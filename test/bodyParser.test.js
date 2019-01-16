const bodyParser = require('../lib/bodyParser');

const EventEmitter = require('events');

describe('body parser', () => {
  it('parses a request body', () => {
    const req = new EventEmitter();
    const promise = bodyParser(req)
      .then(json => {
        expect(json).toEqual({ testing: 1234 });
      });
    req.emit('data', JSON.stringify({ testing: 1234 }));
    req.emit('end');
    
    return promise;
  });
});
